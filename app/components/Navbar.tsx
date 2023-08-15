'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { FaSpaceShuttle } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [ishovering, setIsHovering] = useState(false);
  function handleMouseEnter() {
    setIsHovering((prevState) => !prevState);
  }
  function handleMouseLeave() {
    setIsHovering((prevState) => !prevState);
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
        // className={clicked ? 'fa-shuttle rotate' : 'fa-shuttle'}
        // onClick={handleClick}
        className={ishovering ? 'fa-shuttle rotate' : 'fa-shuttle'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* <nav className={clicked ? 'nav_wrapper' : 'nav_wrapper active'}> */}
      <nav className={ishovering ? 'nav_wrapper' : 'nav_wrapper active'}>
        {/* <ul className="nav_ul"> */}
        <ul
          className={ishovering ? 'nav_ul' : 'nav_ul active'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
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
