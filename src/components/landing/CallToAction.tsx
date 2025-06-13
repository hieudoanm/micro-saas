import { FC } from 'react';
import { Button } from '../common/Button';
import { Heading2, Heading6 } from '../common/Typography';

export const CallToAction: FC = () => {
	return (
		<section className="container mx-auto flex flex-col px-4 pt-8 pb-4 md:px-8 md:pt-16 md:pb-8">
			<div className="mx-auto w-full max-w-2xl space-y-4 md:space-y-8">
				<div className="flex flex-col gap-y-4 text-center">
					<Heading2>Call to Action</Heading2>
					<Heading6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading6>
				</div>
				<div className="flex w-full items-center justify-center">
					<Button size="lg">Sign Up</Button>
				</div>
			</div>
		</section>
	);
};
