import React, { useEffect } from 'react';
import Head from 'next/head';
import './components/navbar';
import Navbar from './components/navbar';
import { useState } from 'react';
function Home() {
  const [clicks, setClicks] = useState(0);
  function click() {
    setClicks(clicks + 1);
    save();
  }
  function save() {
    localStorage.setItem('clicks', clicks.toString());
  }
  useEffect(() => {
    setClicks(Number(localStorage.getItem('clicks')));
    localStorage.setItem('clicks', clicks.toString());
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <p>{clicks}</p>
          <button
            onClick={click}
            className=" w-20 h-20 bg-slate-500 rounded-xl"
          >
            Click
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
