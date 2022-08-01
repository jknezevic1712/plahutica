import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { blogsInitialDataLoad } from "./redux/actions/blogs/blogActions";
import { utilsInitialDataLoad } from "./redux/actions/utils/utilsActions";

import LoadingDots from "./components/loadingDots/loadingDots";

import PictureOne from "./assets/images/blogImages/pictureOne.jpg";
import PictureTwo from "./assets/images/blogImages/pictureTwo.jpg";
import PictureThree from "./assets/images/blogImages/pictureThree.jpg";
import PictureFour from "./assets/images/blogImages/pictureFour.jpg";
import PictureFive from "./assets/images/blogImages/pictureFive.jpg";

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const BlogPage = lazy(() => import("./pages/blogPage/blogPage"));

function App() {
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);
  const loadInitialData = useSelector((state) => state.utils.loadInitialData);
  const dispatch = useDispatch();

  console.log("ACTIVE BLOG => ", activeBlogId, ", BOOL => ", loadInitialData);

  const imagesArray = [
    PictureOne,
    PictureTwo,
    PictureThree,
    PictureFour,
    PictureFive,
  ];

  useEffect(() => {
    if (loadInitialData) {
      dispatch(blogsInitialDataLoad());
      dispatch(utilsInitialDataLoad());
    }
  }, [loadInitialData]);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingDots />}>
          <Routes>
            <Route path="/" element={<HomePage imagesArray={imagesArray} />} />
            <Route
              path="/blog"
              element={<BlogPage imagesArray={imagesArray} />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
