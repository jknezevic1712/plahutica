import React from "react";

const HamburgerIcon = ({ isActive, setIsActive }) => {
  const isHamburgerActiveHandler = () => {
    setIsActive(!isActive);
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
