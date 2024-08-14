import React from "react";

const SliderCard = ({ cover_image, type_of, title, published_at, idx }) => {
  return (
    <div className={`relative min-w-full`}>
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
    </div>
  );
};

export default SliderCard;
{
  /* <div className="absolute bottom-3 left-3 z-10 p-10 bg-white rounded-xl w-[50%]">
        <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
          {category}
        </button>
        <h1 className="text-4xl font-semibold pr-15">{title}</h1>
        <p className="text-base text-gray-400 mt-5">{date}</p>
      </div>
      <img
        src={imgUrl}
        className={`rounded-xl w-full object-cover h-[800px] brightness-[0.6]`}
        fill={true}
      /> */
}
