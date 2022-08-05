import React from "react";

import SideMenu from "./features/sideMenu/sideMenu";
import SearchBar from "./features/searchBar/searchBar";

const Header = () => {
  return (
    <div className="header bg-dark_transparent">
      <SideMenu />
      <h1>
        <a href="/">Plahutica</a>
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
