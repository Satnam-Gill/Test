import Image from "next/image"
import Link from "next/link"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { GrYoutube } from "react-icons/gr"

const Footer = () => {
      return (
            <div className=" bg-[#191e34] ">
                  {/*  cursor-default   bg-[#151627] grid place-items-center w-screen md:w-full min-w-[375px] */}
                  <div className=" mt-8 flex flex-col md:min-w-[650px]  justify-center items-center max-w-[1536px] ">
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2  px-6   text-white ">
                              <div className="text-white  w-full text-center border-b sm:border-0">
                                    <div className="text-2xl ">Logo</div>
                                    <div className="text-2xl mt-4">We Love Social!</div>
                                    <div className="mt-3 ">
                                          {/* <Image
                src="/Star gutter Cleaning logo 2.png"
                height={200}
                width={200}
                className="h-20 brightness-110 "
                alt="Star Porta Potty Rental"
                title="Star Porta Potty Rental"
                
              /> */}
                                    </div>
                                    <div className="mt-10">
                                          Star Gutter Cleaning is a prominent gutter cleaning service provider in the United States.
                                    </div>
                                    <div className="flex flex-row gap-10 justify-center items-center mt-10 mb-10  ">
                                          <BsFacebook className="text-2xl" />
                                          <BsTwitter className="text-2xl" />
                                          <GrYoutube className="text-2xl" />
                                    </div>

                              </div>
                              <div className="shadow-sm w-full   ">
                                    <div className="text-2xl border-b-2 w-fit border-orange-500 sm:mt-0 mt-14">Work For Us</div>
                                    <div className="mt-3 text-xl">
                                          Join Our Team
                                    </div>
                                    <div className="text-2xl border-b-2 md:w-fit border-orange-500 mt-14">Customer Support</div>
                                    <div className="mt-10 md:mt-2 text-xl space-y-3">
                                          <p>Contact Us</p>
                                          <p>Bill Payment</p>
                                          <p>FAQs</p>
                                    </div>
                              </div>
                              <div className="w-full mt-20 md:mt-0 ">
                                    <div className="text-2xl w-fit border-b-2  border-orange-500" >Corporate Info</div>
                                    <div className="grid mt-8 grid-rows-3 gap-4 ">
                                          <Link href="/blogs"><p>120 East Main ST, Mountain View, AR 72560</p></Link>
                                          <Link href="/about"><p>877.736.0586</p></Link>
                                          <Link href="/contact"><p>sales@cleanproguttercleaning.com</p></Link>
                                    </div>
                              </div>
                              <div className="grid text-xl grid-rows-5 w-full mt-20 md:mt-0  ">
                                    <div className="text-2xl w-fit border-b-2  border-orange-500 ">About Us</div>
                                    <p className="mt-4">Satisfaction Guarantee</p>
                                    <p className="mt-4">Careers</p>
                                    <p className="mt-4">Investor Relations</p>
                                    <p className="mt-4">About Us</p>
                              </div>
                        </div>
                        <div className="text-white text-xl text-center mt-10  border-t-2 mx-9 ">
                              <p className="my-2">
                                    Copyright ©2023 Star Gutter Cleaning, All Right Reserved
                              </p>
                        </div>
                  </div>
            </div>
      )
}

export default Footer
