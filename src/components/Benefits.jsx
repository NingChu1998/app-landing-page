import React from 'react';
// import FastIcon from '../images/benefit/fast.svg';
// import InternetIcon from '../images/benefit/internet.svg';
// import SmartIcon from '../images/benefit/smart.svg';

function Benefits() {
  return (
    <section className="mb-10">
      <div data-aos="fade-up" data-aos-delay="700" className="relative max-w-6xl  mx-auto px-4 sm:px-6  ">
        <div className="">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center md:pb-5">
            <h2 className="h4">SuperWOD empowers everyone</h2>
          </div>
          {/* Items */}
          <div className=" max-w-sm mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none ">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* <img src={FastIcon} className="App-logo h-10 " alt="fast-icon" /> */}
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 6.5L20.5 9L36 24.5L20.5 41L23.5 43.5L24 43L41.5 24.5L23 6.5Z" fill="#424242"/>
                  <path d="M11 43L8 40L24 24.5L8 9L11 6L29.5 24.5L11 43Z" fill="#424242"/>
              </svg>
              <p className="text-lg font-bold leading-snug tracking-tight m-1">Fast</p>
              <p className="text-gray-500 text-center">Edit, manage, and update your workout data quickly.</p>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* <img src={SmartIcon} className="App-logo h-10" alt="smart-icon" /> */}
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.5 42.7929L31.7929 45.5H13.2071L10.5 42.7929V7.18103L12.7342 4.5H31.7929L34.5 7.20711V13.5H31.5V8V7.5H31H30H15H14H13.5V8V42V42.5H14H15H29.5H31H31.5V42V35.5H34.5V42.7929Z" fill="#424242" stroke="#424242"/>
                  <circle cx="22.5" cy="37.5" r="1.5" fill="#424242"/>
                  <path d="M26.9091 27.9032L27 17H41V27.9032L38.2273 30.5H29.5L26.9091 27.9032Z" stroke="#424242" stroke-width="2.5"/>
                  <path d="M36.5 22H32H31V22.5V24.5L31.5 25H36L36.5 24.5V22.5V22Z" fill="#424242"/>
                  <path d="M32 22H36.5M36.5 22H31V22.5V24.5L31.5 25H36L36.5 24.5V22.5V22Z" stroke="#424242"/>
              </svg>
              <h4 className="text-lg font-bold leading-snug tracking-tight m-1">Smart</h4>
              <p className="text-gray-500 text-center">Complete workout movement and patterns tracking  efficiently.</p>
            </div>
            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* <img src={InternetIcon} className="App-logo h-10" alt="internet-icon" /> */}
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 6L18 20V32.4286L25 43" stroke="#424242" stroke-width="3"/>
                  <path d="M26 6L33 19V32.5L26 43" stroke="#424242" stroke-width="3"/>
                  <path d="M44.5 25C44.5 35.1826 36.0285 43.5 25.5 43.5C14.9715 43.5 6.5 35.1826 6.5 25C6.5 14.8174 14.9715 6.5 25.5 6.5C36.0285 6.5 44.5 14.8174 44.5 25Z" stroke="#424242" stroke-width="3"/>
                  <path d="M44 20L8 20" stroke="#424242" stroke-width="3"/>
                  <path d="M43 32L9 32" stroke="#424242" stroke-width="3"/>
              </svg>
              <h5 className="text-lg font-bold leading-snug tracking-tight m-1">Social</h5>
              <p className="text-gray-500 text-center">Get inspired and connected with workout buddies around the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
