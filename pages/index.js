import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Input from '../components/input';
import Datepicker from '../components/datepicker';

export default function Home() {
  return (
    <div className="min-w-[38rem]">
      <Head>
        <title>AstroNumeral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='bg-hero flex flex-col justify-center items-center'>
          <Hero/>
          <Datepicker/>
          <Input/>
        </div>
      </Layout>

    </div>
  );
}
