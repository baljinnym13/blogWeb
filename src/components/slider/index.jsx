import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Slider = () => {
  return (
    <div>
      <div className="w-9/12 m-auto">
        <div className="w-full relative">
          <div className=" ">
            <img className="w-full" src="./images/slider.png" alt="" />
          </div>
          <div className="bg-white p-10 pr-32 border rounded-lg absolute z-10 bottom-[13px] left-[11px]">
            <button className="bg-blue-500 text-white text-sm rounded-lg px-2 py-1">
              Technology
            </button>
            <h1 className="font-semibold text-4xl mt-4 mb-6">
              Grid system for better <br /> Design User Interface
            </h1>
            <p className="font-normal text-[16px] text-gray-400">
              August 20, 2022
            </p>
          </div>
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
