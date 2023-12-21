import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaPhoneVolume, FaMailBulk } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-[#191e34] flex justify-center  items-center w-full  text-white z-50">
      <div className=" h-[84px] px-6 min-w-[320px]   w-full max-w-[2560px]">
        <div className="flex justify-around h-full items-center gap-3 text-xs sm:text-sm   xl:text-2xl">
            <div className="hidden  sm:inline-block ">
          <div className="flex space-x-6 ">
            <BsFacebook />
            <BiLogoLinkedin />
            <BsTwitter />
            <BsInstagram />
            <BsYoutube />
          </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex gap-3 ">
              <FaPhoneVolume className="  " />
              877-736-0586
            </div>
            <div className="flex gap-3 ">
              <FaMailBulk className="" />
              sales@cleanproguttercleaning.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
