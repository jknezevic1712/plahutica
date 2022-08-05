import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogContent = () => {
  // const activeBlogId = useSelector((state) => state.utils.activeBlogId);
  const { activeBlogId } = useParams();
  const activeBlogContent = useSelector(
    (state) => state.blogs.data[activeBlogId].content
  );

  console.log(
    "ACTIVE BLOG => ",
    activeBlogId,
    ", CONTENT => ",
    activeBlogContent
  );
  let keyId = 0;

  return (
    <div className="blog_container">
      {Object.entries(activeBlogContent).map((data) => {
        keyId = keyId + 1;

        return (
          <div key={keyId} className="blog_container-card">
            <div className="blog_container-card_content">
              <h1>{data[0]}</h1>
              <p>{data[1]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogContent;
