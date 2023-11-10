import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-[#191e3430] flex justify-center  items-center w-full  top-0 hover:bg-[#191e34] duration-300 ease-in
    hover:text-white text-gray-900 py-2">
       <div className=" px-6 min-w-[320px] sm:w-full overflow-hidden w-auto max-w-[2560px]">
          <ul className="flex flex-row justify-around rounded-2xl rounded-tr-none w-full font-medium mt-0 mr-6 space-x-8 text-sm">
            <div ><Link href="/">
            <img  src="https://cleanproguttercleaning.com/wp-content/uploads/2023/03/cropped-Clean_Pro_Gutter_cleaning_300-%C3%97-70-logo-min.png" className="h-16 mr-3   rounded-lg   hidden sm:inline-block " alt="Star Porta Potty Rental" />
            </Link>
            </div>

            <div className="flex flex-row  justify-around items-center font-medium mt-0 mr-6 space-x-8 text-lg">
            <li>
              <Link
                href="/"
                className=" dark:text-white hover:underline"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className=" dark:text-white hover:underline"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className=" dark:text-white hover:underline"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=" dark:text-white hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=" dark:text-white hover:underline"
              >
                Contact
              </Link>
            </li>
            </div>
            


          </ul>
        </div>
    </div>
  );
};

export default NavBar;
