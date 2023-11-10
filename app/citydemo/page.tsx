'use client'
import React from "react";
import Typesof from "../components/Typesof";
import Cta from "../components/Cta";
import Link from "next/link";
import YouTube from "react-youtube";
import { Accordion, AccordionItem } from "@nextui-org/react";


const CityDemo = () => {
  const locations = [
    { name: "Alabama" },
    { name: "Alaska" },
    { name: "Arizona" },
    { name: "Arkansas" },
    { name: "California" },
    { name: "Colorado" },
    { name: "Connecticut" },
    { name: "Delaware" },
    { name: "Florida" },
    { name: "Georgia" },
    { name: "Hawaii" },
    { name: "Idaho" },
    { name: "Illinois" },
    { name: "Indiana" },
    { name: "Iowa" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
    <div className="max-w-screen-2xl ">
      {" "}
      {/* -----------------------------------------Poster Start------------------------ */}
      <div
        style={{
          backgroundImage: `url("https://starportapottyrental.com/wp-content/uploads/2022/09/porta-potty-banner-image.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "600px",
          width: "100%",
        }}
        className=" bg-black w-full  font-bold  sm:text-3xl  border flex flex-col justify-center items-center   "
      >
        <span className=" bg-[#0e0d0d67] text-3xl  overflow-hidden h-full w-full text-white    flex flex-col items-center justify-center gap-3">
          Porta Potty Rental Company in California
          <button className="bg-[#dd2424] hover:bg-[hsl(0,100%,50%)] hover:translate-y-2  text-white font-bold py-2 px-4 rounded ">
            Call Us
          </button>
        </span>
      </div>
      {/* -----------------------------------------Poster End---------------------------- */}
      {/* -----------------------------------------Content1 Start---------------------------- */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-6 px-8">
        <div className="flex flex-col justify-center    ">
          <div className="text-2xl font-bold">
            Best Portable Restrooms Rental in Los Angeles, CA
          </div>
          <div className="mt-6">
            Porta-potty are of great use when you are planning any event or
            gathering in California and you want to avoid the hassles of public
            restrooms. Our company is the leading provider of porta-potty rental
            services in California. We provide clean, reliable, and affordable
            portable toilets for all types of events and gatherings. Whether you
            are planning a wedding, birthday party, corporate event, family
            reunion, or any other type of event, we can provide you with the
            perfect porta-potty solution that will suit your needs and budget.
          </div>
        </div>
        <div className="">
          <img
            src="https://starportapottyrental.com/wp-content/uploads/2022/09/Porta-Potty-Rental-Los-Angeles.jpg"
            className="border rounded-lg shadow-lg "
            alt="Star Porta Potty Rental"
          />
        </div>
      </div>
      {/* -----------------------------------------Contant1 End---------------------------- */}
      {/* -----------------------------------------Typeof Start---------------------------- */}
      <div className="">
        <Typesof />
      </div>
      {/* -----------------------------------------Typeof End---------------------------- */}
      {/* -----------------------------------------LA Start---------------------------- */}
      <div className=" mt-28 px-24">
        <div className="text-center text-3xl font-extrabold">
          Portable Toilet & Porta Potty Rentals - Los Angeles, CA
        </div>
        <div className="mt-6 text-center">
          A portable toilet or “porta potty” can be of great use for many
          special events or occasions. If you are having a large outdoor
          gathering, party, or wedding in Los Angeles, it is important to have
          adequate sanitation for your guests. This is where portable toilets
          come in handy. At Star Porta Potty, we offer a wide selection of
          portable toilets and porta potties for rent in Los Angeles, CA. The
          various types of units we offer include:
        </div>
        <div className="event grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <div className=" 1 ">
            <div className="1 text-lg font-bold  ">
              Standard portable toilets
            </div>
            <div className="mt-4">
              These are the most basic type of portable toilets. They come with
              a seat and an attached toilet paper holder.
            </div>
          </div>
          <div className=" 2 ">
            <div className="2 text-lg font-bold  ">
              ADA Compliant portable toilets
            </div>
            <div className="mt-4">
              These units are designed to be used by guests with disabilities.
              They meet all the requirements of the Americans with Disabilities
              Act (ADA).
            </div>
          </div>
          <div className=" 3 ">
            <div className="2 text-lg font-bold  ">Deluxe portable toilets</div>
            <div className="mt-4">
              These units are more comfortable and spacious than standard units.
              They often come with a sink, mirror, and other amenities.
            </div>
          </div>
          <div className=" 4  ">
            <div className="4 text-lg font-bold  ">
              Portable restroom trailers
            </div>
            <div className="mt-4">
              These are luxury units that come with several stalls, sinks, and
              other amenities. They are perfect for larger events.
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------LA End---------------------------- */}
      {/*-----------------------------Benefits of Portable Sanitation in Los Angeles start---------------------------- */}
      <div className=" mt-28 px-24">
        <div className="text-center text-3xl font-extrabold">
          Benefits of Portable Sanitation in Los Angeles
          <br />
          By Star Porta Potty Rentals
        </div>
        <div className="mt-6">
          There are many benefits of renting portable toilets for your event in
          Los Angeles. They include:
        </div>
        <div className="event grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          <div className=" 1">
            <div className="1 text-lg font-bold  ">1. Convenience</div>
            <div className="mt-2">
              Portable toilets are very convenient for guests. They do not have
              to leave the event to find a restroom.
            </div>
          </div>
          <div className=" 2">
            <div className="2 text-lg font-bold  ">2. Sanitation</div>
            <div className="mt-2">
              Portable toilets provide the necessary sanitation for your guests.
              This is important for preventing the spread of disease.
            </div>
          </div>
          <div className=" 3">
            <div className="3 text-lg font-bold  ">3. Affordable</div>
            <div className="mt-2">
              Portable toilets are very affordable. They are a fraction of the
              cost of renting a traditional restroom.
            </div>
          </div>
          <div className=" 4">
            <div className="4 text-lg font-bold  ">4. Flexible</div>
            <div className="mt-2">
              Portable toilets are very flexible. They can be placed anywhere at
              your event.
            </div>
          </div>
          <div className=" 5">
            <div className="5 text-lg font-bold  ">5. Easy to Use</div>
            <div className="mt-2">
              Portable toilets are very easy to use. They do not require any
              special skills or training.
            </div>
          </div>
          <div className=" 6">
            <div className="6 text-lg font-bold  ">
              6. Environmentally Friendly
            </div>
            <div className="mt-2">
              Portable toilets are environmentally friendly. They do not use any
              water or electricity.
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------Benefits of Portable Sanitation in Los Angele End---------------------------- */}
      {/*-----------------------------Toilet Rentals in Los Angeles start---------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-20 px-8">
        <div className="">
          <img
            src="https://starportapottyrental.com/wp-content/uploads/2022/09/Potty-Rental-in-Los-Angeles-from-Star-Porta-Potty-Rentals.jpg"
            className="border rounded-lg shadow-lg "
            alt="Star Porta Potty Rental"
          />
        </div>
        <div className=" flex flex-col gap-3   ">
          <div className="text-2xl font-bold">
            Get Your Luxury Toilet Rentals in Los Angeles from Star Porta Potty
            Rentals
          </div>
          <div className="mt-3 text-lg">
            If you are looking for a porta potty in Los Angeles, CA, look no
            further than Star Porta Potty. We have been in business for years
            and have many units to choose from. We understand the importance of
            sanitation at events, and our prices are very competitive. Our top
            priority is to make sure your event is a success. Contact us today
            to learn more about our services.
          </div>
          <div className="flex justify-center">
            <button className="bg-[#dd2424] mt-3 hover:bg-[hsl(0,100%,50%)] hover:translate-y-2 text-xl text-white font-bold py-2 px-4 rounded-lg ">
              +1 (833) 659-7676
            </button>
          </div>
        </div>
      </div>
      {/*-----------------------------Toilet Rentals in Los Angeles End---------------------------- */}
      {/*-----------------------------Industries and Events START---------------------------- */}
      <div className=" mt-28 px-24">
        <div className="text-center text-3xl font-extrabold">
          Industries and Events we serve
        </div>
        <div className="mt-6 text-center">
          Star Porta Potty Rentals is a full-service portable sanitation company
          serving the greater Los Angeles area. We provide portable potty
          rentals for a variety of events and industries, including:
        </div>
        <div className="event grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <div className=" 1 ">
            <div className="1 text-lg font-bold  ">
              Porta Potty Rentals For weddings in Los Angeles
            </div>
            <div className="mt-4">
              Weddings are a special time where families and friends come
              together to celebrate the union of two people. Unfortunately, they
              can also be a breeding ground for germs and bacteria. This is why
              it is important to have adequate sanitation at your wedding. At
              Star Porta Potty, we offer a wide selection of porta potties for
              weddings in Los Angeles.
            </div>
          </div>
          <div className=" 2 ">
            <div className="2 text-lg font-bold  ">
              Porta Potty Rentals For construction sites in Los Angeles
            </div>
            <div className="mt-4">
              Construction sites are notorious for being dirty and dangerous
              places. This is why it is important to have adequate sanitation at
              your construction site. We offer a wide selection of porta potties
              for construction sites in Los Angeles. Our units are tough and
              durable to withstand the rigors of a construction site.
            </div>
          </div>
          <div className=" 3 ">
            <div className="2 text-lg font-bold  ">
              Porta Potty Rentals for Concerts in Los Angeles
            </div>
            <div className="mt-4">
              Concerts are a great way to enjoy the company of friends and
              family. Everyone is there to have a good time and let loose. With
              our porta potty, you can be sure that your guests will have a
              clean and safe place to use the restroom.
            </div>
          </div>
          <div className=" 4  ">
            <div className="4 text-lg font-bold  ">
              Porta Rentals for Sporting Events in Los Angeles
            </div>
            <div className="mt-4">
              Sporting events involve a lot of physical activity. This can lead
              to dehydration and the need to use the restroom frequently. Also,
              the large crowd will need to use the restroom. Our porta potties
              are perfect for sporting events. They are clean, safe, and
              reliable.
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------Industries and Events    End---------------------------- */}
      {/*-----------------------------Choose Star Start---------------------------- */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 mt-6  px-10">
        <div className="flex flex-col justify-center    ">
          <div className="text-2xl font-bold">
            Why Choose Star Porta Potty Rentals in Los Angeles, CA.
          </div>
          <div className="mt-6">
            There are many reasons why you should choose Star Porta Potty
            Rentals for your next event. Here are just a few:
          </div>
          <div className="  mt-6 ">
            <div className="4  font-bold  ">Eco-friendly</div>
            <div className="mt-2">
              We are an eco-friendly company. We use green products and recycle
              where possible.
            </div>
            <div className="4 mt-2 font-bold  ">Competitive Pricing</div>
            <div className="mt-2">
              We offer competitive pricing on all of our porta potty rentals. We
              also have discounts available for multiple units.
            </div>
            <div className="4  mt-2 font-bold  ">Convenient</div>
            <div className="mt-2">
              We offer delivery and pick-up services for all of our porta potty
              rentals. We also have a 24/7 customer service line.
            </div>
            <div className="4 mt-2 font-bold  ">Credible</div>
            <div className="mt-2">
              We are a licensed and insured company. We have been in business
              for years and have a solid reputation.
            </div>
            <div className="4 mt-2 font-bold  ">Full Service</div>
            <div className="mt-2">
              We are a full-service company. We offer delivery, set-up, and
              pick-up services for all of our porta potty rentals. Contact us
              today for more information about our porta potty rentals in Los
              Angeles, CA. We would be happy to answer any questions you have.
            </div>
          </div>
        </div>
        <div className="my-6 w-full  ">
          <img
            src="https://starportapottyrental.com/wp-content/uploads/elementor/thumbs/Why-Choose-Star-Porta-Potty-Rentals-Los-Angeles-CA-q8q0wz7kuqhgcp4dnfby2rb84h80kn7n4bwrts29gw.jpg"
            className=" w-full rounded-lg object-fill shadow-lg "
            alt="Star Porta Potty Rental"
          />
        </div>
      </div>
      {/*-----------------------------Choose Star End----------------------------- */}
      {/*-----------------------------CTA Start----------------------------- */}
      <Cta />
      {/*-----------------------------CTA End----------------------------- */}
      {/*-----------------------------Location we Serve Start----------------------------- */}
      <div className="mt-10 w-full">
        <div className="text-center text-2xl font-extrabold">
          Area We Serve in California
        </div>
        <div className="mt-6 px-12 flex flex-wrap justify-center gap-2 font-mono h-18 rounded-xl shadow-2xl">
          {locations.map((location: any, index: any) => (
            <Link key={index} href={`/${location.name}`}>
              <div className="flex items-center border shadow-2xl cursor-pointer rounded-lg pr-2 my-1 mx-1 hover:font-extrabold hover:scale-95">
                {/* Render your content for each location here */}
                {location.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/*-----------------------------Location we Serve End----------------------------- */}
      {/*-----------------------------LA History Start----------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mt-20 px-8">
        <div className="">
          <img
            src="https://starportapottyrental.com/wp-content/uploads/2022/09/LA-California.jpg"
            className="border rounded-lg shadow-lg "
            alt="Star Porta Potty Rental"
          />
        </div>
        <div className=" flex flex-col gap-3   ">
          <div className="text-2xl font-bold">LA, California History</div>
          <div className="mt-3 text-lg">
            Los Angles was first settled by the Spanish in 1781. In 1848, it
            became part of the United States after the Mexican-American War.
            Today, it is one of the largest cities in the country with a
            population of over 4 million people. The city is known for its
            diversity, sunny weather, and Hollywood.
          </div>
        </div>
      </div>
      {/*-----------------------------LA History End----------------------------- */}
      {/*-----------------------------Youtube Start----------------------------- */}
      <div className=" flex flex-col  items-center  mt-10">
        <div className="text-3xl font-extrabold">Watch Video</div>
        <div className="border rounded-lg overflow-hidden mt-3 shadow-2xl w-auto h-30 sm:h-auto">
          <YouTube videoId="5sTGhbGowvk" className=" " />
        </div>
      </div>
      {/*-----------------------------Youtube End------------------------------- */}
      {/*-----------------------------Top Site Start------------------------------- */}
      <div className="mt-6 font-extrabold text-center text-4xl">Top Site</div>
      <div className=" px-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        <div className="">
            <div className="rounded-lg  h-52 w-full overflow-hidden">
                <img src="https://starportapottyrental.com/wp-content/uploads/2022/09/LA-California.jpg" alt="Disney Land" />
            </div>
            <div className=" text-center mt-2 font-bold text-red-600 text-3xl">Disneyland Park</div>
        </div>
        <div className="">
            <div className="rounded-lg  h-52  w-full overflow-hidden">
                <img src="https://starportapottyrental.com/wp-content/uploads/2022/09/images-1.jpg" />
            </div>
            <div className=" text-center mt-2 font-bold text-red-600 text-3xl">Universal Studios</div>
        </div>
        <div className="">
            <div className="rounded-lg  h-52  w-full overflow-hidden">
                <img src="https://starportapottyrental.com/wp-content/uploads/2022/09/images-2.jpg" />
            </div>
            <div className=" text-center mt-2 font-bold text-red-600 text-3xl">Los Angeles County Museum of Art</div>
        </div>
        <div className="">
            <div className="rounded-lg  h-52  w-full overflow-hidden">
                <img src="https://starportapottyrental.com/wp-content/uploads/2022/09/venti-views-c5GkEd-j5vI-unsplash.jpg.webp" alt="Disney Land" className="w-full"/>
            </div>
            <div className=" text-center mt-2 font-bold text-red-600 text-3xl">Griffith Observatory</div>
        </div>
        <div className="">
            <div className="rounded-lg h-52  w-full overflow-hidden">
                <img src="https://starportapottyrental.com/wp-content/uploads/elementor/thumbs/images-4-q8q0x2yxm2l4fzvrroe26971i0qk44hhps8ch6xr9k.jpg" alt="Disney Land" />
            </div>
            <div className=" text-center mt-2 font-bold text-red-600 text-3xl">Santa Monica Pier</div>
        </div>
        <div className="">
            <div className="rounded-lg h-52  w-full overflow-hidden">
                <img src="https://starportapottyrental.com/wp-content/uploads/2022/09/images-6.jpg" alt="Disney Land" />
            </div>
            <div className=" text-center mt-2 font-bold text-red-600 text-3xl">The Getty</div>
        </div>
        
      </div>
      {/*-----------------------------Top Site End------------------------------- */}
       {/* -----------------------------------------FAQ Start---------------------------- */}
       {/* <div className="mt-10 w-full px-24">
        <div className=" text-2xl text-center font-extrabold">
          Frequently Asked Questions
        </div>
        <div className="mt-4 text-base gap-6 font-semibold flex flex-col   ">
          <Accordion variant="splitted" className="">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="How much does it cost to rent a porta potty in City?"
              className=" border shadow-sm "
            >
              {
                "It depends on the type of unit you need, the length of your event, and the number of guests you are expecting. Contact Star Porta Potty Rentals for a free quote."
              }
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How much does a porta potty weigh?"
              className="mt-3 shadow-sm border "
            >
              {"Most porta potties weigh between 200 and 400 pounds."}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="How does a porta potty work?"
              className="mt-3  border shadow-sm  "
            >
              {
                "A porta potty is a self-contained unit that is typically used as a temporary toilet. They are often found at construction sites, festivals, and other events where there are not enough permanent toilets to accommodate the number of people attending the event."
              }
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 3"
              title="What is the meaning of porta potty?"
              className="mt-3  border shadow-sm"
            >
              {
                "A porta potty is a portable toilet that can be used at events, construction sites, and other locations where there are no permanent bathrooms."
              }
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 3"
              title="How do you empty a porta potty?"
              className="mt-3  border shadow-sm "
            >
              {
                "The waste is collected in a tank that can be emptied by a professional service."
              }
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="Accordion 3"
              title="How Many Bathrooms Do You Need for 75 Guests?"
              className="mt-3  border shadow-sm "
            >
              {
                "Based on the average amount of time people spend in the bathroom, you will need at least 4 porta potties for every 75 guests."
              }
            </AccordionItem>
            <AccordionItem
              key="7"
              aria-label="Accordion 3"
              title="Can I Empty Chemical Toilets at Home?"
              className="mt-3  border shadow-sm "
            >
              {
                "No, you should not empty chemical toilets at home. The chemicals in the waste can be harmful for you."
              }
            </AccordionItem>
          </Accordion>
        </div>
      </div> */}
      {/* -----------------------------------------FAQ End---------------------------- */}
      {/* -----------------------------------------Map End---------------------------- */}
              <div className="w-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d846569.3795064108!2d-118.41173199999999!3d34.020479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1695037407586!5m2!1sen!2sus"height="350" className="border rounded-lg  w-full mt-10"  loading="lazy"></iframe>
      </div>
      {/* -----------------------------------------Map End---------------------------- */}
    
    </div>
    </div>
  );
};

export default CityDemo;
