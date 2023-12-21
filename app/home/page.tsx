import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { MdKeyboardArrowRight, MdDoubleArrow } from "react-icons/md";

const Hero = () => {
  const color = "#f76610";
  const color1 = "#c25210";
  const text = `text-[#f76610]`;
  const btn = `bg-[#f76610] hover:bg-[#c25210"]`;
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
                className={`${btn}  text-white font-bold p-4 rounded-3xl mt-10 text-xl`}
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
            <div className="flex flex-col md:flex-row md:gap-40 w-full  justify-center items-center">
              <button
                className={`${btn}  text-white font-bold p-4 rounded-3xl mt-10 text-xl`}
              >
                CALL FOR A QUOTE
              </button>
              <button
                className={`${btn}  text-white font-bold p-4 rounded-3xl mt-10 text-xl`}
              >
                GET A QUOTE ONLINE
              </button>
            </div>
        </div>
        <div className="h-72 md:h-96 xl:h-fit xl:w-96 border border-black rounded-2xl overflow-hidden mt-10 hidden xl:flex">
          <Image
            src="https://picsum.photos/id/777/648/1152?blur"
            alt="image"
            width={648}
            height={900}
          ></Image>
        </div>
      </div>
      {/* content */}
      {/* Cards */}
      <div className="px-4 md:px-6 mb-10 xl:px-20 mt-16">
        <div className={`text-lg`}>LEARN</div>
        <div className="text-3xl font-bold">
          Our <span className={`${text} `}>Gutter Cleaning</span> Info
        </div>
        <div className="md:px-20 px-4 mt-8 grid grid-cols-1 border-t-2  sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-lg ">
          <div className=" 1 border mt-10 rounded-t-2xl md:rounded-none md:rounded-tl-2xl overflow-hidden  hover:-translate-y-4    ease-in duration-300 ">
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
          <div className=" 2 border mt-10 rounded-t-2xl md:rounded-none overflow-hidden  hover:-translate-y-4   ease-in duration-300 ">
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
          <div className=" 3 border mt-10 rounded-t-2xl md:rounded-none md:rounded-tr-2xl  overflow-hidden  hover:-translate-y-4   ease-in duration-300 ">
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
          <div className=" 4 border mt-10 rounded-t-2xl md:rounded-none md:rounded-bl-2xl  overflow-hidden  hover:-translate-y-4    ease-in duration-300 ">
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
          <div className=" 5 border mt-10 rounded-t-2xl overflow-hidden md:rounded-none hover:-translate-y-4   ease-in duration-300 ">
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
          <div className=" 6 border mt-10 rounded-t-2xl md:rounded-none md:rounded-br-2xl  overflow-hidden  hover:-translate-y-4    ease-in duration-300 ">
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
      {/* CTA */}
      <div className="bg-[#191e34] text-white px-10 py-6 font-bold text-center ">
        <h2 className="text-4xl ">Isn’t It Time You Gave Us A Call?</h2>
        <button className="bg-[#191e34] text-white rounded-full px-10 py-3 font-bold text-xl border mt-4  hover:bg-orange-600">Call NOW</button>
      </div>
      {/* CTA */}
      {/*  */}
      <span className=" border border-black">
  <svg className="fill-orange-600 border border-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 20 200 ">
    <path d="M147.734 39.502c-2.135-1.818-5.122-1.66-7.67-.664-3.916-18.457-19.422-33.465-40.672-33.656-18.558-.166-35.581 14.998-41.3 32.753-.831-.575-1.938-.85-2.885-.776-2.785.218-5.014 2.471-6.142 4.906-1.208 2.608-1.704 5.802-.125 8.38 1.518 2.479 4.443 3.324 7.271 3.229.335 3.688 1.23 7.332 2.809 10.825.608 1.342 2.935.698 2.798-.758-1.005-10.708.853-21.906 5.582-31.213 11.589-1.13 19.128 11.779 30.741 12.002 12.327.236 22.359-8.142 34.468-9.18 2.845 8.805 2.822 18.748-.636 27.576-1.443 3.686 4.48 5.261 5.909 1.629a45.32 45.32 0 0 0 2.481-8.91c1.703 2.035 4.648.147 5.927-1.334 1.75-2.027 2.854-4.759 3.261-7.385.391-2.525.3-5.622-1.817-7.424zm18.329 56.743c-.183-6.414-1.076-12.726-.095-19.127.197-1.282-.078-2.855-1.415-3.479-22.557-10.506-48.942 2.753-69.93 12.053-15.25-16.296-43.06-22.97-64.499-17.394a2.505 2.505 0 0 0-2.449.476c-3.098 2.688-1.998 8.537-1.652 12.153.5 5.219 1.34 10.622 2.51 15.729a1.3 1.3 0 0 0 .264.529c-.276.916.116 1.943.932 2.565 7.078 5.395 12.182 9.707 15.794 18.359 6.944 16.637-.466 32.169-17.769 36.558-1.282.325-2.21 1.579-2.201 2.89.025 3.516-1.004 9.534 2.516 11.69.799.489 1.797.396 2.543-.082 14.291.559 28.537-.56 42.19 4.534 5.154 1.923 10.193 4.146 15.111 6.608a50.452 50.452 0 0 1 4.914 2.836 4.85 4.85 0 0 1 1.418 1.275l.065.097c.227 1.215 1.556 2.218 2.797 1.788 1.939-.671 2.796-1.547 2.908-2.535 3.166-.487 5.684-2.078 8.639-3.464 5.163-2.423 10.701-4.037 16.221-5.407 11.66-2.892 23.94-3.626 35.823-1.798 1.956.301 3.921-.797 3.922-2.987.001-3.071 1.051-8.194-.853-10.916-.987-1.41-2.683-1.612-3.888-.633-1.02-.057-2.004.044-3.208.122-4.021.26-6.977-3.204-9.065-6.122-3.778-5.281-5.72-12.309-5.975-18.734-.368-9.256 4.159-19.052 10.937-25.119 3.491-3.125 8.669-3.446 12.103-6.521l-.035-.02c.145-.142.287-.302.433-.494.762-1.004.42-2.128-.334-2.899.797-.46 1.364-1.303 1.328-2.531zm-21.421 11.842c-6.673 7.306-10.255 19.895-8.79 29.649 1.294 8.612 4.767 17.782 11.697 23.408 2.673 2.169 7.143 3.602 10.596 2.69-.017.919.025 1.858.086 2.77-10.862-1.171-21.581-.408-32.339 1.927-7.826 1.699-22.015 5.354-26.899 12.701-.366-.448-.83-.904-1.343-1.361 2.636-28.857.834-58.406.513-87.32-.024-2.125-3.277-2.125-3.297 0-.265 28.406-.791 57.15.528 85.554-4.652-3.258-11.273-6.201-12.355-6.663-17.112-7.312-32.867-7.462-51.117-6.391.032-1.716-.146-3.518-.273-5.244 13.844-4.208 22.721-14.892 22.373-29.976-.2-8.646-3.837-18.101-9.474-24.627-2.636-3.053-4.786-5.119-8.371-6.871-1.458-.713-2.946-1.372-4.425-2.038-.061-.028-.107-.044-.163-.068.764-4.519.143-9.201-.155-13.742-.162-2.464-.251-4.918-.156-7.386.044-1.151.277-2.114.366-3.101 20.898-1.893 43.91 3.054 59.063 18.235 1.399 1.401 3.146 1.002 4.178-.098 19.966-5.485 43.806-20.362 64.812-11.928-.561 6.03.037 11.921.239 18.038.023.7.242 1.271.574 1.723-5.876.908-12.35 6.267-15.868 10.119z"/>
    <path d="M30.964 118.438c2.133-4.666 2.394-10.799-2.43-13.869-7.362-4.685-14.055-.004-19.458 5.373-5.657 5.63-10.336 14.01-8.771 22.274.828 4.374 2.87 7.896 5.636 10.812 3.147 4.113 7.533 7.264 12.304 8.216.279.056.549.054.81.024 8.642 2.138 15.33-4.266 12.306-12.336 8.663-4.678 8.483-16.35-.397-20.494zm-6.17.114a1.974 1.974 0 0 0-.315.727c-.045-.005-.088.01-.133.008 1.815-3.855 2.995-7.809 2.281-11.032 1.799 2.624-.961 9.108-1.833 10.297zm139.688-15.365c-8.521 1.717-13.52 13.996-6.458 18.341-6.374 3.942-7.87 12.374-1.168 16.268-3.722 5.004 1.888 11.758 9.366 13.945 13.263 3.88 24.59-11.609 25.312-23.198.95-15.244-11.388-28.513-27.052-25.356z"/>
  </svg>
</span>
      {/* =gpt("Give the neighborhoods of "&G180&" do not add starting and ending text only give  the name") */}
    </div>
  );
};

export default Hero;

