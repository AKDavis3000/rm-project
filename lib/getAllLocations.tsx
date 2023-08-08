export default async function GetAllLocations() {
  const res = await fetch('https://rickandmortyapi.com/api/location');

  if (!res.ok) throw new Error('failed to fetch locations');

  return res.json();
}
