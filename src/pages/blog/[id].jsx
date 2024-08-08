import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ArticleDetail = () => {
  const { query } = useRouter();
  console.log("QR", query.id);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    if (query.id) {
      getArticleById(query.id);
    }
  }, [query.id]);

  return (
    <div className="w-9/12 m-auto p-10">
      <div className="flex gap-4 my-10">
        <img
          className="w-14 h-14 rounded-full"
          src={articleDetail?.user.profile_image}
          alt=""
        />
        <div className=" flex flex-col gap-2 items-center">
          <h2>{articleDetail?.user.name}</h2>
          <p>{articleDetail?.created_at}</p>
        </div>
      </div>
      <div
        className="blog-detail w-8/12 flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};

export default ArticleDetail;
