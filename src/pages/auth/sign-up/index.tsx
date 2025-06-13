import { Container } from '@micro/components/auth/Container';
import { Button, OutlineButton } from '@micro/components/common/Button';
import { Input } from '@micro/components/common/Input';
import { trpcClient } from '@micro/utils/trpc';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const SignUpPage: NextPage = () => {
	const router = useRouter();
	const { push } = router;

	const [{ loading = false, email = '', password = '' }, setState] = useState<{
		loading: boolean;
		email: string;
		password: string;
	}>({ loading: false, email: '', password: '' });

	const onSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const response = await trpcClient.auth.user.signUp.mutate({ email, password });
		const { success } = response;
		if (success) {
			alert('Sign Up Successfully');
			push('/auth/sign-in');
		} else {
			alert('Failed to Sign Up');
		}
	};

	return (
		<Container>
			<form onSubmit={onSubmit} className="flex flex-col gap-y-4">
				<Input
					id="email"
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(event) => {
						setState((previous) => ({ ...previous, email: event.target.value }));
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
						setState((previous) => ({ ...previous, password: event.target.value }));
					}}
					required
				/>
				<Button type="submit">{loading ? 'Loading' : 'Sign Up'}</Button>
				<Link href="/auth/sign-in">
					<OutlineButton>Sign In</OutlineButton>
				</Link>
			</form>
		</Container>
	);
};

export default SignUpPage;
