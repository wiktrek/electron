import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import axios from 'axios';
import { useState } from 'react';
function Home() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  function onChange(e: { target: { value: React.SetStateAction<string> } }) {
    setText(e.target.value);
  }

  function save() {
    axios
      .post('/api/save', {
        text: text,
      })
      .then(function (response) {
        setError(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <input
          onChange={onChange}
          className=" focus:outline-none bg-transparent border-transparent hover:border-transparent"
        />
        <button onClick={save}>Save</button>
      </div>
    </>
  );
}

export default Home;
