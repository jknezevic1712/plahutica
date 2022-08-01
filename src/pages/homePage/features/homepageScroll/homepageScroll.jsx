import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { utilsUpdateActiveBlogId } from "../../../../redux/actions/utils/utilsActions";

import BackIcon from "../../../../assets/images/back_icon_30.png";
import NextIcon from "../../../../assets/images/next_icon_30.png";

const HomepageScroll = ({ activeBlogId }) => {
  const dispatch = useDispatch();
  const blogsNumber = useSelector((state) => state.blogs.data).length;

  const nextBlog = () => {
    activeBlogId === blogsNumber - 1
      ? dispatch(utilsUpdateActiveBlogId(0))
      : dispatch(utilsUpdateActiveBlogId(activeBlogId + 1));
  };

  const prevBlog = () => {
    activeBlogId === 0
      ? dispatch(utilsUpdateActiveBlogId(blogsNumber - 1))
      : dispatch(utilsUpdateActiveBlogId(activeBlogId - 1));
  };

  return (
    <div className="homepage-blog_scroll">
      <img onClick={prevBlog} src={BackIcon} alt="" />
      <img onClick={nextBlog} src={NextIcon} alt="" />
    </div>
  );
};

export default HomepageScroll;
