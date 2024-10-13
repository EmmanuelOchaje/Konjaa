import React from "react";
import SideMenu from "./SideMenu";

const menu = [
  "getting started",
  "stock",
  "sell",
  "finance",
  "suppliers",
  "customers",
  "shop",
  "cashiers",
  "edit profile",
  "privacy policy",
];
const Body = (props) => {
  return (
    <div className="py-8 px-4 lg:px-[6rem]">
      <SideMenu menu={menu} />
    </div>
  );
};

export default Body;
