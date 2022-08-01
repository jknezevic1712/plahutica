import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoadingDots from "./components/loadingDots/loadingDots";

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const BlogPage = lazy(() => import("./pages/blogPage/blogPage"));

function App() {
  const activeBlogId = useSelector((state) => state.utils.activeBlogId);

  console.log("ACTIVE BLOG => ", activeBlogId);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingDots />}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
