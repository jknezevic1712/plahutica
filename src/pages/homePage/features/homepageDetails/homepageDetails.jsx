import React from "react";
import { useSelector } from "react-redux";

const HomepageDetails = ({ activeBlogId }) => {
  const currentBlogOverview = useSelector(
    (state) => state.blogs.data[activeBlogId].overview
  );

  return (
    <div className="homepage-blog_details">
      <div className="homepage-blog_details-content">
        <h1>{currentBlogOverview.title}</h1>
        <p>{currentBlogOverview.description}</p>
        <a className="link_as_button" href="/blog">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default HomepageDetails;
