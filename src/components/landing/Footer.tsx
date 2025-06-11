const year = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className="border-t border-neutral-800 shadow shadow-neutral-100/10">
			<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
				<p className="text-center">
					&copy; {year}{' '}
					<code className="inline-block rounded border border-neutral-800 px-2 py-0.5 shadow shadow-neutral-100/10">
						micro/saas
					</code>
					. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
