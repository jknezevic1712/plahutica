import React from "react";

import Header from "../../components/header/header";
import Banner from "./features/banner/banner";
import BlogContent from "./features/blogContent/blogContent";

const BlogPage = ({ imagesArray }) => {
  return (
    <div className="blog_page">
      <div className="blog_page-container">
        <Header />
        <Banner />
        <BlogContent imagesArray={imagesArray} />
      </div>
    </div>
  );
};

export default BlogPage;
