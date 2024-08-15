import Blogpost from "@/components/blogpost/blogpost";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const getArrticle = async () => {
    const res = await fetch("https://dev.to/api/articles");
    const data = await res.json();
    setArticles(data);
    console.log("data", data);
  };
  useEffect(() => {
    getArrticle();
  }, []);
  return (
    <div>
      <Blogpost bloglist={articles} />
    </div>
  );
};

export default Blog;
