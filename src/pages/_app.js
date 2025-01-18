import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import '@/styles/scrollbar.css';
import '@/styles/slick-slider/slick.min.css';
import '@/styles/slick-slider/slick-theme.min.css';
import '@/styles/scrollbar.css';
import { SSRProvider } from 'react-bootstrap';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => (
	<SSRProvider>
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
		</Head>
		<NavBar />
		<Component {...pageProps} />
		<Footer />
	</SSRProvider>
);

export default appWithTranslation(MyApp);
