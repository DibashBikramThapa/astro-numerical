import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Input from '../components/input';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AstroNumeral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='bg-hero flex flex-col justify-center items-center min-h-[20rem]'>
          <Hero/>
          <Input/>
        </div>
      </Layout>

    </div>
  );
}
