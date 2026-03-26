import React from "react";
import { FaRegCalendarAlt, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import tickets from "/tickets.webp";
import Frame from "/Speakers2024/Frame.webp";

// Reusable Ticket Component
const TicketCard = ({ leftTitle, leftImage, locationText }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-gradient-to-b from-[#fdfdfd] to-[#e0e0e0] rounded-xl overflow-hidden shadow-2xl mb-10 text-black">
      {/* Left Section (Stub) */}
      <div className="w-full md:w-1/3 p-6 flex flex-col items-center justify-center relative border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-300">
        {/* Dedicated space for ticket image */}
        <div className="w-32 h-24 mb-4 flex items-center justify-center overflow-hidden">
          {leftImage ? (
            <img
              src={leftImage}
              alt="Ticket visual"
              className="object-contain w-full h-full drop-shadow-md hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
              Image Space
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3">{leftTitle}</h3>
        {/* <p className="text-sm text-gray-600 mb-1">Lorem Ipsum</p>
        <p className="text-sm text-gray-600 mb-5">Lorem Ipsum</p> */}
        <p className="text-2xl font-bold text-[#E60000]">Rs. 700</p>
      </div>

      {/* CSS Cutout Notches for the classic ticket look (visible on desktop) */}
      <div className="hidden md:block absolute top-0 left-[33.33%] w-8 h-8 bg-[#000000] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
      <div className="hidden md:block absolute bottom-0 left-[33.33%] w-8 h-8 bg-[#000000] rounded-full transform -translate-x-1/2 translate-y-1/2 z-10"></div>

      {/* Right Section (Main Ticket Info) */}
      <div className="w-full md:w-2/3 p-8 flex flex-col justify-between items-center bg-gradient-to-b from-white to-[#f0f0f0]">
        {/* Title Area */}
        <div className="text-center w-full mb-8 mt-2">
          <p className="text-sm font-semibold text-gray-800 tracking-wide mb-1">
            TEDx IITRoorkee 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest text-black mb-6 uppercase">
            Zephyr of Change
          </h2>
          <button className="bg-[#E60000] hover:bg-red-700 text-white font-semibold py-2.5 px-8 rounded hover:cursor-pointer shadow-[0_4px_15px_rgba(230,0,0,0.4)] transition-all hover:scale-105 active:scale-95">
            {/* add a redirect link  */}
            <a
              href="https://smartpay.easebuzz.in/161962/f8d4e7b0eb3c445b9690ca62a124422f"
              target="_blank"
            >
              Get Your Ticket
            </a>
          </button>
        </div>

        {/* Footer Details Area */}
        <div className="w-full flex flex-col w-full border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full pb-4 border-b border-gray-300 gap-4 md:gap-0">
            <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <FaRegCalendarAlt className="text-[#E60000] text-lg" /> Sunday,
              5th April, 2026
            </div>
            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <FaRegClock className="text-[#E60000] text-lg" /> 11:00 AM - 3:00
              PM
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-700 font-medium pt-4">
            <FaMapMarkerAlt className="text-[#E60000] text-lg" /> {locationText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TedxBooking() {
  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden flex flex-col items-center pt-16 pb-20 px-6 md:px-10 font-sans">
      {/* Background overlay using imported frame */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <img
          src={Frame}
          alt="Background contour lines"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center w-full">
        {/* Header Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider mb-14 text-center">
          <span className="text-white">BUY</span>{" "}
          <span className="text-[#E60000]">NOW</span>
        </h1>

        {/* Ticket List */}
        <div className="w-full flex flex-col items-center">
          <TicketCard
            leftTitle="Price"
            leftImage={tickets}
            locationText="IIT Roorkee, 247667"
          />
        </div>
      </div>
    </div>
  );
}
