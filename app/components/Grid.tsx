import React from 'react';
import Image from 'next/legacy/image';

export default function Grid({ imgSrc, name }) {
  return (
    <>
      <div className="grid_card_wrapper">
        <div className="cards">
          <Image
            src={imgSrc}
            alt={name}
            width={175}
            height={175}
            layout="fill"
            className="card_face"
          />
          <Image
            src="/gen_images/portal.png"
            alt="rick and morty"
            width={175}
            height={175}
            layout="fill"
            className="card_back"
          />
        </div>
      </div>
    </>
  );
}
