import React, { useContext } from "react";
import Blogbutton from "./blogbutton";
import Link from "next/link";
import { MyContext } from "@/provider/provider";

const Blogpostcard = ({ bloglist }) => {
  const { searchValue } = useContext(MyContext);
  return (
    <div className="grid grid-cols-3 gap-4">
      {bloglist
        .filter((el) => el?.title.toLowerCase().includes(searchValue))
        .map(({ social_image, type_of, title, readable_publish_date, id }) => (
          <Link href={"/blog/" + id}>
            <div className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4 items-start ">
              <img src={social_image} alt="" />
              <Blogbutton text={type_of} />
              <p>{title}</p>
              <p>{readable_publish_date}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blogpostcard;
