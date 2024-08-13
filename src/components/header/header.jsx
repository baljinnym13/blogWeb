import { MyContext } from "@/provider/provider";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
const headerMenuList = [
  { text: "Home", link: "/" },
  { text: "Blog", link: "/blog" },
  { text: "Contact", link: "/contact" },
];
const Header = () => {
  // const { setSearchValue } = useContext(MyContext);
  // const handleChange = (e) => {
  //   setSearchValue(e.target.value);
  // };
  return (
    <div className="py-8 mb-[100px]">
      <div className="w-9/12 flex justify-between items-center m-auto pr-20">
        <div>
          <img className="w-[158px] h-9" src="/images/Logo.svg" alt="" />
        </div>
        <div>
          <ul className="flex gap-4 font-normal text-[16px] text-gray-600">
            {headerMenuList.map(({ text, link }, idx) => (
              <li key={idx}>
                <Link href={link}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="flex items-center bg-gray-200 px-2 py-1 rounded-md">
          {/* <input
            className=" bg-gray-200 text-black focus:outline-none placeholder-gray-400"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          /> */}
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
