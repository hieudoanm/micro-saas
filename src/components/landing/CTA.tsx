import { Button } from '@micro/components/common/Button';
import { FC } from 'react';

export const CTA: FC = () => {
	return (
		<section className="container mx-auto flex flex-col gap-y-8 px-4 pt-8 pb-4 md:gap-y-16 md:px-8 md:pt-16 md:pb-8">
			<div className="mx-auto w-full max-w-2xl">
				<div className="flex flex-col items-center justify-center gap-y-2 md:gap-y-4">
					<h2 className="text-3xl font-extrabold">Call to Action</h2>
					<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.</p>
					<div className="flex w-full items-center justify-center">
						<Button>Get Started</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
