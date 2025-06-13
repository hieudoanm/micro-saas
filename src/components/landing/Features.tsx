import { FC } from 'react';
import { Heading2, Heading6 } from '../common/Typography';

export const Features: FC = () => {
	return (
		<section className="container mx-auto flex flex-col gap-y-4 px-4 md:gap-y-8 md:px-8">
			<div className="flex flex-col gap-y-4 text-center">
				<Heading2>Features</Heading2>
				<Heading6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading6>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
				{[
					{
						id: 'feature-1',
						emoji: '🚀',
						title: 'Feature 1',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
					},
					{
						id: 'feature-2',
						emoji: '🚀',
						title: 'Feature 2',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
					},
					{
						id: 'feature-3',
						emoji: '🚀',
						title: 'Feature 3',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
					},
				].map(({ id = '', emoji = '', title = '', description = '' }) => {
					return (
						<div key={id} className="col-span-1">
							<div className="flex flex-col items-center justify-center gap-y-2 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 shadow shadow-neutral-100/10 transition-all hover:scale-110 md:gap-y-4">
								<span className="text-4xl">{emoji}</span>
								<h3 className="text-bold text-xl">{title}</h3>
								<p className="text-center text-sm text-neutral-400">{description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
