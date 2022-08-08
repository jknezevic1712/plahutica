import React from "react";

import SideMenu from "./features/sideMenu/sideMenu";
import SearchBar from "./features/searchBar/searchBar";

const Header = ({ homepageView }) => {
  return (
    <div className={`header ${homepageView ? "bg-dark_transparent" : ""}`}>
      <SideMenu homepageView={homepageView ? true : false} />
      <h1>
        <a href="/">Plahutica</a>
      </h1>
      <SearchBar homepageView={homepageView ? true : false} />
    </div>
  );
};

export default Header;
