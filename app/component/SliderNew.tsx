import "../globals.css";
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderNew = () => {
      const settings = {
            accessibility:true,
            dots: true,
            infinite: true,
           
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ],
              
            
          };
      const data = [
            {
              name: `John Morgan`,
              img: `/students/John_Morgan.jpg`,
              review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            },
            {
              name: `Ellie Anderson`,
              img: `/students/Ellie_Anderson.jpg`,
              review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            },
            {
              name: `Nia Adebayo`,
              img: `/students/Nia_Adebayo.jpg`,
              review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            },
            {
              name: `Rigo Louie`,
              img: `/students/Rigo_Louie.jpg`,
              review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            },
            {
              name: `Mia Williams`,
              img: `/students/Mia_Williams.jpg`,
              review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            },
            
          ];
  return (
      <div className='w-3/4 m-auto'>
      <div className="mt-20 ">
      <Slider {...settings} >
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl space-x-4">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl  '>
              <img src={d.img} alt="" className="h-full w-44 rounded-full "/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default SliderNew
