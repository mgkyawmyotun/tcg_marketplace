import type { NextPage } from 'next';
import Head from 'next/head';
import favICON from '../assets/favicon.png';
import { Header } from '../components/header';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TCG Marketplace</title>
        <link rel="icon" type="image/png" href={favICON.src}></link>
      </Head>
      <Header />
    </>
  );
};

export default Home;
