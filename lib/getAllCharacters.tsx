export default async function GetAllCharacters() {
  const array = Array.from({ length: 20 }, (v, i) => i + 1);

  const shuffle = (arr: number[]) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  const shuffledArr = shuffle(array);
  const slicedArr = shuffledArr.slice(0, 4);

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${slicedArr}`
  );
  if (!res.ok) throw new Error('failed to fetch characters');

  return res.json();
}
