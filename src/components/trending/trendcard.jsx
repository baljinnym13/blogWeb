import React from "react";

const Trendcard = ({ imgUrl, button, text }) => {
  return (
    <div className="h-[320px] relative">
      <div className="bg-black opacity-75 rounded-2xl">
        <img className="w-full h-[320px] rounded-2xl" src={imgUrl} alt="" />
      </div>
      <div className=" absolute z-10 bottom-7 left-0 px-7">
        <button className="bg-blue-500 text-white rounded-md text-xs px-3 py-1">
          {" "}
          {button}
        </button>
        <p className="font-semibold text-white text-xl mt-5"> {text}</p>
      </div>
    </div>
  );
};

export default Trendcard;
