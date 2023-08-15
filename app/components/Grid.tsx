import React from 'react';
import Image from 'next/legacy/image';
import { randomizeCards, gameInfo } from '@/assets/gameInfo';

export default function Grid() {
  // console.log('on grid page.');
  // console.log(randomizeCards(gameInfo));

  return (
    <section className="grid_section_wrapper">
      <div className="start_wrapper overlay">
        <p className="start_button">Click to start</p>
      </div>
      {/* <div className="winner_wrapper overlay">
        <p className="winner">Winner!</p>
      </div>
      <div className="loser_wrapper overlay">
        <p className="loser">Loser!</p>
      </div> */}
      <div className="grid_card_wrapper">
        {/* <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_1.png"
            alt="Tony from rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_face"
          />
          {'card face '}
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
          {'card back '}
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fixed"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
        <div
          className="cards
      ">
          <Image
            src="/card_imgs/card_2.png"
            alt="rm"
            width={175}
            height={175}
            layout="fill"
          />
          <Image
            src="/card_imgs/card_cover.jpg"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div> */}
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
