import React, { useEffect, useState } from "react";

import Header from "../../components/header/header";
import HomepageDetails from "./features/homepageDetails/homepageDetails";
import HomepageTile from "./features/homepageTile/homepageTile";
import HomepageScroll from "./features/homepageScroll/homepageScroll";

const HomePage = ({
  currentBlogOverview,
  setCurrentBlogOverview,
  blogsNumber,
  imagesArray,
}) => {
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${imagesArray[currentBlogOverview]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="homepage-content">
        <HomepageDetails currentBlogOverview={currentBlogOverview} />
        <div className="homepage-tiles">
          <HomepageTile
            currentBlogOverview={currentBlogOverview}
            imagesArray={imagesArray}
          />
          <HomepageScroll
            currentBlogOverview={currentBlogOverview}
            setCurrentBlogOverview={setCurrentBlogOverview}
            blogsNumber={blogsNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
