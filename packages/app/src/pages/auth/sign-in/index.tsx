import { Button, OutlineButton } from '@micro/components/common/Button';
import { Input } from '@micro/components/common/Input';
import { useUser } from '@micro/contexts/UserContext';
import { AuthTemplate } from '@micro/templates/AuthTemplate';
import { trpcClient } from '@micro/utils/trpc';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const SignInPage: NextPage = () => {
	const router = useRouter();
	const { push } = router;

	const { refresh } = useUser();

	const [{ email = '', password = '' }, setState] = useState<{
		email: string;
		password: string;
	}>({
		email: '',
		password: '',
	});

	const onSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const response = await trpcClient.auth.user.signIn.mutate({
			email,
			password,
		});
		const { success } = response;
		if (success) {
			alert('Sign In Successfully');
			refresh();
			push('/');
		} else {
			alert('Failed to Sign In');
		}
	};

	return (
		<AuthTemplate>
			<form onSubmit={onSubmit} className="flex flex-col gap-y-4">
				<Input
					id="email"
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(event) => {
						setState((previous) => ({
							...previous,
							email: event.target.value,
						}));
					}}
					required
				/>
				<Input
					id="password"
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(event) => {
						setState((previous) => ({
							...previous,
							password: event.target.value,
						}));
					}}
					required
				/>
				<div className="flex justify-between px-4">
					<span className="border-b border-dotted text-sm md:text-base">
						Remember Me
					</span>
					<Link
						href="/auth/password/forget"
						className="border-b border-dotted text-sm md:text-base">
						Forget Password
					</Link>
				</div>
				<Button type="submit">Sign In</Button>
				<Link href="/auth/sign-up">
					<OutlineButton>Sign Up</OutlineButton>
				</Link>
			</form>
		</AuthTemplate>
	);
};

export default SignInPage;
