import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const tiers = [
  
  {
    title: 'Workout Performance',
    desc: 'Do you understand your workout patterns?How do you know what things you have to  improve?Our Progression tracking show  your need and guide you to be a better self.',
    image_desktop: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243585/Landing-page/Performance_ucs1uo.webp",
    image_mobile: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243585/Landing-page/Performance-2_noag5c.webp",
    slideId: 'item1',
    dotId: '#workoutperformance',
    image_position: 'right',
  },
  {
    title: 'Workout Tracking',
    desc: 'Do you remeber what movements you did and how many weights you lift last time?WOD Squad can make you stay on top of your fitness goals and stay motivated to keep working out!',
    image_desktop:"https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243585/Landing-page/wod_tracking_drqgjm.webp",
    image_mobile: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243585/Landing-page/wod_tracking-2_uh9v1r.webp",
    slideId: 'item2',
    dotId: '#workouttracking',
    image_position: 'left',
  },
  {
    title: 'Social Network',
    desc: "Connect with other fitness enthusiasts around the world, you're bound to find others who share your interests and can help motivate you to reach your fitness goals.",
    image_desktop: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/wod_social_ipnwrn.webp",
    image_mobile: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/wod_social-2_qonzar.webp",
    slideId: 'item3',
    dotId: '#socialnetwork',
    image_position: 'right',
  },
  {
    title: 'Publish Your WOD',
    desc: "Looking to stay on top of your fitness game?Allows you to see any workout in advance, so you can always be in the know. Plus, it's a great way to stay motivated and inspired by.",
    image_desktop: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/Publish_chy4wv.webp",
    image_mobile: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/Publish-2_wdfkmf.webp",
    slideId: 'item4',
    dotId: '#publishwod',
    image_position: 'left',
  },
  {
    title: 'TV Module',
    desc: 'QRcode Check-in, Realtime Leaderboard, Timer, Resize easily and Remote Control make your gym more fun and mondern.',
    image_desktop: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/TV_trhppl.webp",
    image_mobile: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/TV_trhppl.webp",
    slideId: 'item5',
    dotId: '#tvmodule',
    image_position: 'right',
  },
  {
    title: 'Workout Editor',
    desc: "Using the latest NLP technology, the Workout Editor can help you build a custom workout quickly and easily, so you can get back to your busy life.",
    image_desktop:"https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/mac-2_hqn6q6.webp",
    image_mobile: "https://res.cloudinary.com/dng8o0y7y/image/upload/v1657243584/Landing-page/mac-2_hqn6q6.webp",
    slideId: 'item6',
    dotId: '#workouteditor',
    image_position: 'left',
  },
]

function Features() {


  return (
    // <div className="bg-cover ml-auto h-full w-full  mx-auto scrollbar-hide carousel carousel-center   md:carousel-vertical "  >
    <div className="bg-cover ml-auto  w-full  mx-auto scrollbar-hide carousel carousel-center   md:carousel-vertical" >
      {tiers.map((tier) => (
        <div key={tier.title} id={tier.dotId} className='carousel-item mx-auto center' >
        {/* <div key={tier.title} id={tier.slideId} className='carousel-item mx-auto center' > */}
          <div  className="grid  md:grid-cols-2  mx-auto  max-w-sm md:max-w-6xl my-10 pb-0 md:pb-0">
            {/* Text Section */}
            <div data-aos="zoom-in" data-aos-delay="100" className={" flex flex-col justify-center md:items-start w-full px-10 md:mt-0" + `
                ${tier.image_position === "left" ? "md:order-last" : "md:order-first"} `}>
              <h1 className='text-2xl md-text-7xl font-bold px-5 mb-3 md:text-3xl text-center  md:text-start'> {tier.title}</h1>
              <p className='text-1xl px-5 text-center md:text-left '>{tier.desc}
              </p>
            </div>
            {/* Images */}
            <div data-aos="zoom-in" data-aos-delay="100" key={tier.title} className="flex flex-col justify-center  w-full px-2 py-5 md: mt-0 object-center order-first">
              <div className="flex-auto hidden md:grid center  md:pt-10 md:w-200  ">
                <img className='w-30'  src={tier.image_desktop} alt="" />
                {/* <img className='w-full h-full px-6 md:hidden' src={tier.image_mobile} alt="" /> */}
              </div>
              <div className="flex-auto center md:hidden md:pt-10 md:w-200  ">
                <img className='w-full h-full px-6 ' src={tier.image_mobile} alt="" />
              </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <ul className="flex flex-row center mt-10 justify-center gap-5  md:hidden ">
              <a href="#item1"><li className={"rounded-full h-3 w-3" + ` ${tier.slideId === 'item1' ? "bg-blue-100" : "bg-black"} `}></li></a>
              <a href="#item2"><li className={"rounded-full h-3 w-3" + ` ${tier.slideId === 'item2' ? "bg-blue-100" : "bg-black"} `}></li></a>
              <a href="#item3"><li className={"rounded-full h-3 w-3" + ` ${tier.slideId === 'item3' ? "bg-blue-100" : "bg-black"} `}></li></a>
              <a href="#item4"><li className={"rounded-full h-3 w-3" + ` ${tier.slideId === 'item4' ? "bg-blue-100" : "bg-black"} `}></li></a>
              <a href="#item5"><li className={"rounded-full h-3 w-3" + ` ${tier.slideId === 'item5' ? "bg-blue-100" : "bg-black"} `}></li></a>
              <a href="#item6"><li className={"rounded-full h-3 w-3" + ` ${tier.slideId === 'item6' ? "bg-blue-100" : "bg-black"} `}></li></a>
            </ul>
          </div>
        </div>
      ))}
    </div>  
  );
}

export default Features;