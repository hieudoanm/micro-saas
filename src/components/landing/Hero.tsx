import { Button } from '@micro/components/common/Button';
import { APP_NAME } from '@micro/constants/constants';
import { FC } from 'react';
import { Linear } from '../common/Typography';

export const Hero: FC = () => {
	return (
		<section className="container mx-auto px-4 py-8 md:px-8 md:py-16">
			<div className="mx-auto w-full max-w-2xl space-y-4 text-center md:space-y-8">
				<h1 className="text-center text-5xl font-black md:text-6xl">
					<Linear>{APP_NAME}</Linear>
				</h1>
				<p className="text-center text-base md:text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus.
				</p>
				<div className="mx-auto w-full max-w-lg rounded-full">
					<div className="overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]">
						<div className="flex rounded-full bg-neutral-900 p-1 md:p-2">
							<input className="grow rounded-full border-0 px-3 py-1 text-sm focus:outline-none md:px-4 md:py-2 md:text-base"></input>
							<Button>🔍 Search</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
