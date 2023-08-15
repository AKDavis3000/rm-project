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
    imgSrc: '/card_imgs/card_5.png',
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
    imgSrc: '/card_imgs/card_5.png',
    name: 'Portal Gun',
  },
  {
    imgSrc: '/card_imgs/card_6.png',
    name: 'Space Cruiser',
  },
];

export function randomizeCards(arr) {
  // const random = gameInfo.sort(() => Math.random() - 0.5);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
