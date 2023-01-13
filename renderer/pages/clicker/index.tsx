import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import { useState } from 'react';
function Home() {
  const [clicks, setClicks] = useState(0);
  const [cursor, setCursor] = useState(0);
  function click() {
    setClicks(clicks + 1);
    save();
  }
  function i() {
    setClicks(clicks + 1);
  }

  function save() {
    localStorage.setItem('clicks', clicks.toString());
    localStorage.setItem('cursor', cursor.toString());
  }
  function buy_cursor() {
    if (clicks < 200) return;
    setClicks(clicks - 200);
    setCursor(cursor + 1);
  }
  useEffect(() => {
    console.log('test');
    setCursor(Number(localStorage.getItem('clicks')));
    setClicks(Number(localStorage.getItem('cursor')));

    save();
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
          <button onClick={buy_cursor}>Buy cursor</button>
        </div>
      </main>
    </>
  );
}

export default Home;
