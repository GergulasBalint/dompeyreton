import Head from 'next/head';
import FullPageHeader from '@/components/FullPageHeader';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { parseCookies } from 'nookies';

const Intro = dynamic(() => import('@/components/IntroContent'));
const Title = dynamic(() => import('@/components/small_comp/LargeTitle'));
const ExploreLuxury = dynamic(() => import('@/components/ExploreLuxuryGites'));
const Content = dynamic(() => import('@/components/HomeContent'));
const Availability = dynamic(() => import('@/components/AvailabilityAction'));
const PageBreaker = dynamic(() => import('@/components/PageBreak'));

export async function getServerSideProps(context) {
	const cookies = parseCookies(context);
	const locale = cookies['i18next'] || context.req?.locale || context.locale;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

export default function Home() {
	const { t } = useTranslation('common');
	const [title, setTitle] = useState('');

	useEffect(() => {
		setTitle(t('navigation.home'));
	}, [t]);

	return (
		<>
			<Head>
				{title ? <title>Dompeyreton | {title}</title> : <title>Dompeyreton</title>}
			</Head>
			<FullPageHeader />
			{Intro && <Intro />}
			{Title && <Title text={t('exploreGites.heading')} />}
			{ExploreLuxury && <ExploreLuxury />}
			{Content && <Content />}
			{Availability && <Availability />}
			{PageBreaker && <PageBreaker />}
		</>
	);
}
