import React from "react";

const HomepageTile = ({ tileBackground }) => {
  return (
    <div className="homepage-blog_tile">
      <a href="/blog">
        <img className="hover" src={tileBackground} alt="" />
      </a>
    </div>
  );
};

export default HomepageTile;
