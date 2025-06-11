import '@micro/styles/globals.css';
import { trpc } from '@micro/utils/trpc';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
