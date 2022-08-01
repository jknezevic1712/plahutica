import React from "react";

import BackIcon from "../../../../assets/images/back_icon_30.png";
import NextIcon from "../../../../assets/images/next_icon_30.png";

const HomepageScroll = ({
  currentBlogOverview,
  setCurrentBlogOverview,
  blogsNumber,
}) => {
  console.log("CURR => ", currentBlogOverview, ", blogs => ", blogsNumber);
  const nextBlog = () => {
    setCurrentBlogOverview(
      currentBlogOverview === blogsNumber - 1 ? 0 : currentBlogOverview + 1
    );
  };

  const prevBlog = () => {
    setCurrentBlogOverview(
      currentBlogOverview === 0 ? blogsNumber - 1 : currentBlogOverview - 1
    );
  };

  return (
    <div className="homepage-blog_scroll">
      <img onClick={prevBlog} src={BackIcon} alt="" />
      <img onClick={nextBlog} src={NextIcon} alt="" />
    </div>
  );
};

export default HomepageScroll;
