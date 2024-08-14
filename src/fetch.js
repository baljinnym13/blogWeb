export const getArrticle = async (count, setArticles) => {
  const res = await fetch(
    `https://dev.to/api/articles?page=1&per_page=${count}`
  );
  const data = await res.json();
  setArticles(data);
};
