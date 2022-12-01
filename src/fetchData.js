export const fetchData = async (query, pageNumber) => {
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=${pageNumber}&limit=20&fields=id,title,image_id,alt_image_ids,thumbnail`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`error loading search results (${res.status})`);
  }
  return res.json();
};

export const fetchOneArt = async (id) => {
  const url = `https://api.artic.edu/api/v1/artworks/${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`error loading search results (${res.status})`);
  }
  return res.json();
};
