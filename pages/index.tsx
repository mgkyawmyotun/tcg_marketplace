import type { NextPage } from 'next';
import Head from 'next/head';
import favICON from '../assets/favicon.png';
import LogoIcon from '../components/svg/LogoIcon';
import styles from '../styles/Home.module.scss';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TCG Marketplace</title>
        <link rel="icon" type="image/png" href={favICON.src}></link>
      </Head>
      <LogoIcon />
    </div>
  );
};

export default Home;
