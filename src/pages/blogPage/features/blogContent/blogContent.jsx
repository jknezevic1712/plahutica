import React from "react";

import { blogs } from "../../../../assets/blogs/blogs";

const BlogContent = ({ currentBlogOverview, blogsNumber, imagesArray }) => {
  let keyId = 0;

  console.log("CURRENT BLOG => ", currentBlogOverview);
  return (
    <div className="blog_container">
      {Object.entries(blogs[currentBlogOverview]).map((data) => {
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
