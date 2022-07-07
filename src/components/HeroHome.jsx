import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "aos/dist/aos.css"


function HeroHome() {
  useEffect(() => {
    Aos.init({ duration: 10000});
  }, []);
  return (
    <div className= "bg-cover ml-auto  mx-auto w-full" style={{backgroundImage: `url(https://res.cloudinary.com/dng8o0y7y/image/upload/v1657186419/Landing-page/bg-png_zbf6c0.webp)` }}>
      <div className="grid align-middle md:grid-cols-2 max-w-6xl mx-auto my-10 pb-0 md:my-10 md:pb-0 ">
        <div data-aos="fade-right" data-aos-delay="300"  className="mt-15 flex flex-col justify-center items-center md:items-start w-full px-2 py-8 md: mt-0">
          <p className="hidden md:grid text-center text-gray-100 text-sm center px-5 ">Transform Everyday</p>
          <h1 className='text-center text-2xl md-text-7xl font-bold px-5 pt-3 md:text-3xl md:text-left'> Professional Workout Tracker</h1>
          <p className=' text-1xl px-5 text-center p-3 md:text-left'>For advancing your workout life is scattered across tracking, sharing and inspiring.Superwod bring it all together.</p>
          <a href="https://tally.so/r/w7RoMa" className='btn-sm font-bold w-2/3  mt-5 px-1 justify-self-center drop-shadow-xl  rounded-lg hover:scale-110 md:px-10 md:ml-5  md:w-1/2 md:font-bold  bg-gray-50 '><button >LET'S GO</button></a>
        </div>
        <div className='flex flex-cols-2'>
          <div data-aos="fade-left" data-aos-delay="300" className="flex-auto mx-auto ml-5 w-2/5 md:pt-5 md:w-32 md:object-bottom ">
            <div className='w-full h-full pt-5' >
              <div className=" relative bg-cover ml-5 p-2 md:p-2" style={{backgroundImage: `url(https://res.cloudinary.com/dng8o0y7y/image/upload/v1657186419/Landing-page/iPhone-12_lyyvl2.webp)` }}>
                  <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showIndicators={false} showArrows={false} interval={2000}>
                    <img className="" src="https://res.cloudinary.com/dng8o0y7y/image/upload/v1657186419/Landing-page/herophone_1_hwz3iz.webp" />
                    <img className=""src="https://res.cloudinary.com/dng8o0y7y/image/upload/v1657186419/Landing-page/herophone_2_qspslp.webp" />
                    <img className="" src="https://res.cloudinary.com/dng8o0y7y/image/upload/v1657186419/Landing-page/herophone_3_kp05ti.webp" />
                  </Carousel>
              </div>
            </div>
            {/* <img  src={PhoneImage} alt=""  /> */}
          </div>
          <div data-aos="fade-left" data-aos-delay="300" className="flex-auto pb-0 w-3/5 md:w-64 md:object-bottom">
            <img className='md:object-bottom' src="https://res.cloudinary.com/dng8o0y7y/image/upload/v1657186419/Landing-page/hero_figure_nqdg25.webp" alt="/" />
            {/* <changeImage /> */}
          </div>  
        </div>
      </div>
    </div>

  );
}

export default HeroHome;