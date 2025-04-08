import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Tshirt from "../../../public/t-shirt.svg";
import tickets from "../../../public/tickets.svg";
import tickets2 from "../../../public/tickets2.png";
import Frame from "../../../public/Speakers2024/Frame.png";

export default function TedxBooking() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070707] relative overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 opacity-20 z-0">
        <img
          src={Frame}
          alt="Background contour lines"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto py-12 relative z-10 ">
        <div className="flex flex-col lg:flex-row gap-6 mx-10 md:mx-0">
          <div className="lg:w-1/3">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              BOOK NOW
            </h1>
            <p className="text-white/90 text-lg">
              Get ready for an unforgettable TEDx experience! Secure your seat
              today and enjoy premium access to thought-provoking talks,
              networking opportunities, and exclusive TEDx merchandise. Don't
              miss your chance to be part of something extraordinary.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:w-4/5">
            <div className="bg-gradient-to-t from-red-700 to-red-500 overflow-hidden lg:w-1/3 rounded-lg">
              <div className="p-6 h-[33rem] flex flex-col justify-between ">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Premium Bundle
                  </h2>
                  <div className="w-full h-0.5 bg-white mb-6"></div>
                </div>

                <div className="flex justify-center ">
                  <div className="flex items-center gap-2">
                    <img
                      src={tickets2}
                      alt="Ticket"
                      width="100"
                      height="100"
                      className="object-contain"
                    />
                    <span className="text-white text-3xl font-bold">+</span>
                    <img
                      src={Tshirt}
                      alt="T-Shirt"
                      width="100"
                      height="100"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="/80 p-4 rounded mb-6">
                  <h3 className="text-white font-medium mb-3">
                    Bundle includes :-
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2205_1395)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.20023 15.8731C4.00055 15.8731 0.53125 12.4038 0.53125 8.20414C0.53125 4.00446 3.99466 0.535156 8.19434 0.535156C12.394 0.535156 15.8692 4.00446 15.8692 8.20414C15.8692 12.4038 12.3999 15.8731 8.20023 15.8731ZM7.25878 12.0558C7.47672 12.0558 7.6652 11.9556 7.80656 11.7377L11.7647 5.53535C11.8531 5.40577 11.9297 5.24674 11.9297 5.10537C11.9297 4.79319 11.6528 4.59882 11.3642 4.59882C11.1934 4.59882 11.0226 4.69895 10.893 4.89922L7.22933 10.7246L5.27969 8.28017C5.12654 8.08579 4.96751 8.01511 4.77902 8.01511C4.49041 8.01511 4.24891 8.24483 4.24891 8.557C4.24891 8.70426 4.30781 8.86329 4.40794 8.98699L6.68154 11.7436C6.86414 11.9674 7.04084 12.0558 7.25878 12.0558Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2205_1395">
                            <rect
                              width="15.338"
                              height="15.338"
                              fill="white"
                              transform="translate(0.535156 0.533203)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-white text-sm">
                        Full-day TEDx Ticket (Access to all sessions)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2205_1395)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.20023 15.8731C4.00055 15.8731 0.53125 12.4038 0.53125 8.20414C0.53125 4.00446 3.99466 0.535156 8.19434 0.535156C12.394 0.535156 15.8692 4.00446 15.8692 8.20414C15.8692 12.4038 12.3999 15.8731 8.20023 15.8731ZM7.25878 12.0558C7.47672 12.0558 7.6652 11.9556 7.80656 11.7377L11.7647 5.53535C11.8531 5.40577 11.9297 5.24674 11.9297 5.10537C11.9297 4.79319 11.6528 4.59882 11.3642 4.59882C11.1934 4.59882 11.0226 4.69895 10.893 4.89922L7.22933 10.7246L5.27969 8.28017C5.12654 8.08579 4.96751 8.01511 4.77902 8.01511C4.49041 8.01511 4.24891 8.24483 4.24891 8.557C4.24891 8.70426 4.30781 8.86329 4.40794 8.98699L6.68154 11.7436C6.86414 11.9674 7.04084 12.0558 7.25878 12.0558Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2205_1395">
                            <rect
                              width="15.338"
                              height="15.338"
                              fill="white"
                              transform="translate(0.535156 0.533203)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-white text-sm">
                        Exclusive TEDx T-Shirt (Limited edition)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">
                      Bundle Price -
                    </span>
                    <span className="text-white/70 line-through text-sm line-through">
                      ₹1,198
                    </span>
                    <span className="text-white font-bold">₹999</span>
                    <span className="text-white bg-white/20 px-2 py-0.5 rounded text-xs text-yellow-200">
                      16% off
                    </span>
                  </div>
                </div>

                <a
                  href="https://forms.gle/EMXvZbQt1qQaiH7EA"
                  className="relative w-[60%] mx-auto bg-[#ff0000] text-white py-3 flex items-center justify-center gap-2 rounded overflow-hidden group transition-colors cursor-pointer"
                  target="_blank"
                >
                  <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <FaLongArrowAltRight />
                    <span className="font-medium">BUY NOW</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-t from-red-600 via-white/90 to-white overflow-hidden lg:w-1/3 rounded-lg  h-[33rem] flex flex-col">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#ed2024] mb-2 text-center">
                    TEDx Merchandise
                  </h2>
                  <div className="w-full h-0.5 bg-red-500 mb-6"></div>
                </div>

                <div className="flex justify-center mb-6">
                  <img
                    src={Tshirt}
                    alt="TEDx T-Shirts"
                    width="200"
                    height="200"
                    className="object-contain"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className=" bg-gradient-to-t from-red-700 to-red-500 rounded p-3 text-center">
                    <div className="text-white font-medium text-sm">Buy 1</div>
                    <div className="text-white/80 text-xs line-through">
                      ₹599
                    </div>
                    <div className="text-white/80 text-xs">
                      ₹499{" "}
                      <span className="text-yellow-300 font-bold">16% off</span>{" "}
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-red-700 to-red-500 rounded p-3 text-center">
                    <div className="text-white font-medium text-sm">Buy 02</div>
                    <div className="text-white/80 text-xs line-through">
                      ₹1198
                    </div>
                    <div className="text-white/80 text-xs">
                      ₹800{" "}
                      <span className="text-yellow-300 font-bold">25% off</span>{" "}
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-red-700 to-red-500 rounded p-3 text-center">
                    <div className="text-white font-medium text-sm">Buy 03</div>
                    <div className="text-white/80 text-xs line-through">
                      ₹1797
                    </div>
                    <div className="text-white/80 text-xs">
                      ₹1299{" "}
                      <span className="text-yellow-300 font-bold">27% off</span>{" "}
                    </div>
                  </div>
                </div>

                <a
                  href="https://forms.gle/UW98dUDGD8VBSiHAA"
                  className="relative w-[60%] mx-auto bg-[#ff0000] text-white py-3 flex items-center justify-center gap-2 rounded overflow-hidden group transition-colors cursor-pointer"
                  target="_blank"
                >
                  <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <FaLongArrowAltRight />
                    <span className="font-medium">BUY NOW</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-t from-red-700 to-red-500 overflow-hidden lg:w-1/3 rounded-lg  h-[33rem]  flex flex-col">
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2 text-center">
                    Get Ticket
                  </h2>
                  <div className="w-full h-0.5 bg-white mb-6"></div>
                </div>

                <div className="flex justify-center mb-6">
                  <img
                    src={tickets}
                    alt="TEDx Tickets"
                    width="200"
                    height="200"
                    className="object-contain"
                  />
                </div>

                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2205_1395)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.20023 15.8731C4.00055 15.8731 0.53125 12.4038 0.53125 8.20414C0.53125 4.00446 3.99466 0.535156 8.19434 0.535156C12.394 0.535156 15.8692 4.00446 15.8692 8.20414C15.8692 12.4038 12.3999 15.8731 8.20023 15.8731ZM7.25878 12.0558C7.47672 12.0558 7.6652 11.9556 7.80656 11.7377L11.7647 5.53535C11.8531 5.40577 11.9297 5.24674 11.9297 5.10537C11.9297 4.79319 11.6528 4.59882 11.3642 4.59882C11.1934 4.59882 11.0226 4.69895 10.893 4.89922L7.22933 10.7246L5.27969 8.28017C5.12654 8.08579 4.96751 8.01511 4.77902 8.01511C4.49041 8.01511 4.24891 8.24483 4.24891 8.557C4.24891 8.70426 4.30781 8.86329 4.40794 8.98699L6.68154 11.7436C6.86414 11.9674 7.04084 12.0558 7.25878 12.0558Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2205_1395">
                          <rect
                            width="15.338"
                            height="15.338"
                            fill="white"
                            transform="translate(0.535156 0.533203)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-white text-sm">
                      Full-day TEDx Ticket (Access to all sessions)
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">
                      Bundle Price -
                    </span>
                    <span className="text-white/70 line-through text-sm">
                      ₹599
                    </span>
                    <span className="text-white font-bold">₹499</span>

                    <span className="text-white bg-white/20 px-2 py-0.5 rounded text-xs text-yellow-200">
                      16% off
                    </span>
                  </div>
                </div>

                <a
                  href="https://forms.gle/EMXvZbQt1qQaiH7EA"
                  className="relative w-[60%] mx-auto bg-[#ff0000] text-white py-3 flex items-center justify-center gap-2 rounded overflow-hidden group transition-colors cursor-pointer"
                  target="_blank"
                >
                  <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <FaLongArrowAltRight />
                    <span className="font-medium">BUY NOW</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
