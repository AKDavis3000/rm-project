'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { FaSpaceShuttle } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [ishovering, setIsHovering] = useState(false);
  function handleMouse() {
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
        className={ishovering ? 'fa-shuttle rotate' : 'fa-shuttle'}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      />

      <nav className={ishovering ? 'nav_wrapper' : 'nav_wrapper active'}>
        <ul
          className={ishovering ? 'nav_ul' : 'nav_ul active'}
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}>
          <li>
            <Link
              href="/"
              className="links">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
