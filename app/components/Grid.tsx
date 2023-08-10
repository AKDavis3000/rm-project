import React from 'react';
import Image from 'next/image';

export default function Grid() {
  return (
    <section className="section_wrapper">
      <div className="start_wrapper overlay">
        <p className="start_button">Click to start</p>
      </div>
      <div className="grid_card_wrapper">
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="true"
            className="card_img"
          />
        </div>
      </div>
      <button className="reset_button">Reset</button>
      <p className="counter">
        <span>0/5</span>
      </p>
      <p className="timer">
        <span> 1:00</span>
      </p>
    </section>
  );
}
