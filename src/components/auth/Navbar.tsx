import Link from 'next/link';
import { FC } from 'react';

export const Navbar: FC = () => {
	return (
		<nav className="border-b border-neutral-800 shadow shadow-neutral-100/10">
			<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="text-xl font-black">
						<span className="bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent">
							micro/saas
						</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
