import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSpaceShuttle } from 'react-icons/fa';

export default function Navbar() {
  // const shuttle = document.querySelector('.fa-shuttle');
  // const rotate = document.querySelector('.rotate');
  // const visible = document.querySelector('.visible');
  // const navUl = document.querySelector('.nav_ul');

  // function handleClick() {
  //   shuttle.current.classList.toggle('rotate');
  //   navUl.current.classList.toggle('visible');
  // }

  return (
    <header className="header_wrapper">
      <Image
        src="/gen_images/logo-no-bg.png"
        alt="rick and morty logo"
        width={200}
        height={100}
      />
      <FaSpaceShuttle className="fa-shuttle" />
      <nav className="nav_wrapper">
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
              href="/play"
              className="links">
              Play!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
