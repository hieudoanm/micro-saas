import { Button } from '@micro/components/common/Button';
import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<section className="container mx-auto px-4 py-8 md:px-8 md:py-16">
			<div className="mx-auto w-full max-w-2xl space-y-4 text-center md:space-y-8">
				<h1 className="text-center text-5xl font-black md:text-6xl">
					<span className="bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 bg-clip-text text-transparent">
						micro/saas
					</span>
				</h1>
				<p className="text-center text-base md:text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.
				</p>
				<div className="mx-auto flex w-full max-w-lg rounded-full border border-neutral-800 bg-neutral-900/40 p-1 shadow shadow-neutral-100/10 md:p-2">
					<input className="grow rounded-full border-0 px-4 py-2 focus:outline-none"></input>
					<Button>Sign Up</Button>
				</div>
			</div>
		</section>
	);
};
