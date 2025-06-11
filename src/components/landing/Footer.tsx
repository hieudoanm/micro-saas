import Link from 'next/link';

const year = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className="border-t border-neutral-800 shadow shadow-neutral-100/10">
			<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
				<div className="flex items-start justify-between">
					<div className="flex flex-col gap-y-1">
						<p>&copy; {year} micro/saas.</p>
						<p>All Rights Reserved.</p>
					</div>
					<div className="flex flex-col gap-y-1 text-right">
						<Link href="https://github.com" target="_blank">
							GitHub
						</Link>
						<Link href="https://x.com" target="_blank">
							Twitter
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
