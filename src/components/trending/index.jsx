import React from "react";
import Trendcard from "./trendcard";
const card = [
  {
    img: "/images/slider.png",
    button: "Technology ",
    text: " The Impact of Technology  on the Workplace: How Technology is Changing",
  },
  {
    img: "/images/slider.png",
    button: "Technology ",
    text: "The Impact of Technology  on the Workplace: How Technology is Changing ",
  },
  {
    img: "/images/slider.png",
    button: "Technology ",
    text: "The Impact of Technology  on the Workplace: How Technology is Changing ",
  },
  {
    img: "/images/slider.png",
    button: "Technology ",
    text: "The Impact of Technology  on the Workplace: How Technology is Changing ",
  },
];

const Trending = () => {
  return (
    <div className="w-9/12 m-auto mt-28">
      <h1 className="font-bold text-[24px]">Trending</h1>
      <div className="w-full flex justify-between gap-5 mt-8 h-[320px]">
        {card.map(({ img, button, text }) => (
          <Trendcard imgUrl={img} button={button} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
