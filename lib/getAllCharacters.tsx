export default async function GetAllCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  if (!res.ok) throw new Error('failed to fetch characters');

  return res.json();
}
