import React, { useContext, useEffect, useState } from "react";
import Trendcard from "./trendcard";
import { MyContext } from "@/provider/provider";
const Trending = () => {
  const { trendPosts } = useContext(MyContext);
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
