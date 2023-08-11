import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import '../scss/styles.scss';
import GetAllCharacters from '@/lib/getAllCharacters';
import { resourceLimits } from 'worker_threads';
// import GetAllLocations from '@/lib/getAllLocations';

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

  // return (
  //   <section className="section_card_wrapper">
  //     <div className="card_wrapper">
  //       <div className="img_wrapper">
  //         <Image
  //           src="/characters_img/annie.png"
  //           alt="Annie from rick and morty."
  //           width={150}
  //           height={150}
  //           className="img"
  //           layout="responsive"
  //         />
  //       </div>
  //       <div className="info_wrapper">
  //         <p>Name: insert name</p>
  //         <div className="line"></div>
  //         <p>species: insert species</p>
  //         <div className="line"></div>
  //         <p>origin: insert origin</p>
  //       </div>
  //     </div>
  //     <div className="card_wrapper">
  //       <div className="img_wrapper">
  //         <Image
  //           src="/characters_img/rick_sanchez.png"
  //           alt="Annie from rick and morty."
  //           width={150}
  //           height={150}
  //           className="img"
  //           layout="responsive"
  //         />
  //       </div>
  //       <div className="info_wrapper">
  //         <p>Name: insert name</p>
  //         <div className="line"></div>
  //         <p>Gender: insert gender</p>
  //         <div className="line"></div>
  //         <p>Location: insert location</p>
  //       </div>
  //     </div>
  //     <div className="card_wrapper">
  //       <div className="img_wrapper">
  //         <Image
  //           src="/characters_img/morty_smith.png"
  //           alt="Annie from rick and morty."
  //           width={150}
  //           height={150}
  //           className="img"
  //           layout="responsive"
  //         />
  //       </div>
  //       <div className="info_wrapper">
  //         <p>Name: insert name</p>
  //         <div className="line"></div>
  //         <p>Gender: insert gender</p>
  //         <div className="line"></div>
  //         <p>Location: insert location</p>
  //       </div>
  //     </div>
  //     <div className="card_wrapper">
  //       <div className="img_wrapper">
  //         <Image
  //           src="/characters_img/alien_rick.png"
  //           alt="Annie from rick and morty."
  //           width={150}
  //           height={150}
  //           className="img"
  //           layout="responsive"
  //         />
  //       </div>
  //       <div className="info_wrapper">
  //         <p>Name: insert name</p>
  //         <div className="line"></div>
  //         <p>Gender: insert gender</p>
  //         <div className="line"></div>
  //         <p>Location: insert location</p>
  //       </div>
  //     </div>
  //   </section>
  // );
  return content;
}
