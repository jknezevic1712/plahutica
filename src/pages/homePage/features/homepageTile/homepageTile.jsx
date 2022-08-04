import React from "react";
import { Link } from "react-router-dom";

const HomepageTile = ({ activeBlogId, imagesArray }) => {
  return (
    <div className="homepage-blog_tile">
      <Link to={`/blog/${activeBlogId}`}>
        <img className="hover" src={imagesArray[activeBlogId]} alt="" />
      </Link>
    </div>
  );
};

export default HomepageTile;
