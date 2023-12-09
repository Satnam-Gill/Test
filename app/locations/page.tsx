'use client'
import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import {Navbar1} from "../(TEST)/Components/Navabar1";
import Navbar2 from "../(TEST)/Components/Navbar2";
import Slider from "../component/Slider";
import Page from "../[userId]/page";
import State from "../component/output"
import Neighborhood from "@/app/component/Neighborhood"
import SliderNew from "../component/SliderNew";



const page = () => {
const data= Neighborhood();
// const Citiesab = Cityab;
// const Hub = Cityab.forEach(element => {
//   // console.log(element.Cities_Abb)
//   return element.Neghborhoods.split(",").forEach(element => {
//     //  console.log(element)
//    });
//   });
  
   
  // console.log(Hub)
  //  const getdatalist = State();
  // const locations =  getdatalist;
  // // console.log(locations)

  return (
    <div className=" bg-[#ed1c24]">
      <div className=" w-full border"><Navbar2/></div>
      <div className=" w-full border h-screen"></div>
      {/* {data.map(item => (
        <div key={item.ID}>
          <p>{item.Cities_Abb}</p>
        </div>
      ))} */}
<SliderNew/>
    {/* {
      locations.map((index: { State: any }) => {
        return (
          <div key={index.State}>
            <div> {index.State}</div>
          </div>
        )
      })
    } */}
      <div className="mx-20  flex items-center justify-between  ">
        <div className="1">
          <img
            src="https://www.junk-king.com/images/junk-king-logo-n2.png"
            alt="hello "
          />
        </div>
        <div className="">
          <div className="2 py-2 text-white flex  gap-2 flex-col  md:flex-row md:gap-4 ">
            <div className="text-2xl h-full  flex justify-center items-center">(833) 659-7676</div>
            <div className="sm:text-sm lg:text-base flex justify-center items-center ">
              info@starportapottyrental.com
            </div>
            <div className="flex items-center justify-center ">
              <div className="flex gap-3 flex-row ">
                <BsFacebook className="text-2xl" />
                <BsTwitter className="text-2xl" />
                <GrYoutube className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-20">
        <div className="text-2xl font-serif text-white mt-4 ">Our Location</div>
              {/* <div className="location mt-4 grid grid-cols-4 ">
        <div className="text-white text-base mt-4">
          <Link href="/ALABAMA">
            {" "}
            ALABAMA
            <Link href="/Alabaster">
              <li>Alabaster</li>
            </Link>
            <Link href="/Alabaster">
              <li>Birmingham</li>
            </Link>
          </Link>
          <Link href="/ARIZONA">
            {" "}
            ARIZONA
            <Link href="/Gilbert">
              <li>Gilbert</li>
            </Link>
            <Link href="/Mesa">
              <li>Mesa</li>
            </Link>
            <Link href="/Phoenix">
              <li>Phoenix</li>
            </Link>
            <Link href="/Surprise">
              <li>Surprise</li>
            </Link>
            <Link href="/Tucson">
              <li>Tucson</li>
            </Link>
          </Link>
          <Link href="/ARKANSAS">
            ARKANSAS
            <Link href="/Northwest Arkansas">
              <li>Northwest Arkansas</li>
            </Link>
          </Link>
          <Link href="/CALIFORNIA">
            CALIFORNIA
            <Link href="/Alameda">
              <li>Alameda</li>
            </Link>
            <Link href="/Anaheim">
              <li>Anaheim</li>
            </Link>
            <Link href="/Bakersfield">
              <li>Bakersfield</li>
            </Link>
            <Link href="/Chico">
              <li>Chico</li>
            </Link>
            <Link href="/Chino">
              <li>Chino</li>
            </Link>
            <Link href="/Contra Costa">
              <li>Contra Costa</li>
            </Link>
            <Link href="/Encino">
              <li>Encino</li>
            </Link>
            <Link href="/Fresno">
              <li>Fresno</li>
            </Link>
            <Link href="/Gold Country">
              <li>Gold Country</li>
            </Link>
            <Link
              href="/WindowInland Empire
"
            >
              <li>WindowInland Empire</li>
            </Link>
            <Link href="/LA South Bay">
              <li>LA South Bay</li>
            </Link>
            <Link href="/Long Beach">
              <li>Long Beach</li>
            </Link>
            <Link
              href="/WindowLos Angeles
"
            >
              <li>WindowLos Angeles</li>
            </Link>
            <Link href="/Marin">
              <li>Marin</li>
            </Link>
            <Link href="/Monterey">
              <li>Monterey</li>
            </Link>
            <Link href="/Orange County">
              <li>Orange County</li>
            </Link>
            <Link href="/Peninsula">
              <li>Peninsula</li>
            </Link>
            <Link href="/WindowRiverside">
              <li>WindowRiverside</li>
            </Link>
            <Link href="/Sacramento">
              <li>Sacramento</li>
            </Link>
            <Link href="/San Diego">
              <li>San Diego</li>
            </Link>
            <Link href="/San Diego Downtown">
              <li>San Diego Downtown</li>
            </Link>
            <Link
              href="/WindowSan Diego North
"
            >
              <li>WindowSan Diego North</li>
            </Link>
            <Link href="/San Fernando Valley">
              <li>San Fernando Valley</li>
            </Link>
            <Link href="/San Francisco">
              <li>San Francisco</li>
            </Link>
            <Link href="/San Jose">
              <li>San Jose</li>
            </Link>
            <Link href="/Santa Clarita">
              <li>Santa Clarita</li>
            </Link>
            <Link
              href="/WindowSonoma
"
            >
              <li>WindowSonoma</li>
            </Link>
            <Link href="/South San Francisco">
              <li>South San Francisco</li>
            </Link>
            <Link href="/Stockton">
              <li>Stockton</li>
            </Link>
            <Link href="/Temecula">
              <li>Temecula</li>
            </Link>
          </Link>
        </div>
        <div className="text-white text-base mt-4">
          <Link href="/ALABAMA">
            {" "}
            ALABAMA
            <Link href="/Alabaster">
              <li>Alabaster</li>
            </Link>
            <Link href="/Alabaster">
              <li>Birmingham</li>
            </Link>
          </Link>
          <Link href="/ARIZONA">
            {" "}
            ARIZONA
            <Link href="/Gilbert">
              <li>Gilbert</li>
            </Link>
            <Link href="/Mesa">
              <li>Mesa</li>
            </Link>
            <Link href="/Phoenix">
              <li>Phoenix</li>
            </Link>
            <Link href="/Surprise">
              <li>Surprise</li>
            </Link>
            <Link href="/Tucson">
              <li>Tucson</li>
            </Link>
          </Link>
          <Link href="/ARKANSAS">
            ARKANSAS
            <Link href="/Northwest Arkansas">
              <li>Northwest Arkansas</li>
            </Link>
          </Link>
          <Link href="/CALIFORNIA">
            CALIFORNIA
            <Link href="/Alameda">
              <li>Alameda</li>
            </Link>
            <Link href="/Anaheim">
              <li>Anaheim</li>
            </Link>
            <Link href="/Bakersfield">
              <li>Bakersfield</li>
            </Link>
            <Link href="/Chico">
              <li>Chico</li>
            </Link>
            <Link href="/Chino">
              <li>Chino</li>
            </Link>
            <Link href="/Contra Costa">
              <li>Contra Costa</li>
            </Link>
            <Link href="/Encino">
              <li>Encino</li>
            </Link>
            <Link href="/Fresno">
              <li>Fresno</li>
            </Link>
            <Link href="/Gold Country">
              <li>Gold Country</li>
            </Link>
            <Link
              href="/WindowInland Empire
"
            >
              <li>WindowInland Empire</li>
            </Link>
            <Link href="/LA South Bay">
              <li>LA South Bay</li>
            </Link>
            <Link href="/Long Beach">
              <li>Long Beach</li>
            </Link>
            <Link
              href="/WindowLos Angeles
"
            >
              <li>WindowLos Angeles</li>
            </Link>
            <Link href="/Marin">
              <li>Marin</li>
            </Link>
            <Link href="/Monterey">
              <li>Monterey</li>
            </Link>
            <Link href="/Orange County">
              <li>Orange County</li>
            </Link>
            <Link href="/Peninsula">
              <li>Peninsula</li>
            </Link>
            <Link href="/WindowRiverside">
              <li>WindowRiverside</li>
            </Link>
            <Link href="/Sacramento">
              <li>Sacramento</li>
            </Link>
            <Link href="/San Diego">
              <li>San Diego</li>
            </Link>
            <Link href="/San Diego Downtown">
              <li>San Diego Downtown</li>
            </Link>
            <Link
              href="/WindowSan Diego North
"
            >
              <li>WindowSan Diego North</li>
            </Link>
            <Link href="/San Fernando Valley">
              <li>San Fernando Valley</li>
            </Link>
            <Link href="/San Francisco">
              <li>San Francisco</li>
            </Link>
            <Link href="/San Jose">
              <li>San Jose</li>
            </Link>
            <Link href="/Santa Clarita">
              <li>Santa Clarita</li>
            </Link>
            <Link
              href="/WindowSonoma
"
            >
              <li>WindowSonoma</li>
            </Link>
            <Link href="/South San Francisco">
              <li>South San Francisco</li>
            </Link>
            <Link href="/Stockton">
              <li>Stockton</li>
            </Link>
            <Link href="/Temecula">
              <li>Temecula</li>
            </Link>
          </Link>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
