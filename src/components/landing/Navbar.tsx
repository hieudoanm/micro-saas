import { Button, OutlineButton } from '@micro/components/common/Button';
import { APP_NAME } from '@micro/constants/constants';
import Link from 'next/link';
import { FC } from 'react';
import { NavbarContainer } from '../common/NavbarContainer';
import { Linear } from '../common/Typography';

export const Navbar: FC = () => {
	return (
		<NavbarContainer>
			<Link href="/" className="text-xl font-black">
				<Linear>{APP_NAME}</Linear>
			</Link>
			<div className="flex items-center gap-x-2 md:gap-x-4">
				<Link href="/auth/sign-in">
					<OutlineButton>Sign In</OutlineButton>
				</Link>
				<Link href="/auth/sign-up">
					<Button>Sign Up</Button>
				</Link>
			</div>
		</NavbarContainer>
	);
};
