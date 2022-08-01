import React from "react";

import { blog_overviews } from "../../../../assets/blogs/blogs";

const HomepageDetails = ({ currentBlogOverview }) => {
  return (
    <div className="homepage-blog_details">
      <div className="homepage-blog_details-content">
        <h1>{blog_overviews[currentBlogOverview].title}</h1>
        <p>{blog_overviews[currentBlogOverview].description}</p>
        <a className="link_as_button" href="/blog">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default HomepageDetails;
