import { getArrticle } from "@/fetch";
import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Slider = () => {
  const [articles, setArticles] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    getArrticle(5, setArticles);
  }, []);
  // const nextclick = () => {
  //   setCurIndex(() => {
  //     return curIndex < articles.length - 1 ? curIndex + 1 : 0;
  //   });
  // };
  // const prevclick = () => {
  //   setCurIndex(() => {
  //     return curIndex > 0 ? curIndex - 1 : articles.length - 1;
  //   });
  // };

  return (
    <div>
      <div className="w-9/12 m-auto ">
        <div className="w-[1220px] h-[550px] bg-transparent relative shadow-2xl flex overflow-hidden scroll-m-1 ">
          {articles.map(
            ({ cover_image, type_of, title, published_at }, idx) => (
              <div
                key={idx}
                className="w-[1220px] h-[550px] bg-transparent relative shadow-2xl"
              >
                <div>
                  <img src={cover_image} alt="img" />
                </div>
                <div className="bg-white w-[50%] p-10 pr-32 border rounded-lg absolute z-10 bottom-[13px] left-[11px]">
                  <button className="bg-blue-500 text-white text-sm rounded-lg px-2 py-1">
                    {type_of}
                  </button>
                  <h1 className="font-semibold text-4xl mt-4 mb-6">{title}</h1>
                  <p className="font-normal text-[16px] text-gray-400">
                    {published_at}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-end mt-4">
          <button className="border rounded-lg p-4 mr-2">
            <GrPrevious />
          </button>
          <button className="border rounded-lg p-4">
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
