import React from "react";

const HomepageTile = ({ currentBlogOverview, imagesArray }) => {
  return (
    <div className="homepage-blog_tile">
      <a href="/blog">
        <img className="hover" src={imagesArray[currentBlogOverview]} alt="" />
      </a>
    </div>
  );
};

export default HomepageTile;
