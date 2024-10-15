import googlePlay from "../../assets/images/gg.png";
import appStore from "../../assets/images/apple-app-store-logo.jpg";

// import bg from "../assets/images/bg.jpg";
import desktop from "../../assets/images/desktop.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-8 px-4 lg:px-[6rem] md:flex">
      <div>
        <p className="bg-[#512da81a] rounded-lg text-[#8870c4] font-medium p-1 w-fit h-[30px] mb-2 text-[12px] md:text-[14px]">
          Konjaa - POS App
        </p>
        {/* <div className="bg-gray-300 rounded-lg p-2 w-[15%] text-[14px]"></div> */}
        <h1 className="font-bold text-2xl md:text-[30px] md:leading-[50px]">
          Manage{" "}
          <span className="bg font-bold text-2xl md:text-4xl">
            Your Stock, Sales,Cashflow{" "}
          </span>
          while you are away.
        </h1>
        <p className="opacity-1 my-5 text-[15px] lg:w-[473px] lw-[433px] text-[#999999]">
          Konjaa is a mobile and desktop version pos system, it works both
          online and offline, creating a sync of data when there is internet
          connection or no connection.
        </p>

        <div className="flex items-center">
          <img
            src={googlePlay}
            className="cursor-pointer h-[50px] mr-2 w-[180px] md:h-[69px] m- mb- sm:mb-0 md:w-[230px]"
            alt=""
          />
          <img
            src={appStore}
            className="cursor-pointer h-[50px] w-[180px] md:h-[69px] md:w-[230px]"
            alt=""
          />
          <div className="flex"></div>
        </div>
        <div className="flex py-5">
          <button className="text-2xl rounded-lg mx-2 font-medium text-white flex bg-[#8870c4] p-2">
            <Link to="">Register</Link>
          </button>
          <button className="text-2xl rounded-lg font-medium text-white flex bg-[#8870c4] p-2">
            <Link to="">Sign In</Link>
          </button>
        </div>

        {/* <div className="sm:flex p py-6 w-fit border sm:py-10">
          <p className="cursor-pointer w-fit m-auto flex justify-center mb-5 sm:mb-0 sm:ml-0 mr-5 md:mr-16">
            <p className="bg-gray-300 rounded-full w-fit h-[50px] text-center">
              <img src={apple} className="w-[50px] h-[50px]" alt="apple" />
              <span></span>
            </p>
            <p className="w-fit text-[14px] md:text-[18px] font-medium text-[#505050] ml-2">
              Download For <br /> macOS
            </p>
          </p>

          <p className="cursor-pointer w-fit m-auto justify-center sm:ml-0 flex">
            <p className="bg-gray-300 rounded-full w-[45px] h-[45px] text-center">
              <img
                src={windows}
                className="w-[40p] m-auto h-[40px]"
                alt="windows"
              />
            </p>
            <p className="w-fit text-[14px] md:text-[18px] font-medium text-[#505050] ml-2">
              Download For <br /> Windows
            </p>
          </p>
        </div> */}
      </div>

      <div>
        <img src={desktop} alt="" />
      </div>
    </div>
  );
};

export default Hero;
