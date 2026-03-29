import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function pad(n) {
  return String(n).padStart(2, "0");
}

function computeTimeParts(target) {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
}

function FlipUnit({ value, label }) {
  const prev = useRef(value);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    if (value !== current) {
      prev.current = current;
      setCurrent(value);
    }
  }, [value, current]);

  return (
    <div className="flex flex-col items-center group flex-shrink-0">
      {" "}
      <div className="relative z-20 w-20 h-28 md:w-40 md:h-52 lg:w-56 lg:h-72 xl:w-70 xl:h-80 [perspective:1000px] bg-transparent">
        {" "}
        <div className="relative w-full h-full flex flex-col rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {" "}
          <div className="flex-grow bg-gradient-to-b from-neutral-800 from-54% to-neutral-700 to-54% flex items-center justify-center relative border-b border-black/30">
            {" "}
            <div className="font-bold text-white leading-none tracking-tighter text-4xl md:text-8xl lg:text-9xl xl:text-[10rem] z-10">
              {" "}
              {current}{" "}
            </div>
            <AnimatePresence mode="popLayout">
              {current !== prev.current && (
                <motion.div
                  key={prev.current}
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: -180 }}
                  exit={{ rotateX: -180, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                  className="absolute inset-0 bg-gradient-to-b from-neutral-800 from-50% to-neutral-700 to-50% flex items-center justify-center [backface-visibility:hidden] z-20 origin-bottom"
                >
                  <div
                    className="font-bold text-white leading-none tracking-tighter
                text-4xl 
                md:text-8xl 
                lg:text-9xl 
                xl:text-[10rem]"
                  >
                    {prev.current}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Side Hinges */}
            <div className="absolute top-7/13 left-0 -translate-y-1/2 w-1 h-2 md:w-1.5 md:h-4 bg-neutral-900 bg-white rounded-r-sm z-30 opacity-80"></div>
            <div className="absolute top-7/13 right-0 -translate-y-1/2 w-1 h-2 md:w-1.5 md:h-4 bg-neutral-900  bg-white rounded-l-sm z-30 opacity-80"></div>
            {/* Centered Partition Line */}
            <div className="absolute top-7/13 left-0 -translate-y-1/2 w-full h-[2px] bg-black/70 z-20 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
          </div>
          <div
            className="bg-red-600 flex items-center justify-center z-20 border-t border-red-700
        h-4
        md:h-8 
        lg:h-12
        xl:h-12"
          >
            <span
              className="text-white font-bold uppercase tracking-[0.2em]
          text-[0.5rem] 
          md:text-xs 
          lg:text-sm 
          xl:text-base"
            >
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CountDown() {
  const defaultTarget = new Date("2026-04-05T00:00:00+05:30").getTime();
  const [target] = useState(defaultTarget);
  const [time, setTime] = useState(() => computeTimeParts(target));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(computeTimeParts(target));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="h-[20rem] lg:min-h-screen bg-black flex flex-col justify-center items-center overflow-hidden">
      {" "}
      {/* Increased mobile padding (px-8) */}
      <div className="w-full px-8 sm:px-12 md:px-12 lg:px-16 xl:px-24 max-w-[1920px]">
        {" "}
        <div className="mb-6 sm:mb-8 md:mb-16 lg:mb-20 text-center xl:text-left px-2 sm:px-4">
          <h2
            className="text-white font-bold tracking-wide mb-1 sm:mb-2
text-sm
sm:text-base
md:text-2xl
lg:text-3xl
xl:text-4xl"
          >
            TEDxIITRoorkee <span className="text-red-600">2026</span>
          </h2>

          <h1
            className="text-white font-bold tracking-wide
text-3xl
sm:text-4xl
md:text-6xl
lg:text-7xl
xl:text-7xl
mt-1 sm:mt-2 md:mt-4"
          >
            COMING SOON....
          </h1>
        </div>
        <div className="relative w-full flex justify-center items-center px-4 md:px-0">
          <div
            className="absolute left-0 w-full border-t-2 border-dashed border-neutral-600/40 z-0
        top-[35%]
        md:top-[40%]
        lg:top-[45%]
      "
          ></div>

          {/* Reduced mobile gap to gap-2 to accommodate the wider padding without overflowing */}
          <div
            className="flex flex-row flex-nowrap items-center justify-center 
        gap-2
        sm:gap-4
        md:gap-8 
        lg:gap-12 
        xl:gap-16
        w-full z-10"
          >
            <FlipUnit value={pad(time.days)} label="DAYS" />
            <FlipUnit value={pad(time.hours)} label="HOURS" />
            <FlipUnit value={pad(time.minutes)} label="MINUTES" />
            <FlipUnit value={pad(time.seconds)} label="SECONDS" />
          </div>
        </div>
      </div>
    </div>
  );
}
