import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header/header";
import HomepageDetails from "./features/homepageDetails/homepageDetails";
import HomepageTile from "./features/homepageTile/homepageTile";
import HomepageScroll from "./features/homepageScroll/homepageScroll";

const HomePage = ({ imagesArray }) => {
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${imagesArray[activeBlogId]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="homepage-content">
        <HomepageDetails activeBlogId={activeBlogId} />
        <div className="homepage-tiles">
          <HomepageTile activeBlogId={activeBlogId} imagesArray={imagesArray} />
          <HomepageScroll activeBlogId={activeBlogId} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
