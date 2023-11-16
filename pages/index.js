import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AstroNumeral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero/>
      </Layout>

    </div>
  );
}
