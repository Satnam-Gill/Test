import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { MdKeyboardArrowRight, MdDoubleArrow } from "react-icons/md";

const Hero = () => {
  const text = "text-[#f76610]";
  const btn = "bg-[#f76610] hover:bg-[#c25210]";
  return (
    <div>
      {/* poster */}
      <div className=" h-[90vh] md:h-[100vh] ease-in-out duration-150">
        <Image
          className="absolute top-0 w-[100%] h-[90vh] md:h-[100vh]"
          src="https://picsum.photos/id/777/900/450?blur"
          alt="image"
          width={100}
          height={250}
        />
        <div className="text-4xl md:text-6xl top-30 relative text-white flex justify-center items-center h-full gap-2  xl:px-80  px-12">
          <div className=" text-white font-extrabold text-center">
            {" "}
            <span className={`${text}`}>Clean Pro Gutter Cleaning </span>for
            gutter cleaning services and information on all aspects of gutter
            maintenance
            <div className="text-xl mt-6">
              We Are The Gutter Cleaning Experts
            </div>
            <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center">
              <button
                className={`${btn} hover:bg-[#f76610] text-white font-bold p-4 rounded-3xl mt-10 text-xl`}
              >
                CALL FOR A QUOTE
              </button>
              <button
                className={`${btn}  text-white font-bold p-4 rounded-3xl mt-10 text-xl`}
              >
                GET A QUOTE ONLINE
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* poster */}
      {/* content */}
      <div className="px-6 mt-10 xl:flex items-center justify-center gap-4 w-full ">
        <div className=" xl:w-1/2">
          <div className="text-lg">WHO WE ARE</div>
          <h2 className="text-3xl font-bold mt-2">
            The Best Gutter Cleaning Company
          </h2>
          <p className="text-xl mt-4">
            Though humble and oft-overlooked, your gutters play a crucial role
            in protecting your home from the ravages of nature. Yet, the task of
            cleaning them is a daunting one, fraught with risk and
            inconvenience. Fear not, for I have discovered a solution to this
            quandary – Clean Pro Gutter Cleaning, the premier gutter cleaning
            service in the nation!
          </p>
          <div className="xl:grid grid-cols-2 gap-2 mt-4">
            <p className={`${text} text-xl mt-2 flex gap-2 font-bold `}>
              <CiCircleCheck className="text-2xl " />
              30 Day Warranty
            </p>
            <p className={`${text} text-xl mt-2 flex gap-2 font-bold `}>
              <CiCircleCheck className="text-2xl " />
              Fast, Affordable Service
            </p>
            <p className={`${text} text-xl mt-2 flex gap-2 font-bold `}>
              <CiCircleCheck className="text-2xl " />
              Safety Is Always Top Priority
            </p>
            <p className={`${text} text-xl mt-2 flex gap-2 font-bold `}>
              <CiCircleCheck className="text-2xl " />
              100% Satisfaction Guarantee
            </p>
            <p className={`${text} text-xl mt-2 flex gap-2 font-bold `}>
              <CiCircleCheck className="text-2xl " />
              In Business For Over 20 Years
            </p>
            <p className={`${text} text-xl mt-2 flex gap-2 font-bold `}>
              <CiCircleCheck className="text-2xl " />
              Licensed & Insured*
            </p>
          </div>
        </div>
        <div className="h-72 md:h-96  rounded-2xl overflow-hidden mt-10">
          <Image
            src="https://picsum.photos/id/777/900/550?blur"
            alt="image"
            width={900}
            height={550}
          ></Image>
        </div>
      </div>
      {/* content */}
      {/* Cards */}
      <div className="px-6 mt-16">
        <div className={`text-lg`}>LEARN</div>
        <div className="text-3xl font-bold">
          Our <span className={`${text} `}>Gutter Cleaning</span> Info
        </div>
        <div className="md:px-4 px-4 mt-8 grid grid-cols-1 border-t-2  sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-lg ">
          <div className=" 1 border mt-10 rounded-t-2xl md:rounded-none md:rounded-tl-2xl overflow-hidden  hover:-translate-y-4 shadow-md   ease-in duration-300 ">
            <div className="flex justify-center">
              <Image
                aria-hidden="true"
                src="https://picsum.photos/id/777/900/550?blur"
                alt=""
                title=""
                width="900"
                height="550"
                className=""
              />
            </div>
            <h3
              className={`1 text-2xl mt-4 px-4 font-bold  ${text}  flex justify-center gap-2 `}
            >
              <MdDoubleArrow className="text-3xl text-bold" />
              How Much Does Gutter Cleaning Cost
            </h3>
            <p className=" p-4 text-justify">
              The Cost Of Gutter Cleaning Depends on a variety of factors. We
              discuss what you should expect to have to pay for a good cleaning.
            </p>
          </div>
          <div className=" 2 border mt-10 rounded-t-2xl md:rounded-none overflow-hidden  hover:-translate-y-4 shadow-md   ease-in duration-300 ">
            <div className="flex justify-center">
              <Image
                aria-hidden="true"
                src="https://picsum.photos/id/777/900/550?blur"
                alt=""
                title=""
                width="900"
                height="550"
                className=""
              />
            </div>
            <h3
              className={`1 text-2xl mt-4 px-4 font-bold  ${text}  flex justify-center gap-2 `}
            >
              <MdDoubleArrow className="text-3xl text-bold" />
              How Much Does Gutter Cleaning Cost
            </h3>
            <p className="p-4 text-justify">
              The Cost Of Gutter Cleaning Depends on a variety of factors. We
              discuss what you should expect to have to pay for a good cleaning.
            </p>
          </div>
          <div className=" 3 border mt-10 rounded-t-2xl md:rounded-none md:rounded-tr-2xl  overflow-hidden  hover:-translate-y-4 shadow-md   ease-in duration-300 ">
            <div className="flex justify-center">
              <Image
                aria-hidden="true"
                src="https://picsum.photos/id/777/900/550?blur"
                alt=""
                title=""
                width="900"
                height="550"
                className=""
              />
            </div>
            <h3
              className={`1 text-2xl mt-4 px-4 font-bold  ${text}  flex justify-center gap-2 `}
            >
              <MdDoubleArrow className="text-3xl text-bold" />
              How Much Does Gutter Cleaning Cost
            </h3>
            <p className="p-4 text-justify">
              The Cost Of Gutter Cleaning Depends on a variety of factors. We
              discuss what you should expect to have to pay for a good cleaning.
            </p>
          </div>
          <div className=" 4 border mt-10 rounded-t-2xl md:rounded-none md:rounded-bl-2xl  overflow-hidden  hover:-translate-y-4 shadow-md   ease-in duration-300 ">
            <div className="flex justify-center">
              <Image
                aria-hidden="true"
                src="https://picsum.photos/id/777/900/550?blur"
                alt=""
                title=""
                width="900"
                height="550"
                className=""
              />
            </div>
            <h3
              className={`1 text-2xl mt-4 px-4 font-bold  ${text}  flex justify-center gap-2 `}
            >
              <MdDoubleArrow className="text-3xl text-bold" />
              How Much Does Gutter Cleaning Cost
            </h3>
            <p className="p-4 text-justify">
              The Cost Of Gutter Cleaning Depends on a variety of factors. We
              discuss what you should expect to have to pay for a good cleaning.
            </p>
          </div>
          <div className=" 5 border mt-10 rounded-t-2xl overflow-hidden md:rounded-none hover:-translate-y-4 shadow-md   ease-in duration-300 ">
            <div className="flex justify-center">
              <Image
                aria-hidden="true"
                src="https://picsum.photos/id/777/900/550?blur"
                alt=""
                title=""
                width="900"
                height="550"
                className=""
              />
            </div>
            <h3
              className={`1 text-2xl mt-4 px-4 font-bold  ${text}  flex justify-center gap-2 `}
            >
              <MdDoubleArrow className="text-3xl text-bold" />
              How Much Does Gutter Cleaning Cost
            </h3>
            <p className="p-4 text-justify">
              The Cost Of Gutter Cleaning Depends on a variety of factors. We
              discuss what you should expect to have to pay for a good cleaning.
            </p>
          </div>
          <div className=" 6 border mt-10 rounded-t-2xl md:rounded-none md:rounded-br-2xl  overflow-hidden  hover:-translate-y-4 shadow-md   ease-in duration-300 ">
            <div className="flex justify-center">
              <Image
                aria-hidden="true"
                src="https://picsum.photos/id/777/900/550?blur"
                alt=""
                title=""
                width="900"
                height="550"
                className=""
              />
            </div>
            <h3
              className={`1 text-2xl mt-4 px-4 font-bold  ${text}  flex justify-center gap-2 `}
            >
              <MdDoubleArrow className="text-3xl text-bold" />
              How Much Does Gutter Cleaning Cost
            </h3>
            <p className="p-4 text-justify">
              The Cost Of Gutter Cleaning Depends on a variety of factors. We
              discuss what you should expect to have to pay for a good cleaning.
            </p>
          </div>
        </div>
      </div>
      {/* Cards */}
    </div>
  );
};

export default Hero;
