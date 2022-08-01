import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingDots from "./components/loadingDots/loadingDots";

import PictureOne from "./assets/images/pictureOne.jpg";
import PictureTwo from "./assets/images/pictureTwo.jpg";
import PictureThree from "./assets/images/pictureThree.jpg";
import PictureFour from "./assets/images/pictureFour.jpg";
import PictureFive from "./assets/images/pictureFive.jpg";

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const BlogPage = lazy(() => import("./pages/blogPage/blogPage"));

function App() {
  const imagesArray = [
    PictureOne,
    PictureTwo,
    PictureThree,
    PictureFour,
    PictureFive,
  ];

  const [currentBlogOverview, setCurrentBlogOverview] = useState(0);
  const blogsNumber = imagesArray.length;

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingDots />}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  currentBlogOverview={currentBlogOverview}
                  setCurrentBlogOverview={setCurrentBlogOverview}
                  blogsNumber={blogsNumber}
                  imagesArray={imagesArray}
                />
              }
            />
            <Route
              path="/blog"
              element={
                <BlogPage
                  currentBlogOverview={currentBlogOverview}
                  blogsNumber={blogsNumber}
                  imagesArray={imagesArray}
                />
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
