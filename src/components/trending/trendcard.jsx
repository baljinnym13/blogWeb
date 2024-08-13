import React from "react";

const Trendcard = ({ imgUrl, button, text }) => {
  return (
    <div className="h-[320px] relative">
      <div className="bg-[rgba(20, 22, 36, 0.4)] bg-blend-darken rounded-2xl">
        <img
          className="w-full h-[320px] bg-[rgba(20, 22, 36, 0.4)] bg-blend-darken rounded-2xl"
          src={imgUrl}
          alt=""
        />
      </div>
      <div className=" absolute z-10 bottom-7 left-0 px-7">
        <button className="bg-blue-500 text-white rounded-md text-xs px-3 py-1">
          {button}
        </button>
        <p className="font-semibold text-gray-500 text-xl mt-5"> {text}</p>
      </div>
    </div>
  );
};

export default Trendcard;
