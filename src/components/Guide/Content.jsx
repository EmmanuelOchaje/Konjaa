import React from "react";
import GetStarted from "./GetStarted";
import Stock from "./Stock";
import Sell from "./Sell";
import Finance from "./Finance";
import Suppliers from "./Suppliers";
import Customers from "./Customers";
import Shop from "./Shop";
import Cashier from "./Cashier";
import EditProfile from "./EditProfile";
import Privacy from "./Privacy";

const Content = (props) => {
  return (
    <div className="py-8 px-4 lg:px-[6rem]">
      <GetStarted />
      <Stock />
      <Sell />
      <Finance />
      <Suppliers />
      <Customers />
      <Shop />
      <Cashier />
      <EditProfile />
      <Privacy />
    </div>
  );
};

export default Content;
