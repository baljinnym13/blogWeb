import React from "react";

const Blogbutton = ({ text }) => {
  return (
    <button className="bg-gray-100 rounded-md px-2 py-1 text-blue-500">
      {text}
    </button>
  );
};

export default Blogbutton;
