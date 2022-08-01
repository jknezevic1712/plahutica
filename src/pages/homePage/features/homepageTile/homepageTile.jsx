import React from "react";

const HomepageTile = ({ activeBlogId, imagesArray }) => {
  return (
    <div className="homepage-blog_tile">
      <a href="/blog">
        <img className="hover" src={imagesArray[activeBlogId]} alt="" />
      </a>
    </div>
  );
};

export default HomepageTile;
