import { Container } from '@micro/components/auth/Container';
import { Button, OutlineButton } from '@micro/components/common/Button';
import { NextPage } from 'next';
import Link from 'next/link';

const SignInPage: NextPage = () => {
	return (
		<Container>
			<form className="flex flex-col gap-y-4">
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Email"
					className="w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none"
				/>
				<input
					id="password"
					type="password"
					name="password"
					placeholder="Password"
					className="w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none"
				/>
				<div className="px-4">
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
