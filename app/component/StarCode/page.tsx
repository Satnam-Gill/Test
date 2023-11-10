

// const NavBar = dynamic(() => import("./components/navbar"), { ssr: false });
// const Header = dynamic(() => import("./components/Header"), { ssr: false });
// const NewHeader = dynamic(() => import("./components/newHeader"), { ssr: false });
// const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const page = () => {
  return (
    <div>
      {/* 27-10-2023 modify to accordian */}
            {/* <div className=" 1 rounded-md p-3  border border-gray-300 shadow-md">
              <div className="1 text-xl font-bold  ">
              Hand Cleaning
              </div>
              <div className="mt-4 text-lg ">
              <div className=""><a className="font-bold">Basic Clearing: </a>This involves the removal of loose debris like leaves and twigs, providing a quick and efficient clean.</div>
              <div className="mt-2"><a className="font-bold">Detailed Cleaning: </a> For a more thorough clean, this method includes wiping down and sanitising the interiors of your gutters.</div>
              </div>
            </div>
            <div className=" 2 rounded-md p-3 border border-gray-300 shadow-md">
            <div className="2 text-xl font-bold  ">
            Vacuum Cleaning
              </div>
              <div className="mt-4 text-lg ">
              <div className="w-full"><a className="font-bold">Single-Stage Vacuum: </a>Ideal for lighter debris and generally used for maintenance cleaning to keep your gutters in top shape</div>
              <div className="mt-2 w-full"><a className="font-bold">Multi-Stage Vacuum: </a> A more powerful option designed for gutters that haven't been cleaned in a while, ensuring a deep clean.</div>
              </div>
            </div>
            <div className=" 3 rounded-md p-3 border border-gray-300 shadow-md">
            <div className="3 text-xl font-bold  ">
            High-Pressure Water Cleaning
              </div>
              <div className="mt-4 text-lg ">
              <div className=""><a className="font-bold">Standard Pressure:</a>This is our go-to method for regular, annual cleaning, effectively removing most types of debris.</div>
              <div className="mt-2"><a className="font-bold">High-Pressure:</a> We ramp up the pressure for those stubborn areas with caked-on dirt and grime to ensure a spotless finish.</div>
              </div>
            </div>
            <div className=" 4 rounded-md p-3 border border-gray-300 shadow-md">
            <div className="4 text-xl font-bold  ">
            Chemical Cleaning
              </div>
              <div className="mt-4 text-lg ">
              <div className="w-full"><a className="font-bold">Eco-Friendly Solutions:</a>This involves the removal of loose debris like leaves and twigs, providing a quick and efficient clean.</div>
              <div className="mt-2 w-full"><a className="font-bold">Heavy-Duty Chemicals:</a> For extreme cases like mold and mildew, we have heavy-duty chemical solutions that get the job done.</div>
              </div>
            </div> */}
            {/* 27-10-2023 */}

            {/* <div className=" 5 rounded-md p-3 shadow-md">
              <div className="5 text-xl font-bold  ">
                Porta Potty Rentals for Parties in the United States
              </div>
              <div className="mt-4 text-lg">
                Are you working on a construction site and need porta potties
                for your workers? Star Porta Potty Rentals can help. Our
                standard porta potties are perfect for construction sites, they
                are tough and durable enough to withstand the rigors of a
                construction site.
              </div>
            </div>
            <div className=" 6 rounded-md p-3 shadow-md">
              <div className="6 text-xl font-bold  ">
                Porta Potty Rentals for Parties in the United States
              </div>
              <div className="mt-4 text-lg">
                Are you working on a construction site and need porta potties
                for your workers? Star Porta Potty Rentals can help. Our
                standard porta potties are perfect for construction sites, they
                are tough and durable enough to withstand the rigors of a
                construction site.
              </div>
            </div> */}
               {/* <div className="py-16">
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border mx-auto  rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  text-bottom  "
            >
              <div className="border rounded-lg ring-4 mx-4 hover:scale-105  ring-[#e0c3c3]">
                <h5 className="mb-2 text-2xl bg-[#dd2424] font-bold tracking-tight text-white border  w-full rounded-t-lg text-center dark:text-white">
                  Lisa
                </h5>
                <p className="font-normal px-4 overflow-hidden rounded-lg bg-white text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Excepturi
                  magnam natus, molestias ducimus, culpa expedita ab ea eius
                  voluptatibus corporis quidem doloribus voluptatum illo quis.
                </p>
              </div>
            </a>
          </div> */}
          {/* <div className="w-full  px-10 -mt-4 flex  flex-row-reverse ">
        <img
          src="https://www.junk-king.com/images/ico_red_arrow.svg"
          className=" hidden sm:block "
          alt="Star Porta Potty Rental"
        />
      </div> */}
      {/* --------------------------------------FAQ Start------------------------------ */}
        {/* <div className="mt-24 w-full px-24">
          <div className=" text-2xl text-center font-extrabold">
            Frequently Asked Questions
          </div>
          <div className="mt-10 w-full text-base gap-6 font-semibold flex flex-col   ">
            <Accordion variant="splitted" className="">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="What size of Porta Potty Do You Need?"
                className=" border pl-2 shadow-sm  "
              >
                <div className=" ">
                  {
                    "Your need for porta potties will depend on the size and duration of your event. A small event for a few hours will not need as many porta potties as a large event for a longer period of time."
                  }
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="How much does it cost to rent a porta potty in the united states?"
                className="mt-3 pl-2 shadow-sm  border-gray-200 rounded-lg border "
              >
                <div className="  ">
                  {
                    "The cost of renting a porta potty in the United States will depend on the size and duration of your event, as well as the number of porta potties that you need."
                  }
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="How does a porta potty work?"
                className="mt-3 pl-2 border  border-gray-200 rounded-lg shadow-sm  "
              >
                <div className="">
                  {
                    "A porta potty is a self-contained unit that is typically used as a temporary toilet. They are often found at construction sites, festivals, and other events where there are not enough permanent toilets to accommodate the number of people attending the event."
                  }
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 3"
                title="Where should I place porta potty at my event?"
                className="mt-3 pl-2 border  border-gray-200 rounded-lg shadow-sm"
              >
                <div className="">
                  {
                    "Placing your porta potties will depend on the layout of your event. You should place them in an easily accessible location so that your guests can use them without having to walk too far. You should also make sure that they are placed in a shady area, if possible, to keep them cool."
                  }
                </div>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 3"
                title="Does it come with all sanitation facilities?"
                className="mt-3 pl-2 border border-gray-200 rounded-lg shadow-sm "
              >
                <div className="">
                  {
                    "Yes, our porta potties come with all the necessary sanitation facilities, including toilet paper, hand sanitizer, and soap."
                  }
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div> */}
        {/* --------------------------------------FAQ End------------------------------ */}
    </div>
  )
}

export default page

