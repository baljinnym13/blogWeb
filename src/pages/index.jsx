import Slider from "@/components/slider";
import Trending from "@/components/trending";
import Blogpost from "@/components/blogpost/blogpost";
import { useContext, useEffect, useState } from "react";
import Loader from "@/components/loader";
import { MyContext } from "@/provider/provider";

export default function Home() {
  const { articles, handleClick } = useContext(MyContext);
  return (
    <main>
      <Loader />
      <Slider />
      <Trending />
      <Blogpost bloglist={articles} handleClick={handleClick} />
    </main>
  );
}
