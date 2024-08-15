import React from "react";
import Blogbutton from "./blogbutton";
import Link from "next/link";

const Blogpostcard = ({ bloglist }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {bloglist.map(
        ({ social_image, type_of, title, readable_publish_date, id }) => (
          <Link href={"/blog/" + id}>
            <div className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4 items-start ">
              <img src={social_image} alt="" />
              <Blogbutton text={type_of} />
              <p>{title}</p>
              <p>{readable_publish_date}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Blogpostcard;
