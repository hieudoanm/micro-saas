import { FC, useEffect, useState } from 'react';

export const Demo: FC = () => {
	const [origin, setOrigin] = useState<string>('');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setOrigin(window.origin);
		}
	}, []);

	return (
		<section className="flex flex-col gap-y-8 py-8 md:gap-y-16 md:py-16">
			<div className="container mx-auto px-4 md:px-8">
				<div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10">
					{/* <!-- Top Bar --> */}
					<div className="flex items-center gap-x-4 border-b border-neutral-800 p-2 md:p-4">
						<div className="flex gap-x-2">
							<span className="h-3 w-3 rounded-full bg-red-500"></span>
							<span className="h-3 w-3 rounded-full bg-yellow-500"></span>
							<span className="h-3 w-3 rounded-full bg-green-500"></span>
						</div>
						<div className="grow items-center truncate rounded border border-neutral-800 px-2 py-1 text-sm text-neutral-100">
							{origin}
						</div>
					</div>
					{/* <!-- Content Area --> */}
					<div className="aspect-[9/16] w-full md:aspect-[16/9]"></div>
				</div>
			</div>
		</section>
	);
};
