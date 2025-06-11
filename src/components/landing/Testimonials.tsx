import { FC } from 'react';

export const Testimonials: FC = () => {
	return (
		<section className="container mx-auto flex flex-col gap-y-8 px-4 py-8 md:gap-y-16 md:px-8 md:py-16">
			<div className="mx-auto w-full max-w-2xl">
				<div className="flex flex-col items-center justify-center gap-y-4 md:gap-y-8">
					<p className="text-center text-2xl font-medium">
						&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta.&rdquo;
					</p>
					<p>- First Last, Full Stack Engineer -</p>
				</div>
			</div>
		</section>
	);
};
