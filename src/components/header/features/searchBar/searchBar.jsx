import React, { useState } from "react";

import MagnifierIconWhite from "../../../../assets/images/magnifier_icon_50-white.png";
import MagnifierIconBlack from "../../../../assets/images/magnifier_icon_50-black.png";

const SearchBar = ({ homepageView }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  return (
    <div className="search_bar">
      <input
        type="text"
        className={`search_bar-input ${
          homepageView ? "search_bar-input-white" : ""
        }`}
        placeholder="Search for a blog..."
        style={{
          backgroundImage: `url(
            ${homepageView ? MagnifierIconWhite : MagnifierIconBlack}
          )`,
        }}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
