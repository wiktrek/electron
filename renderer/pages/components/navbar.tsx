import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
function Navbar() {
  return (
    <>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
