import React from "react";
import Blogbutton from "./blogbutton";
import Blogpostcard from "./blogpostcad";

const Blogpost = () => {
  return (
    <div className="w-9/12 m-auto mt-[100px]">
      <h1 className="mb-8 text-2xl font-bold">All Blog Post</h1>
      <div className="flex justify-between mb-8">
        <ul className="flex gap-5 font-bold text-xs text-gray-600">
          <li className="text-red-500">All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <ul className="flex gap-5 font-bold text-xs text-gray-600">
          <li>View All</li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        <Blogpostcard />
      </div>
    </div>
  );
};

export default Blogpost;
