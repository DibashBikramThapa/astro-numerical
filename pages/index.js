import React, { useState } from "react";


import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Input from '../components/input';
import Datepicker from '../components/datepicker';

export default function Home() {

  const [user_input, settUserInput] = useState('');
  const [user_date, settUserDate] = useState('');

  const getUserInput = (text)=>{
    settUserInput(text)
  }


  return (
    <div className="min-w-[38rem]">
      <Head>
        <title>AstroNumeral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='bg-hero flex flex-col justify-center items-center'>
          <Hero
           user_input= {user_input}
           user_date={user_date}
          />
          <Datepicker
            settUserDate={settUserDate}
          />
          <Input
            user_date={user_date}
            getUserInput={getUserInput}
          />
        </div>
      </Layout>

    </div>
  );
}
