import { Container } from '@micro/components/auth/Container';
import { Button } from '@micro/components/common/Button';
import { NextPage } from 'next';

const PasswordResetPage: NextPage = () => {
	return (
		<Container>
			<form className="flex flex-col gap-y-4">
				<input
					id="password"
					type="password"
					name="password"
					placeholder="Password"
					className="w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none"
				/>
				<input
					id="password"
					type="confirmPassword"
					name="confirmPassword"
					placeholder="Confirm Password"
					className="w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none"
				/>
				<Button>Reset Password</Button>
			</form>
		</Container>
	);
};

export default PasswordResetPage;
