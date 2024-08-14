import Slider from "@/components/slider";
import Trending from "@/components/trending";
import Blogpost from "@/components/blogpost/blogpost";
import { useContext, useEffect, useState } from "react";
import Loader from "@/components/loader";
import { MyContext } from "@/provider/provider";
import { getArrticle } from "@/fetch";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(21);

  useEffect(() => {
    getArrticle(count, setArticles);
  }, [count]);
  const handleClick = () => {
    setCount(count + 3);
  };

  return (
    <main>
      <Loader />
      <Slider />
      <Trending />
      <Blogpost bloglist={articles} handleClick={handleClick} />
    </main>
  );
}
