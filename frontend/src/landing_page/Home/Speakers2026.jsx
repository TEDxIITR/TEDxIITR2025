import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Imports retained exactly as provided
import Frame from "/Speakers2024/Frame.webp";
import Sp1 from "/Speakers2024/Sp1.webp";
import Sp2 from "/Speakers2024/Sp2.webp";
import Sp3 from "/Speakers2024/Sp3.webp";
import Sp4 from "/Speakers2024/Sp4.webp";
import Sp5 from "/Speakers2024/Sp5.webp";
import Sp6 from "/Speakers2024/Sp6.webp";
import Sp_7 from "/Speakers2024/Sp7 (1).webp";
import Sp7 from "/Sp2019/Sp7.webp";
import Sp8 from "/Sp2019/Sp8.webp";
import Sp10 from "/Sp2019/Sp10.webp";
import Sp11 from "/Sp2019/Sp11.webp";
import Sp12 from "/Sp2019/Sp12.webp";
import Sp13 from "/Sp2017/Sp13.webp";
import Sp14 from "/Sp2017/Sp14.webp";
import Sp15 from "/Sp2017/Sp15.webp";
import Sp16 from "/Sp2017/Sp16.webp";
import Sp17 from "/Sp2017/Sp17.webp";
import Sp18 from "/Sp2017/Sp18.webp";
import Sp19 from "/Sp2017/Sp19.webp";
import Sp20 from "/Sp2016/Sp20.webp";
import Sp21 from "/Sp2016/Sp21.webp";
import Sp22 from "/Sp2016/Sp22.webp";
import Sp23 from "/Sp2016/Sp23.webp";
import Sp24 from "/Sp2016/Sp24.webp";
import Sp25 from "/Speakers2025/Sp25.webp";
import Sp26 from "/Speakers2025/Sp26.webp";
import Sp27 from "/Speakers2025/Sp27.webp";
import Sp28 from "/Speakers2025/Sp28.webp";
import Sp29 from "/Speakers2025/Sp29.webp";
import Sp30 from "/Speakers2025/Sp30.webp";
import Sp31 from "/Speakers2025/Sp31.webp";
import Pranay from "/Speakers2025/Pranay.webp";
import YashWardhan from "/Speakers2025/Yashwardhan.webp";
import Kirti from "/Speakers2025/Kirti.webp";
import Shekinah from "/Speakers2025/Shekinah.webp";

gsap.registerPlugin(ScrollTrigger);

