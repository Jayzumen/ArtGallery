// function for fetching the artwork data with a limit of 20 items
export const fetchData = async (query, pageNumber) => {
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=${pageNumber}&limit=20&fields=id,title,image_id,thumbnail`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`error loading search results (${res.status})`);
  }
  return res.json();
};

// fetch function for fetching a single Artwork
export const fetchOneArt = async (id) => {
  const url = `https://api.artic.edu/api/v1/artworks/${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`error loading search results (${res.status})`);
  }
  return res.json();
};
