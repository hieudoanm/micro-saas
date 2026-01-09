import { APP_NAME } from '@micro/constants/constants';
import { UserProvider } from '@micro/contexts/UserContext';
import '@micro/styles/globals.css';
import { trpcHook } from '@micro/utils/trpc';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import { FC } from 'react';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>{APP_NAME}</title>
			</Head>
			<div className={`${geistSans.className} ${geistMono.className}`}>
				<UserProvider>
					<Component {...pageProps} />
				</UserProvider>
			</div>
		</>
	);
};

export default trpcHook.withTRPC(App);
