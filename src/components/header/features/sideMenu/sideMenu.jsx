import React, { useState } from "react";

import HamburgerIcon from "../hamburgerIcon/hamburgerIcon";

const SideMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <HamburgerIcon isActive={isActive} setIsActive={setIsActive} />
      <div className={`side_menu ${isActive ? "show" : ""}`}>
        <div className="side_menu-header">
          <HamburgerIcon isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className="side_menu-content">
          <div className="side_menu-content_upper">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </div>
          <div className="side_menu-content_lower">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
