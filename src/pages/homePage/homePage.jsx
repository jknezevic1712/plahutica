import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { blogsInitialDataLoad } from "../../redux/actions/blogs/blogActions";
import { utilsInitialDataLoad } from "../../redux/actions/utils/utilsActions";

import Header from "../../components/header/header";
import HomepageDetails from "./features/homepageDetails/homepageDetails";
import HomepageCarousel from "./features/homepageCarousel/homepageCarousel";

import imagesArray from "../../assets/images/blogImages/blogImages";

const HomePage = () => {
  const dispatch = useDispatch();
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);

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
      <Header homepageView />
      <div className="homepage-content">
        <HomepageDetails activeBlogId={activeBlogId} />
        <div className="homepage-carousel">
          <HomepageCarousel
            imagesArray={imagesArray}
            activeBlogId={activeBlogId}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
