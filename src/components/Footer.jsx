import googlePlay from "../assets/images/gg.png";
import appStore from "../assets/images/apple-app-store-logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#f4f1fa] py-10">
      <div>
        <h2 className="text-center">
          <span className="bg font-bold text-2xl md:text-[35px]">
            Ready To Download?
          </span>
        </h2>
        <p className="mt-5 text-[15px] text-center">
          To get the mobile application, click on the buttons below
        </p>

        <div className="md:flex justify-center items-center m-auto">
          <img
            src={googlePlay}
            className="cursor-pointer m-auto my-5 sm:my-0 h-[50px] w-[180px] md:h-[69px] md:m-8 md:w-[230px]"
            alt=""
          />
          <img
            src={appStore}
            className="cursor-pointer m-auto h-[50px] w-[180px] md:h-[69px] md:m-8 md:w-[230px]"
            alt=""
          />
        </div>

        <ul className="flex justify-center mt-5">
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/guide">Guide</Link>
          </li>
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/privacy">Privacy</Link>
          </li>
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            Partners
          </li>
        </ul>
        <p className="text-center mt-5">
          © 2024 Copyrights by{" "}
          <span className="cursor-pointer font-semibold text-[#8870c4]">
            Konjaa.com.
          </span>{" "}
          All Rights Reserved. Owned By Gimo Internet Tech
        </p>
      </div>
    </div>
  );
};

export default Footer;
