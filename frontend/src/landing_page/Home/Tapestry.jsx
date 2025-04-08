import React from "react";
import { useEffect, useRef, useState } from "react";
import X from "../../../public/Logos/X.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Tapestry = () => {
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        opacity: -1,
        x: -400,
      },
      {
        delay: 0.3,
        opacity: 1,
        duration: 1,
        x: 0,
      }
    );
    gsap.fromTo(
      imgRef.current,
      {
        opacity: -1,
        x: 400,
      },
      {
        duration: 1,
        delay: 0.3,
        opacity: 1,
        x: 0,
      }
    );
  }, []);

  return (
    <div className=" text-white flex flex-col md:flex-row justify-center items-center  gap-20  min-h-full md:px-16 md:pt-10 ">
      <div className="md:w-1/2 md:mb-0 md:pr-8" ref={contentRef}>
        <h1 className="text-5xl  md:text-7xl lg:text-8xl uppercase tracking-wider mb-6 font-[marcellus]">
          <p className="mb-8">Tapestry</p>
          <p>of Time</p>
        </h1>

        <p className="text-lg md:text-xl lg:text-1xl mb-8 max-w-[600px]">
          Life is a delicate wave of moments—threads of memories, choices, and
          experiences that shape who we are.
        </p>

        <div className="flex flex-row gap-4">
          <a href="https://forms.gle/EMXvZbQt1qQaiH7EA" target="_blank">
            <button className=" w-[8rem] py-1 border-2 cursor-pointer bg-red-600 border-red-600 rounded-md  hover:bg-black hover:border-black hover:text-white transition-all duration-300 text-lg">
              Buy Ticket
            </button>
          </a>

          <a href="https://forms.gle/UW98dUDGD8VBSiHAA" target="_blank">
            <button className=" w-[8rem] py-1 border-2 cursor-pointer border-white rounded-md hover:bg-white hover:text-black transition-all duration-300 text-lg">
              Buy T-Shirt
            </button>
          </a>
        </div>
      </div>

      <div>
        <img
          ref={imgRef}
          src={X}
          alt="Tapestry visual"
          className="w-[30rem] md:max-w-[1000px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Tapestry;
