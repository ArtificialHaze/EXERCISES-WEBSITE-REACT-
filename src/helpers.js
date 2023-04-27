const RAPID_API_KEY = "cd5db1327emsh1e9c02453826b19p1ee49ajsn11a339071b45";
const RAPID_API_KEY_YOUTUBE =
  "cd5db1327emsh1e9c02453826b19p1ee49ajsnwsdfa339071b45";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY_YOUTUBE,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
