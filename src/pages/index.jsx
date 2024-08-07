import { Inter } from "next/font/google";
import Slider from "@/components/slider";
import Trending from "@/components/trending";
import Blogpost from "@/components/blogpost/blogpost";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticles] = useState([]);
  const getArrticle = async () => {
    const res = await fetch("https://dev.to/api/articles");
    const data = await res.json();
    setArticles(data);
    console.log("data", data);
  };
  useEffect(() => {
    getArrticle();
    console.log("articles", articles);
  }, []);
  return (
    <main>
      <Slider />
      <Trending />
      <Blogpost bloglist={articles} />
    </main>
  );
}
