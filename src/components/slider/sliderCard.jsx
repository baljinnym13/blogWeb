import React from "react";

const SliderCard = ({ cover_image, type_of, title, published_at, idx }) => {
  return (
    <div className="relative min-w-full">
      <div key={idx} className="w-full h-[550px] bg-transparent relative ">
        <div>
          <img className="" src={cover_image} alt="img" />
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
    </div>
  );
};

export default SliderCard;
