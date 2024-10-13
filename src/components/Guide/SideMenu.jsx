import React from "react";
import Menu from "./Menu";

const SideMenu = ({ menu }) => {
  return (
    <div>
      {menu.map((menu, id) => (
        <Menu menu={menu} />
      ))}
    </div>
  );
};

export default SideMenu;
