import React, { useState } from "react";

const HamburgerIcon = ({ isActive, setIsActive }) => {
  const isHamburgerActiveHandler = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <>
      <div
        className={`hamburger_icon ${isActive ? "is_active" : ""}`}
        onClick={() => isHamburgerActiveHandler()}
      >
        <div className="line half upper"></div>
        <div className="line"></div>
        <div className="line half lower"></div>
      </div>
    </>
  );
};

export default HamburgerIcon;
