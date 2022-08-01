import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { blogsInitialDataLoad } from "./redux/actions/blogs/blogActions";
import { utilsInitialDataLoad } from "./redux/actions/utils/utilsActions";

import LoadingDots from "./components/loadingDots/loadingDots";

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const BlogPage = lazy(() => import("./pages/blogPage/blogPage"));

function App() {
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);
  const loadInitialData = useSelector((state) => state.utils.loadInitialData);
  const dispatch = useDispatch();

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
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
