import React from "react";

import SideMenu from "./features/sideMenu/sideMenu";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="group"> */}
      <SideMenu />
      <h1>Plahutica</h1>
      {/* </div> */}
      <span>Tražilica</span>
    </div>
  );
};

export default Header;
