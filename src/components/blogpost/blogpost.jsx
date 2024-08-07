import React from "react";
import Blogbutton from "./blogbutton";
import Blogpostcard from "./blogpostcad";

const Blogpost = ({ bloglist }) => {
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
      <div>
        <Blogpostcard bloglist={bloglist} />
      </div>
      <div className="flex justify-center">
        <button className=" m-auto border border-purple-500 rounded-md px-10 py-5 mt-24 ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blogpost;
