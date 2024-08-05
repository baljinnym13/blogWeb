import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="py-8 mb-[100px]">
      <div className="w-9/12 flex justify-between items-center m-auto pr-20">
        <div>
          <img className="w-[158px] h-9" src="./images/Logo.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-4 font-normal text-[16px] text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button className="flex items-center bg-gray-200 px-2 py-1 rounded-md">
          <input
            className=" bg-gray-200 text-black focus:outline-none placeholder-gray-400"
            type="text"
            placeholder="Search"
          />
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
