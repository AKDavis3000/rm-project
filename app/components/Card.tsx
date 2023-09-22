import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../scss/styles.scss';
import GetAllCharacters from '@/lib/getAllCharacters';

export default async function Card({}) {
  const characterData: Promise<RMCharacter[]> = GetAllCharacters();
  const resCharData = await characterData;
  const results = resCharData;

  const cardInfo = [
    { id: 1 },
    {
      name: 'Abadango Cluster Princess',
      imgSrc: '/characters_img/Abadango_Cluster_Princess.png',
    },
    {
      name: 'Abradolf Lincler',
      imgSrc: '/characters_img/abradolf_lincler.png',
    },
    {
      name: 'Adjudicator Rick',
      imgSrc: '/characters_img/adjudicator_rick.png',
    },
    { name: 'Agency Director', imgSrc: '/characters_img/agency_director.png' },
    { name: 'Alan Rails', imgSrc: '/characters_img/alan_rails.png' },
    { name: 'Albert Einstein', imgSrc: '/characters_img/albert_einstein.png' },
    { name: 'Alexander', imgSrc: '/characters_img/alexander.png' },
    { name: 'Alien Googah', imgSrc: '/characters_img/alien_googah.png' },
    { name: 'Alien Morty', imgSrc: '/characters_img/alien_morty.png' },
    { name: 'Alien Rick', imgSrc: '/characters_img/alien_rick.png' },
    { name: 'Amish Cyborg', imgSrc: '/characters_img/Amish_cyborg.png' },
    { name: 'Annie', imgSrc: '/characters_img/annie.png' },
    { name: 'Antenna Morty', imgSrc: '/characters_img/antenna_morty.png' },
    { name: 'Antenna Rick', imgSrc: '/characters_img/antenna_rick.png' },
    {
      name: 'Ants in my Eyes Johnson',
      imgSrc: '/characters_img/ants_johnson.png',
    },
    { name: 'Beth Smith', imgSrc: '/characters_img/Beth_Smith.png' },
    { name: 'Jerry Smith', imgSrc: '/characters_img/Jerry_Smith.png' },
    { name: 'Morty Smith', imgSrc: '/characters_img/morty_smith.png' },
    { name: 'Rick Sanchez', imgSrc: '/characters_img/rick_sanchez.png' },
    { name: 'Summer Smith', imgSrc: '/characters_img/summer_smith.png' },
  ];

  const content = (
    <>
      <section className="section_card_wrapper">
        {results.map((charInfo) => {
          return (
            <div
              className="card_wrapper"
              key={charInfo.id}>
              <div className="info_wrapper">
                <p>Name: {charInfo.name}</p>
                <div className="line"></div>
                <p>Species: {charInfo.species}</p>
                <div className="line"></div>
                <p>Origin: {charInfo.origin.name}</p>
              </div>
              {cardInfo
                .filter((char) => {
                  return charInfo.name === char.name;
                })
                .map((char) => {
                  return (
                    <Image
                      src={char.imgSrc!}
                      alt=""
                      width={80}
                      height={110}
                      className="img"
                      key="1"
                    />
                  );
                })}
            </div>
          );
        })}
      </section>
    </>
  );

  return content;
}
