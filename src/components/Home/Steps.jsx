import React from "react";
import ReactPlayer from "react-player";

const Steps = (props) => {
  // reactPlayerInlineStyling for react-player
  const reactPlayerInlineStyling = {
    borderRadius: "10px",
    overflow: "hidden",
  };

  return (
    <div className="py-8 px-4 lg:px-[6rem] lg:flex lg:justify-between">
      <div className="lg:w-[50%]">
        <p className="bg-[#512da81a] rounded-lg text-[#8870c4] font-medium p-1 w-fit h-[30px] mb-2 text-[14px]">
          Konjaa - Steps
        </p>
        <h2>
          <span className="bg text-[40px] font-bold">Get Started</span>
        </h2>
        <p className="font-normal text-[15px] w-fit mr-2">
          Stay focused on other things like family, businesses as pointify
          manages your shop, hardware. hotels, clubs etc.
        </p>

        <div className="mt-5">
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bxs-purchase-tag"></i>
            Create an account and add a shop
          </p>
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bx-line-chart"></i>
            Add stock and create an attendant
          </p>
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bx-home-smile"></i>
            Sell and its done!
          </p>
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bx-home-smile"></i>
            View sales, stock, purchases, profits and expenses wherever you are.
          </p>
        </div>
      </div>

      <div className="rounded-full reactPlayerStyling  m-auto w-fit video-wrapper">
        <ReactPlayer
          controls
          height={"100%"}
          width={"100%"}
          className="react-player"
          style={reactPlayerInlineStyling}
          url="https://youtu.be/b162CC6xw5A"
        />
      </div>
    </div>
  );
};

export default Steps;
