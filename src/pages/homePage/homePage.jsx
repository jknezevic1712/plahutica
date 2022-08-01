import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header/header";
import HomepageDetails from "./features/homepageDetails/homepageDetails";
import HomepageTile from "./features/homepageTile/homepageTile";
import HomepageScroll from "./features/homepageScroll/homepageScroll";

import PictureOne from "../../assets/images/blogImages/pictureOne.jpg";
import PictureTwo from "../../assets/images/blogImages/pictureTwo.jpg";
import PictureThree from "../../assets/images/blogImages/pictureThree.jpg";
import PictureFour from "../../assets/images/blogImages/pictureFour.jpg";
import PictureFive from "../../assets/images/blogImages/pictureFive.jpg";

const HomePage = () => {
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);

  const imagesArray = [
    PictureOne,
    PictureTwo,
    PictureThree,
    PictureFour,
    PictureFive,
  ];

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${imagesArray[activeBlogId]})`,
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
