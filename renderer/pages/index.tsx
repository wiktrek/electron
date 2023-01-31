import React from 'react';
import Head from 'next/head';
import './components/navbar';
import Navbar from './components/navbar';
function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default Home;
