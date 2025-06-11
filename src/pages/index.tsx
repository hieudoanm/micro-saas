import { NextPage } from 'next';
import Link from 'next/link';

const year = new Date().getFullYear();

const HomePage: NextPage = () => {
	return (
		<div className="flex flex-col gap-y-8 md:gap-y-16">
			<nav>
				<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
					<div className="flex items-center justify-between">
						<code>micro/saas</code>
						<Link href="#" target="_blank">
							GitHub
						</Link>
					</div>
				</div>
			</nav>
			<main className="container mx-auto flex flex-col gap-y-8 px-4 md:gap-y-16 md:px-8">
				<section className="flex flex-col gap-y-4 md:gap-y-8">
					<h1 className="text-center text-6xl font-black">micro/saas</h1>
					<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus. </p>
					<div className="flex w-full items-center justify-center">
						<button className="rounded-lg border border-neutral-800 px-4 py-2">Get Started</button>
					</div>
				</section>
				<section className="flex flex-col gap-y-8 md:gap-y-16">
					<h2 className="text-center text-3xl font-extrabold">Features</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
						{[
							{
								id: 'feature-1',
								title: 'Feature 1',
								description:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
							},
							{
								id: 'feature-2',
								title: 'Feature 2',
								description:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
							},
							{
								id: 'feature-3',
								title: 'Feature 3',
								description:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius est in justo egestas eleifend. Nulla vitae nibh volutpat, rhoncus.',
							},
						].map(({ id = '', title = '', description = '' }) => {
							return (
								<div key={id} className="col-span-1 flex flex-col gap-y-4 md:gap-y-8">
									<h3 className="text-bold text-center text-2xl">{title}</h3>
									<p className="text-neutral-500">{description}</p>
								</div>
							);
						})}
					</div>
				</section>
			</main>
			<footer>
				<div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
					<p className="text-center">
						&copy; {year} <code>micro/saas</code>. All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;
