import React from "react";
import { useSelector } from "react-redux";

const BlogContent = ({ imagesArray }) => {
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);
  const activeBlogContent = useSelector(
    (state) => state.blogs.data[activeBlogId].content
  );
  let keyId = 0;

  // console.log(
  //   "ACTIVE BLOG ID => ",
  //   activeBlogId,
  //   ", BLOG DATA => ",
  //   activeBlogContent
  // );

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
