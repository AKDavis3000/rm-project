'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSpaceShuttle } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevState) => !prevState);
  }

  return (
    <header className="header_wrapper">
      <Image
        src="/gen_images/logo-no-bg.png"
        alt="rick and morty logo"
        width={200}
        height={100}
        className="rm_logo"
      />
      <FaSpaceShuttle
        className={clicked ? 'fa-shuttle rotate' : 'fa-shuttle'}
        onClick={handleClick}
      />
      <nav className={clicked ? 'nav_wrapper' : 'nav_wrapper active'}>
        <ul className="nav_ul">
          <li>
            <Link
              href="/"
              className="links">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Play"
              className="links">
              Play!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