const Speakers = () => {
  const [activeSection, setActiveSection] = useState(0);
  const mainRef = useRef(null);
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  // Data
  const speakers2025 = [
    { id: 1, name: "MOHIT TYAGI", image: Sp26 },
    { id: 2, name: "MANYA SINGH", image: Sp27 },
    { id: 3, name: "RAHUL CHAUDHARI", image: Sp31 },
    { id: 4, name: "PRANAY SHARMA", image: Pranay },
    { id: 5, name: "KIRTI", image: Kirti },
    { id: 6, name: "SHEKINAH MUKHIYA", image: Shekinah },
    { id: 7, name: "YASHWARDHAN SINGH", image: YashWardhan },
  ];
  const speakers2024 = [
    { id: 1, name: "M JAYAKUMAR", image: Sp1 },
    { id: 2, name: "SAURABH, MANISHA", image: Sp2 },
    { id: 3, name: "JAI MADAAN", image: Sp3 },
    { id: 4, name: "AMAN DHATTARWAL", image: Sp4 },
    { id: 5, name: "DHANANJAY JOSHI", image: Sp5 },
    { id: 6, name: "RAJEEV BHARWAN", image: Sp6 },
    { id: 7, name: "R SUDHIR", image: Sp7 },
  ];
  const speakers2019 = [
    { id: 1, name: "MANISH BEHL", image: Sp_7 },
    { id: 2, name: "JOSEPH RADHIK", image: Sp8 },
    { id: 4, name: "NAVNEET NAIR", image: Sp10 },
    { id: 5, name: "MAYA", image: Sp11 },
    { id: 6, name: "NARPATH RAMAN", image: Sp12 },
    { id: 7, name: "PRASHANT DHAWAN", image: Sp13 },
  ];
  const speakers2017 = [
    { id: 2, name: "SHARELL COOK", image: Sp14 },
    { id: 3, name: "SHARON PRABHAKAR", image: Sp15 },
    { id: 4, name: "BISTRITI PODDAR", image: Sp16 },
    { id: 5, name: "ANKUR WARIKOO", image: Sp17 },
    { id: 6, name: "SAUMITRA BHAT", image: Sp18 },
    { id: 7, name: "BIJESH AMIN", image: Sp19 },
  ];
  const speakers2016 = [
    { id: 1, name: "ANSHU MOR", image: Sp20 },
    { id: 2, name: "KDEORHH", image: Sp21 },
    { id: 3, name: "SUSHRUTI KRISHNA", image: Sp22 },
    { id: 4, name: "VIVEK ANGIHOTRI", image: Sp23 },
    { id: 5, name: "KIRAN MRINAL", image: Sp24 },
  ];

  const sections = [
    { year: "2025", speakers: speakers2025 },
    { year: "2024", speakers: speakers2024 },
    { year: "2019", speakers: speakers2019 },
    { year: "2017", speakers: speakers2017 },
    { year: "2016", speakers: speakers2016 },
  ];

  // Initial load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
          },
        },
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  // Animate grid cards when the year changes
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".speaker-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeSection]);

  const handleSectionClick = (index) => {
    if (activeSection !== index) {
      setActiveSection(index);
    }
  };

  return (
    <div
      ref={mainRef}
      className="w-full min-h-screen bg-black font-sans overflow-hidden py-16 px-6 lg:px-20"
    >
      {/* Inline styles for shimmer keyframe animation */}
      <style>{`
        @keyframes shimmerSlide {
          0%   { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(300%) skewX(-15deg); }
        }
        .speaker-card:hover .card-shimmer {
          animation: shimmerSlide 0.75s ease forwards;
        }
        .speaker-card .card-shimmer {
          animation: none;
        }

        @keyframes sweepIn {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .speaker-card:hover .card-topbar {
          animation: sweepIn 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .speaker-card .card-topbar {
          width: 0%;
        }

        @keyframes underlineExpand {
          from { width: 0%; opacity: 0; }
          to   { width: 100%; opacity: 1; }
        }
        .speaker-card:hover .card-underline {
          animation: underlineExpand 0.4s ease 0.15s forwards;
        }
        .speaker-card .card-underline {
          width: 0%;
          opacity: 0;
        }
      `}</style>

      {/* Header Section */}
      <div ref={headerRef} className="w-full flex justify-center mb-16">
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
          Meet Our Speakers
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10 lg:gap-16 lg:items-center">
        {/* Timeline Sidebar */}
        <div className="shrink-0 lg:w-20 flex lg:flex-col items-center justify-center overflow-x-auto lg:overflow-visible py-3 lg:py-0">
          {/* DESKTOP — vertical stack, size+opacity fade by distance */}
          <div className="hidden lg:flex flex-col items-center w-full">
            {sections.map((section, index) => {
              const dist = Math.abs(index - activeSection);
              const sizes = ["1.9rem", "1.3rem", "1rem", "0.8rem", "0.7rem"];
              const opacs = [1, 0.7, 0.38, 0.24, 0.16];
              const weights = [700, 600, 500, 400, 400];
              const isActive = index === activeSection;
              return (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handleSectionClick(index)}
                    className="cursor-pointer w-full text-center tracking-wider leading-none"
                    style={{
                      fontSize: sizes[Math.min(dist, 4)],
                      opacity: opacs[Math.min(dist, 4)],
                      fontWeight: weights[Math.min(dist, 4)],
                      color: isActive ? "#E62B1E" : "#ffffff",
                      transform: isActive ? "scale(1.06)" : "scale(1)",
                      transition: "all 0.38s cubic-bezier(0.34,1.2,0.64,1)",
                      padding: "3px 0",
                    }}
                  >
                    {section.year}
                  </button>
                  {index < sections.length - 1 && (
                    <div
                      style={{
                        width: "22px",
                        height: "1.5px",
                        margin: "10px auto",
                        borderRadius: "2px",
                        background:
                          index === activeSection || index + 1 === activeSection
                            ? "rgba(230,43,30,0.6)"
                            : "rgba(255,255,255,0.16)",
                        transition: "background 0.35s ease",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* MOBILE — horizontal row, same distance-based fade */}
          <div className="flex lg:hidden items-center overflow-x-auto pb-3 w-full border-b border-white/10">
            {sections.map((section, index) => {
              const dist = Math.abs(index - activeSection);
              const opacs = [1, 0.65, 0.38, 0.22, 0.15];
              const isActive = index === activeSection;
              return (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handleSectionClick(index)}
                    className="cursor-pointer shrink-0 tracking-wider"
                    style={{
                      color: isActive ? "#E62B1E" : "#ffffff",
                      opacity: opacs[Math.min(dist, 4)],
                      fontSize: isActive ? "1.2rem" : "0.9rem",
                      fontWeight: isActive ? 700 : 500,
                      transform: isActive ? "scale(1.06)" : "scale(1)",
                      transition: "all 0.35s ease",
                      padding: "0 10px",
                    }}
                  >
                    {section.year}
                  </button>
                  {index < sections.length - 1 && (
                    <div
                      style={{
                        width: "18px",
                        height: "1.5px",
                        flexShrink: 0,
                        borderRadius: "2px",
                        background:
                          index === activeSection || index + 1 === activeSection
                            ? "rgba(230,43,30,0.6)"
                            : "rgba(255,255,255,0.16)",
                        transition: "background 0.35s ease",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="flex-1" ref={gridRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections[activeSection].speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="speaker-card relative group w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-[#B21919] via-[#B21919] to-[#4C0B0B] cursor-pointer"
                style={{
                  transform: "translateY(0) scale(1)",
                  transition:
                    "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 1.5px #E62B1E, 0 20px 60px rgba(230,43,30,0.55), 0 8px 24px rgba(0,0,0,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.4)";
                }}
              >
                {/* ── Red sweep bar along the top ── */}
                <div
                // className="card-topbar absolute top-0 left-0 h-[3px] bg-[#E62B1E] z-40"
                // style={{ width: "0%" }}
                />

                {/* ── Watermark X ── */}
                <div className="absolute top-4 left-4 z-20 transition-all duration-400 group-hover:opacity-0 group-hover:scale-75">
                  <span className="text-white/80 font-serif text-3xl font-black italic select-none">
                    X
                  </span>
                </div>

                {/* ── Speaker Image ── */}
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover object-top mix-blend-normal z-10"
                  style={{
                    filter: "grayscale(100%) brightness(0.85)",
                    opacity: 0.92,
                    transform: "scale(1)",
                    transition:
                      "filter 0.55s ease, opacity 0.55s ease, transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(0%) brightness(1)";
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) brightness(0.85)";
                    e.currentTarget.style.opacity = "0.92";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />

                {/* ── Diagonal shimmer sweep ── */}
                <div
                  className="card-shimmer absolute inset-0 z-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                    width: "60%",
                    height: "100%",
                    transform: "translateX(-150%) skewX(-15deg)",
                  }}
                />

                {/* ── Red vignette tint on hover ── */}
                <div
                  className="absolute inset-0 z-15 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(230,43,30,0.22) 0%, transparent 70%)",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                />

                {/* ── Bottom text overlay ── */}
                <div
                  className="absolute bottom-0 left-0 w-full z-20 flex flex-col justify-end"
                  style={{
                    padding: "1.5rem",
                    paddingTop: "5rem",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
                    height: "100%",
                    transition: "padding-bottom 0.35s ease",
                  }}
                >
                  {/* Name */}
                  <h3
                    className="text-white text-xl lg:text-2xl font-bold leading-tight"
                    style={{
                      transform: "translateY(0)",
                      transition:
                        "transform 0.35s cubic-bezier(0.34,1.2,0.64,1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-3px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    {speaker.name}
                  </h3>

                  {/* Animated red underline */}
                  <div
                    className="card-underline h-[2px] bg-[#E62B1E] mt-2 mb-1 rounded-full"
                    style={{ width: "0%", opacity: 0 }}
                  />

                  {/* TEDx label */}
                  <p className="text-gray-300 text-sm font-medium tracking-widest transition-colors duration-300 group-hover:text-[#E62B1E]">
                    TEDxIITRoorkee
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
