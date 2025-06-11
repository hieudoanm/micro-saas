import { Button } from '@micro/components/common/Button';
import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<section className="container mx-auto px-4 py-8 md:px-8 md:py-16">
			<div className="flex flex-col gap-y-4 md:gap-y-8">
				<div className="mx-auto flex max-w-2xl flex-col gap-y-4 md:gap-y-8">
					<h1 className="text-center text-5xl font-black md:text-6xl">
						<span className="bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent">
							micro/saas
						</span>
					</h1>
					<p className="text-center text-lg md:text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.
					</p>
				</div>
				<div className="flex w-full items-center justify-center">
					<Button>Get Started</Button>
				</div>
			</div>
		</section>
	);
};
