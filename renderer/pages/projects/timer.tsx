import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
function Home() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timer>();
  let t: number = 0;
  function startTimer() {
    const i = setInterval(addToTimer, 1000);
    setTimer(i);
    setRun(true);
  }
  function stopTimer() {
    clearInterval(timer);
    setTime(0);
    return setRun(false);
  }
  function addToTimer() {
    console.log(run);
    t = t + 1;
    console.log(t);
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
          <a>{time.toFixed()}</a>
          <button
            onClick={run ? stopTimer : startTimer}
            className=" h-20 w-20 bg-slate-400 rounded-xl text-2xl text-black"
          >
            {run ? 'stop' : 'start'}
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
