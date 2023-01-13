import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
function Navbar() {
  return (
    <>
      <div className="justify-center flex text-center text-white m-0 p-0 list-none">
        <ul className="space-x-5">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/clicker">
            <a>clicker</a>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
