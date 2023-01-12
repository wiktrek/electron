import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import axios from 'axios';
import { useState } from 'react';
import './components/navbar';
import Navbar from './components/navbar';
function Home() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
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
