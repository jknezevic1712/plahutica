import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { blogsInitialDataLoad } from "../../redux/actions/blogs/blogActions";
import { utilsInitialDataLoad } from "../../redux/actions/utils/utilsActions";

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
  const dispatch = useDispatch();
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);

  const imagesArray = [
    PictureOne,
    PictureTwo,
    PictureThree,
    PictureFour,
    PictureFive,
  ];

  useEffect(() => {
    dispatch(blogsInitialDataLoad());
    dispatch(utilsInitialDataLoad());
  }, []);

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
