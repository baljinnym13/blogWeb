import Blogpost from "@/components/blogpost/blogpost";
import React, { useContext } from "react";
import { MyContext } from "@/provider/provider";
const Blog = () => {
  const { articles, isLoading, handleLoadMore } = useContext(MyContext);

  return (
    <div>
      <Blogpost
        bloglist={articles}
        handleClick={handleLoadMore}
        isLoading={isLoading}
        style="hidden"
      />
    </div>
  );
};

export default Blog;
