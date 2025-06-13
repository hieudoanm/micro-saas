import { Container } from '@micro/components/auth/Container';
import { Button, OutlineButton } from '@micro/components/common/Button';
import { Input } from '@micro/components/common/Input';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const SignUpPage: NextPage = () => {
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
				<Button>Sign Up</Button>
				<Link href="/auth/sign-in">
					<OutlineButton>Sign In</OutlineButton>
				</Link>
			</form>
		</Container>
	);
};

export default SignUpPage;
