import Slider from "@/components/slider";
import Trending from "@/components/trending";
import Blogpost from "@/components/blogpost/blogpost";
import { useContext } from "react";
import { MyContext } from "@/provider/provider";

export default function Home() {
  const { articles, isLoading, handleLoadMore } = useContext(MyContext);
  return (
    <main>
      <Slider />
      <Trending />
      <Blogpost
        bloglist={articles}
        handleClick={handleLoadMore}
        isLoading={isLoading}
      />
    </main>
  );
}
