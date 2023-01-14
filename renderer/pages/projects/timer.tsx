import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
function Home() {
  let t: number;
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  function startTimer() {
    const i = setInterval(addToTimer, 1000);

    if (run === true) {
      clearInterval(i);
      return setRun(false);
    }
    setRun(true);
  }
  function addToTimer() {
    console.log(t);
    t = t + 1;
    setTime(t);
  }
  return (
    <>
      <Head>
        <title>Timer</title>
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center">
          <Navbar />
          <a>{time}</a>
          <button onClick={startTimer}>{run ? 'stop' : 'start'}</button>
        </div>
      </main>
    </>
  );
}

export default Home;
