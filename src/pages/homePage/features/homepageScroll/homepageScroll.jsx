import React from "react";

import BackIcon from "../../../../assets/images/back_icon_30.png";
import NextIcon from "../../../../assets/images/next_icon_30.png";

const HomepageScroll = ({ backgroundNumber, setBackgroundNumber }) => {
  const handleBackgroundNumberChange = (handler) => {
    switch (handler) {
      case "back":
        backgroundNumber > 0
          ? setBackgroundNumber(backgroundNumber - 1)
          : setBackgroundNumber(4);
        break;
      case "next":
        backgroundNumber < 4
          ? setBackgroundNumber(backgroundNumber + 1)
          : setBackgroundNumber(0);
        break;
      default:
        setBackgroundNumber(1);
    }
  };

  return (
    <div className="homepage-blog_scroll">
      <img
        onClick={() => handleBackgroundNumberChange("back")}
        src={BackIcon}
        alt=""
      />
      <img
        onClick={() => handleBackgroundNumberChange("next")}
        src={NextIcon}
        alt=""
      />
    </div>
  );
};

export default HomepageScroll;
