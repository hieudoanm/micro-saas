import { FC } from 'react';
import { Button } from '../common/Button';

export const CTA: FC = () => {
	return (
		<section className="container mx-auto flex flex-col px-4 pt-8 pb-4 md:px-8 md:pt-16 md:pb-8">
			<div className="mx-auto w-full max-w-2xl space-y-4 md:space-y-8">
				<h2 className="text-center text-3xl font-extrabold">Call to Action</h2>
				<p className="text-center text-base md:text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.
				</p>
				<div className="flex w-full items-center justify-center">
					<Button size="lg">Sign Up</Button>
				</div>
			</div>
		</section>
	);
};
