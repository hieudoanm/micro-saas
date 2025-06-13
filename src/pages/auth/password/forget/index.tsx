import { Container } from '@micro/components/auth/Container';
import { Button, OutlineButton } from '@micro/components/common/Button';
import { NextPage } from 'next';
import Link from 'next/link';

const PasswordForgetPage: NextPage = () => {
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
				<Button>Recover Password</Button>
				<Link href="/auth/sign-in">
					<OutlineButton>Back to Sign In</OutlineButton>
				</Link>
			</form>
		</Container>
	);
};

export default PasswordForgetPage;
