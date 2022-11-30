export const fetchData = async (query) => {
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=20&fields=id,title,image_id,thumbnail`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`error loading search results (${res.status})`);
  }
  return res.json();
};
