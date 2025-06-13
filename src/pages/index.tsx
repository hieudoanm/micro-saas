import { Footer } from '@micro/components/common/Footer';
import { RadialGradientBackground } from '@micro/components/common/RadialGradientBackground';
import { CallToAction } from '@micro/components/landing/CallToAction';
import { Demo } from '@micro/components/landing/Demo';
import { Features } from '@micro/components/landing/Features';
import { FrequentlyAskedQuestions } from '@micro/components/landing/FrequentlyAskedQuestions';
import { Hero } from '@micro/components/landing/Hero';
import { Navbar } from '@micro/components/landing/Navbar';
import { Testimonials } from '@micro/components/landing/Testimonials';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<div className="flex flex-col gap-y-8 md:gap-y-16">
			<RadialGradientBackground />
			<Navbar />
			<main className="flex flex-col gap-y-8 md:gap-y-16">
				<Hero />
				<div className="flex flex-col gap-y-8 md:gap-y-16">
					<Features />
					<Demo />
					<Testimonials />
					<FrequentlyAskedQuestions />
					<CallToAction />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default HomePage;
