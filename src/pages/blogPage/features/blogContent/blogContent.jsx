import React from "react";

import { Istra_mini_road_trip } from "../../../../assets/blogsContent/istra_mini_road_trip";

const BlogContent = () => {
  return (
    <div className="blog_container">
      {Object.entries(Istra_mini_road_trip).forEach(([key, value]) => (
        <div className="blog_container-card">
          <div className="blog_container-card_content">
            <h1>{key}</h1>
            <p>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
