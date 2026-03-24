import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ThemeIITRoorkee from "../../../public/ThemeIITRoorkee.jpg";
// import ThemeX from "../../../public/ThemeX.png";
import ThemeIITRoorkee from "../../assets/ThemeIITRoorkee.jpg";
import ThemeX from "../../assets/ThemeX.png";

gsap.registerPlugin(ScrollTrigger);

const TextCard = ({ title, text }) => {
  return (
    <div
      className="
      h-full w-full
      relative overflow-hidden
      bg-gradient-to-br from-[#5a0a0a] to-[#e60808]
      rounded-[2rem]
      p-8 md:p-10 lg:p-12
      flex flex-col justify-center
      shadow-2xl shadow-red-900/20
    "
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="relative z-10">
        <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 tracking-wide font-serif">
          {title}
        </h2>
        <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed text-justify font-normal">
          {text}
        </p>
      </div>
    </div>
  );
};

const ImageCard = ({ src, alt }) => {
  return (
    <div className="h-full w-full rounded-[2rem] overflow-hidden relative shadow-2xl bg-neutral-900">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 hover:grayscale-0 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all duration-700"></div>
    </div>
  );
};

const LogoCard = () => {
  return (
    <div className="h-full w-full rounded-[2rem] overflow-hidden relative shadow-2xl bg-neutral-900 flex items-center justify-center">
      <img
        src={ThemeX}
        alt="TEDxIITRoorkee Logo"
        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all duration-700"></div>
    </div>
  );
};

export default function ThemeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set up matchMedia for responsive animations
      let mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (Screens 1024px and up) ---
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          ".gsap-card",
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".grid-container",
              start: "top 75%", // Triggers when the top of the grid hits 75% down the viewport
              toggleActions: "play none none none", // Plays once, doesn't reverse on scroll up (better UX)
            },
          },
        );
      });

      // --- MOBILE/TABLET ANIMATION (Screens under 1024px) ---
      mm.add("(max-width: 1023px)", () => {
        // Select all cards and animate them INDIVIDUALLY as they enter the screen
        const cards = gsap.utils.toArray(".gsap-card");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%", // Triggers individually for each card
                toggleActions: "play none none none",
              },
            },
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text1 =
    "TEDx IIT Roorkee is organized annually by the Entrepreneurship Cell. It provides a platform to foster dissemination of knowledge, innovation, and inspiration. The campus is inspired by thought-provoking talks, fresh ideas and diverse perspectives. The event embodies TED’s spirit- bringing together leading minds and shaping innovation.";

  const text2 =
    "Change doesn’t always roar in; sometimes, it drifts quietly, redefining the familiar and inspiring new directions. Zephyr of Change captures this gentle yet powerful spirit of transformation. This theme celebrates the beginning of change– the soft moments that lead to lasting impact. It is an invitation to embrace these winds of possibility, to think deeply, act boldly, and carry forward the calm power of transformation.";

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Added grid-container class for desktop ScrollTrigger */}
        <div className="grid-container grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {/* Added will-change-transform for hardware acceleration */}
          <div className="gsap-card will-change-transform lg:col-span-2 min-h-[320px] lg:h-[320px]">
            <TextCard title="TEDxIIT ROORKEE" text={text1} />
          </div>

          <div className="gsap-card will-change-transform lg:col-span-1 min-h-[320px] lg:h-[320px]">
            <ImageCard src={ThemeIITRoorkee} alt="IIT Roorkee Main Building" />
          </div>

          <div className="gsap-card will-change-transform lg:col-span-1 min-h-[320px] lg:h-[320px]">
            <LogoCard />
          </div>

          <div className="gsap-card will-change-transform lg:col-span-2 min-h-[320px] lg:h-[320px]">
            <TextCard title="ZEPHYR OF CHANGE" text={text2} />
          </div>
        </div>
      </div>
    </div>
  );
}
