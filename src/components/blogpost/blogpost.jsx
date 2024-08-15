import Blogpostcard from "./blogpostcad";
import Link from "next/link";
const postMenuList = [
  { text: "All" },
  { text: "Design" },
  { text: "Travel" },
  { text: "Fashion" },
  { text: "Technology" },
  { text: "Branding" },
];

const Blogpost = ({ bloglist, handleClick }) => {
  return (
    <div className="w-9/12 m-auto mt-[100px]">
      <h1 className="mb-8 text-2xl font-bold">All Blog Post</h1>
      <div className="flex justify-between mb-8">
        {
          <ul className="flex gap-5 font-bold text-xs">
            {postMenuList.map(({ text }, idx) => (
              <li key={idx}>
                <button>{text}</button>
              </li>
            ))}
          </ul>
        }

        <Link className="font-bold text-xs text-gray-600" href={"/blog"}>
          View All
        </Link>
      </div>
      <div>
        <Blogpostcard bloglist={bloglist} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className=" m-auto border border-purple-500 rounded-md px-10 py-5 mt-24 "
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blogpost;
