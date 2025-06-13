import { Container } from '@micro/components/auth/Container';
import { Button, OutlineButton } from '@micro/components/common/Button';
import { Input } from '@micro/components/common/Input';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const SignInPage: NextPage = () => {
	const [{ email = '', password = '' }, setState] = useState<{ email: string; password: string }>({
		email: '',
		password: '',
	});

	return (
		<Container>
			<form className="flex flex-col gap-y-4">
				<Input
					id="email"
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(event) => {
						setState((previous) => ({ ...previous, email: event.target.value }));
					}}
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
				/>
				<div className="flex justify-between px-4">
					<span className="border-b border-dotted">Remember Me</span>
					<Link href="/auth/password/forget" className="border-b border-dotted">
						Forget Password
					</Link>
				</div>
				<Button>Sign In</Button>
				<Link href="/auth/sign-up">
					<OutlineButton>Sign Up</OutlineButton>
				</Link>
			</form>
		</Container>
	);
};

export default SignInPage;
