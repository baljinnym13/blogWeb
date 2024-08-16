import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(3);
  const [trendPosts, setTrendPosts] = useState([]);

  const getTrendPost = async () => {
    const res = await fetch(`https://dev.to/api/articles?top=1&per_page=4`);
    const data = await res.json();
    setTrendPosts(data);
  };
  useEffect(() => {
    getTrendPost();
  }, [trendPosts]);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?page=1&per_page=${count}`
      );
      const data = await response.json();
      setIsLoading(false);
      setArticles(data);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setCount(count + 3);
  };

  useEffect(() => {
    getArticleData();
  }, [count]);

  return (
    <MyContext.Provider
      value={{
        searchValue,
        setSearchValue,
        articles,
        isLoading,
        handleLoadMore,
        trendPosts,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
