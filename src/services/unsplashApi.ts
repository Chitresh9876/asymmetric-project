const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (page: number, perPage: number = 25) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`
  );
  if (!response.ok) throw new Error("Failed to fetch images");
  return await response.json();
};
