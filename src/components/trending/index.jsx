import React, { useEffect, useState } from "react";
import Trendcard from "./trendcard";

const Trending = () => {
  const [trendPosts, setTrendPosts] = useState([]);
  const getTrendPost = async () => {
    const res = await fetch(`https://dev.to/api/articles?top=1&per_page=4`);
    const data = await res.json();
    setTrendPosts(data);
  };
  useEffect(() => {
    getTrendPost();
  }, [trendPosts]);
  return (
    <div className="w-9/12 m-auto mt-28">
      <h1 className="font-bold text-[24px]">Trending</h1>
      <div className="w-full flex justify-between gap-5 mt-8 h-[320px]">
        {trendPosts.map(({ cover_image, type_of, title }) => (
          <Trendcard imgUrl={cover_image} button={type_of} text={title} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
