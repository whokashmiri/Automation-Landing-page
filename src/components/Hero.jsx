// File: src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { annotate } from 'rough-notation';

const Hero = () => {
  const businessRef = useRef(null);

  useEffect(() => {
    if (businessRef.current) {
      const annotation = annotate(businessRef.current, {
        type: 'circle',
        color: '#d9ff00',
        padding: 8,
        strokeWidth: 3,
        animationDuration: 800,
      });
      annotation.show();
    }
  }, []);

  return (
    <>
      <section
        className="min-h-[130vh] flex flex-col justify-center text-white m-6 rounded-2xl px-6 pt-10 pb-16"
        style={{
          background: 'linear-gradient(to top, #b2b2b2 20%, #000000 70% , #0f0f0f 80%)',
        }}
      >
        <Navbar />
        <div className="mx-auto text-start">
          <h1
            className="font-extrabold mt-16 text-white tracking-tighter w-full leading-[5.5rem]"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800,
            }}
          >
            <span className="block text-9xl text-[#d3d3d3]">Automation That </span>
            <span className="block text-9xl text-[#cccccc]">
              Drives <span ref={businessRef}>Business</span>
            </span>
            <span className="block text-9xl text-[#2e1e1e]">Performance</span>
          </h1>

          <p
            className="text-black mt-6 text-xl"
            style={{
              fontFamily: '"Inter", sans-serif',
            }}
          >
            We'll pump your company with AI. As a leading AI automation agency <br />
            with 03 years of experience, we deliver top results.
          </p>

          <div className="mt-8 flex justify-start items-start gap-4">
            <button className="bg-[#d9ff00] text-black font-semibold px-8 py-4 rounded-md hover:bg-[#c0e500] hover:scale-95 transition duration-300">
              Subscribe now
            </button>
            <button className=" text-black font-semibold px-8 py-4 rounded-md hover:bg-[#a6a7a1] hover:scale-95 transition duration-300">
              Our services
            </button>

 {/* <div className="flex justify-center items-start gap-2 mt-6 text-sm text-white opacity-80"> */}
            <span className='' style={{fontFamily: '"Inter", sans-serif',}}>Loved by founders <br /> worldwide</span>
            <div className="flex -space-x-2">
              <img src="https://images.pexels.com/photos/30627673/pexels-photo-30627673.jpeg" alt="founder" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://images.pexels.com/photos/5416866/pexels-photo-5416866.jpeg" alt="founder" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://images.pexels.com/photos/15788919/pexels-photo-15788919.jpeg" alt="founder" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://images.pexels.com/photos/13525392/pexels-photo-13525392.jpeg" alt="founder" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
          </div>

          {/* </div> */}

         
        </div>
      </section>
    </>
  );
};

export default Hero;
