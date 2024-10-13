import React from "react";

const Menu = ({ menu }) => {
  return (
    <div>
      <div className="w-[200px] flex justify-between items-center h-[30px] bg-gray-400 mb-2 px-2 rounded-lg">
        <p>{menu}</p>
        <span className="">
          <i class="bx bx-chevron-down"></i>
        </span>
      </div>
    </div>
  );
};

export default Menu;
