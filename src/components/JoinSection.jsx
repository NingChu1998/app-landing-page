import React from 'react';



function CTA() {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 ">
        <div className="relative bg-cover max-w-6xl mx-auto px-4 pb-10 sm:px-6 " style={{backgroundImage: `url("https://res.cloudinary.com/dng8o0y7y/image/upload/v1657244321/Landing-page/accomplishment_nmax2d.webp")` }}>
          <section className="mx-auto container w-full py-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="font-mont md:text-3xl  font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
                      <h2>Start Your WOD Journey Now</h2>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <a href="https://tally.so/r/w7RoMa" id="cta_button">
                        <button  className="font-bold focus:outline-none focus:ring-2 focus:ring-offset-2  hover:opacity-90 w-48 h-12 text-lg text-black bg-yellow-100 rounded">
                          LET'S GO
                        </button>
                      </a>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
}

export default CTA;


