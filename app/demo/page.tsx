import React from "react";
import Imagecarousel from "../components/carouse";
import ReviewCarousel from "../components/review";
import YourComponent from "../components/apidisplay";
import Mobilecall from "../components/mobilecall";

const demo = () => {
    const reviews = [
        {
            id: 1,
            text: 'Review 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            id: 2,
            text: 'Review 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            id: 3,
            text: 'Review 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            id: 4,
            text: 'Review 4: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            id: 5,
            text: 'Review 5: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
          {
            id: 6,
            text: 'Review 6: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
          },
      ];
  return (
    <div className="text-black">
      <Imagecarousel />
      <ReviewCarousel reviews={reviews} itemsPerPage={2}/>
      <Mobilecall/>
    </div>
  );
};

export default demo;
