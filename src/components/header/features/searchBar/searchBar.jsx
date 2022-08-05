import React, { useState } from "react";

import MagnifierIcon from "../../../../assets/images/magnifier_icon_50-white.png";

const SearchBar = () => {
  const [showInputField, setShowInputField] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleShowingInputField = () => {
    setShowInputField(!showInputField);
  };

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  return (
    <div className="search_bar">
      <img
        className="search_bar-magnifier"
        src={MagnifierIcon}
        alt=""
        onClick={() => handleShowingInputField()}
      />
      <div className={`search_bar-input_field ${showInputField ? "show" : ""}`}>
        <input
          type="text"
          placeholder="Type blog name..."
          autoFocus
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
