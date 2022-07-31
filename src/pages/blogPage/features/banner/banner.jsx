import React from "react";

import Picture from "../../../../assets/images/banner_test.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img src={Picture} alt="" />
      </div>
    </div>
  );
};

export default Banner;
