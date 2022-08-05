import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomepageDetails = ({ activeBlogId }) => {
  const currentBlogOverview = useSelector(
    (state) => state.blogs.data[activeBlogId].overview
  );

  return (
    <div className="homepage-blog_details">
      <div className="homepage-blog_details-content bg-dark_transparent">
        <h1>{currentBlogOverview.title}</h1>
        <p>{currentBlogOverview.description}</p>
        <Link className="link_as_button" to={`/blog/${activeBlogId}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default HomepageDetails;
