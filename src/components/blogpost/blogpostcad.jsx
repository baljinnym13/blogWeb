import React from "react";
import Blogbutton from "./blogbutton";
const bloglist = [
  {
    blogimg: "/images/1.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Technology",
  },
  {
    blogimg: "/images/2.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Design",
  },
  {
    blogimg: "/images/3.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Technology",
  },
  {
    blogimg: "/images/4.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Technology",
  },
  {
    blogimg: "/images/5.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "TSoftware",
  },
  {
    blogimg: "/images/6.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Technology",
  },
  {
    blogimg: "/images/7.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Technology",
  },
  {
    blogimg: "/images/8.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Technology",
  },
  {
    blogimg: "/images/9.png",
    blogtext:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    btntext: "Technology",
  },
];
const Blogpostcard = () => {
  return (
    <div>
      {bloglist.map(({ blogimg, btntext, blogtext, date }) => (
        <div className="border border-gray-200 rounded-xl p-4 w-[200px] h-[435px] ">
          <img src={blogimg} alt="" />
          <Blogbutton text={btntext} />
          <p>{blogtext}</p>
          <p>{date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogpostcard;
{
  /* <img src="" alt="" />
      <Blogbutton text={badge} />
      <p></p>
      <p></p> */
}
