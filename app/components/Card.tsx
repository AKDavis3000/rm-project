import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import '../scss/styles.scss';
import GetAllCharacters from '@/lib/getAllCharacters';
import { resourceLimits } from 'worker_threads';
import { cardInfo } from '@/assets/cardInfo';

export default async function Card() {
  const characterData: Promise<RMCharacter[]> = GetAllCharacters();
  const resCharData = await characterData;
  const results = resCharData;

  const content = (
    <>
      <section className="section_card_wrapper">
        {results.map((charInfo) => {
          return (
            <div
              className="card_wrapper"
              key={charInfo.id}>
              <div className="img_wrapper">
                <Image
                  src="/characters_img/annie.png"
                  alt="Annie from rick and morty."
                  width={150}
                  height={150}
                  className="img"
                  layout="responsive"
                />
              </div>
              <div className="info_wrapper">
                <p>Name: {charInfo.name}</p>
                <div className="line"></div>
                <p>Species: {charInfo.species}</p>
                <div className="line"></div>
                <p>Origin: {charInfo.origin.name}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );

  return content;
}
