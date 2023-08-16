export const gameInfo = [
  {
    imgSrc: '/card_imgs/card_1.png',
    name: 'Tony',
  },
  {
    imgSrc: '/card_imgs/card_2.png',
    name: 'Cornvelious Daniel',
  },
  {
    imgSrc: '/card_imgs/card_3.png',
    name: 'Rick',
  },
  {
    imgSrc: '/card_imgs/card_4.png',
    name: 'Morty',
  },
  {
    imgSrc: '/card_imgs/card_5.jpg',
    name: 'Portal Gun',
  },
  {
    imgSrc: '/card_imgs/card_6.png',
    name: 'Space Cruiser',
  },
  {
    imgSrc: '/card_imgs/card_1.png',
    name: 'Tony',
  },
  {
    imgSrc: '/card_imgs/card_2.png',
    name: 'Cornvelious Daniel',
  },
  {
    imgSrc: '/card_imgs/card_3.png',
    name: 'Rick',
  },
  {
    imgSrc: '/card_imgs/card_4.png',
    name: 'Morty',
  },
  {
    imgSrc: '/card_imgs/card_5.jpg',
    name: 'Portal Gun',
  },
  {
    imgSrc: '/card_imgs/card_6.png',
    name: 'Space Cruiser',
  },
];

export function randomizeCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const randomCards = randomizeCards(gameInfo);
