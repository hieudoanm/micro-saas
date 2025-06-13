import { Footer } from '@micro/components/common/Footer';
import { RadialGradientBackground } from '@micro/components/common/RadialGradientBackground';
import { CTA } from '@micro/components/landing/CTA';
import { Demo } from '@micro/components/landing/Demo';
import { FAQ } from '@micro/components/landing/FAQ';
import { Features } from '@micro/components/landing/Features';
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
				<Features />
				<Demo />
				<Testimonials />
				<FAQ />
				<CTA />
			</main>
			<Footer />
		</div>
	);
};

export default HomePage;
