import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../scss/styles.scss';

export default function Card() {
  return (
    <section>
      <div className="card_wrapper">
        <div className="img_wrapper">
          <Image
            src="/characters_img/annie.png"
            alt="Annie from rick and morty."
            width={150}
            height={150}
            className="img"
          />
        </div>
        <div className="info_wrapper">
          <div></div>
          <p>Name: insert name</p>
          <div></div>
          <p>Gender: insert gender</p>
          <div></div>
          <p>Location: insert location</p>
        </div>
      </div>
      <div className="card_wrapper">
        <div className="img_wrapper">
          <Image
            src="/characters_img/rick_sanchez.png"
            alt="Annie from rick and morty."
            width={150}
            height={150}
            className="img"
          />
        </div>
        <div className="info_wrapper">
          <div></div>
          <p>Name: insert name</p>
          <div></div>
          <p>Gender: insert gender</p>
          <div></div>
          <p>Location: insert location</p>
        </div>
      </div>
      <div className="card_wrapper">
        <div className="img_wrapper">
          <Image
            src="/characters_img/morty_smith.png"
            alt="Annie from rick and morty."
            width={150}
            height={150}
            className="img"
          />
        </div>
        <div className="info_wrapper">
          <div></div>
          <p>Name: insert name</p>
          <div></div>
          <p>Gender: insert gender</p>
          <div></div>
          <p>Location: insert location</p>
        </div>
      </div>
    </section>
  );
}
