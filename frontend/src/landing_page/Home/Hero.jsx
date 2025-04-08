import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect, useRef } from "react";
import Theme from "../../../public/Videos/Theme.webm";
import { IoVolumeMute } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const [sound, setSound] = useState(true);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      const isMuted = videoRef.current.muted;
      videoRef.current.muted = !isMuted;
      setSound(!isMuted);
    }
  };
  const themeRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      themeRef.current.querySelector("h1"),
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: themeRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      themeRef.current.querySelector(".theme-content"),
      {
        opacity: 0,
        x: -60,
        delay: 1,
        duration: 2,
        ease: "power3.out",
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: themeRef.current,
          start: "top 60%",
        },
      }
    );
    gsap.fromTo(
      themeRef.current.querySelector(".video-box"),
      {
        opacity: 0,
        x: 60,
        delay: 1,
        ease: "power3.out",
        duration: 2,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: themeRef.current,
          start: "top 60%",
        },
      }
    );
    gsap.fromTo(
      aboutRef.current.querySelector("h1"),
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      aboutRef.current.querySelector("p"),
      {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <>
      <main className="bg-[#0e0e0e] min-h-screen text-white overflow-hidden lg:pl-10 lg:pr-10">
        <section
          ref={themeRef}
          className="container mx-auto px-4 pt-20 relative"
        >
          <h1
            className="text-[#d9d9d9] text-7xl  md:text-7xl lg:text-8xl text-center mb-16  font-passion font-extrabold leading-normal"
            style={{
              background:
                "linear-gradient(180deg, rgba(110, 110, 110, 0.46) 46.23%, rgba(212, 212, 212, 0.00) 90.52%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "10rem",
            }}
          >
            Theme
          </h1>
          {/* grid md:grid-cols-2 gap-8 items-center */}
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-20">
            <div className="theme-content max-w-2xl">
              <p className="text-sm md:text-base leading-relaxed">
                TEDxIITRoorkee is organized by a group of enthusiasts who form a
                part of the Entrepreneurship Cell IIT Roorkee. The spirit of TED
                aligns closely with the primary aspiration of the E-CELL, which
                is to foster the dissemination of knowledge, innovation, and
                inspiration. Since its inception in 2010, TEDx IITRoorkee has
                now become an annual event, playing host to a multitude of
                speakers from various walks of life. TEDxIITRoorkee boasts of an
                active following online, through its website and on various
                social media channels. This year, it's coming back on April
                20th, 2025.
              </p>
            </div>

            <div className="relative video-box bg-white p-4 flex  h-[300px] md:w-[40rem]">
              <video
                ref={videoRef}
                src={Theme}
                autoPlay
                loop
                muted={sound}
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="relative z-10 flex items-center left-10 bottom-22 justify-center h-screen">
                <button
                  onClick={handlePlayVideo}
                  className="bg-black hover:bg-red-700 transition-all duration-300 bg-opacity-50 text-white px-4 py-2 rounded hover:scale-1.5 absolute right-0 cursor-pointer tooltip"
                  data-tip={`${sound ? "sound" : "Mute"}`}
                >
                  {sound ? <VscUnmute /> : <IoVolumeMute />}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-32 mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="815"
              viewBox="0 0 1440 815"
              fill="none"
            >
              <g filter="url(#filter0_d_1976_1020)">
                <path
                  d="M0 107C0 107 352.5 -8.99998 720 107C1087.5 223 1440 107 1440 107V815H0V107Z"
                  fill="#0E0E0E"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1976_1020"
                  x="-50"
                  y="0.444458"
                  width="1540"
                  height="859.556"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-5" />
                  <feGaussianBlur stdDeviation="25" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1976_1020"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1976_1020"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </section>

        <section
          ref={aboutRef}
          className="container mx-auto px-4 pe-10 relative flex flex-col md:items-start"
        >
          <h1
            className="text-[#d9d9d9] text-7xl  md:text-7xl lg:text-8xl text-center mb-16  font-passion font-extrabold leading-normal"
            style={{
              background:
                "linear-gradient(180deg, rgba(110, 110, 110, 0.46) 46.23%, rgba(212, 212, 212, 0.00) 90.52%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "10rem",
            }}
          >
            About Us
          </h1>

          <div className="">
            <p className="text-sm md:text-base leading-relaxed mb-20 md:w-[90%]">
              TEDxIITRoorkee is organized by a group of enthusiasts who form a
              part of the Entrepreneurship Cell IIT Roorkee. The spirit of TED
              aligns closely with the primary aspiration of the E-CELL, which is
              to foster the dissemination of knowledge, innovation, and
              inspiration. Since its inception in 2010, TEDx IITRoorkee has now
              become an annual event, playing host to a multitude of speakers
              from various walks of life. TEDxIITRoorkee boasts of an active
              following online, through its website and on various social media
              channels. This year, it's coming back on April 20th, 2025.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
