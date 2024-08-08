import { Inter } from "next/font/google";
import Slider from "@/components/slider";
import Trending from "@/components/trending";
import Blogpost from "@/components/blogpost/blogpost";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [style, setStyle] = useState("");
  const handleClicked = () => {
    setStyle("text-red");
    console.log("clicked");
  };
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);
  const getArrticle = async () => {
    const res = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getArrticle();
  }, [count]);
  const handleClick = () => {
    setCount(count + 3);
  };
  return (
    <main>
      <Slider />
      <Trending />
      <Blogpost
        bloglist={articles}
        handleClick={handleClick}
        handleClicked={handleClicked}
        style={style}
      />
    </main>
  );
}
