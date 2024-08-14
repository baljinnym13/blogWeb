import { getArrticle } from "@/fetch";
import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import SliderCard from "./sliderCard";

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
  let [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slideCard hidden md:block relative  my-24 m-auto overflow-hidden w-9/12 ">
      <div
        className=" flex transition-all ease-out duration-150 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {articles.map((article, i) => (
          <SliderCard
            cover_image={article.cover_image}
            type_of={article.type_of}
            title={article.title}
            published_at={article.published_at}
            idx={i}
          />
        ))}
      </div>
      <div className="text-end mt-4">
        <button
          className="border rounded-lg p-4 mr-2"
          onClick={() => {
            currentIndex--;
            if (currentIndex < 0) currentIndex = articles.length - 1;
            setCurrentIndex(currentIndex);

            console.log("prev");
          }}
        >
          <GrPrevious />
        </button>
        <button
          className="border rounded-lg p-4"
          onClick={() => {
            currentIndex++;
            if (currentIndex === articles.length) currentIndex = 0;
            setCurrentIndex(currentIndex);
          }}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Slider;
// className="flex transition-all ease-out duration-150"
// style={{ transform: `translateX(-${currentIndex * 100}%)` }}
