import Link from 'next/link';
import { FC } from 'react';

export const Navbar: FC = () => {
	return (
		<nav className="border-b border-neutral-800 shadow shadow-neutral-100/10">
			<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
				<div className="flex items-center justify-between">
					<code className="text-xl font-black">micro/saas</code>
					<Link href="#" target="_blank">
						GitHub
					</Link>
				</div>
			</div>
		</nav>
	);
};
