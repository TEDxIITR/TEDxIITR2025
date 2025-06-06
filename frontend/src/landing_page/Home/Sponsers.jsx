import React from "react";
import AWS from "/Sponsers/AWS.webp";
import Cashify from "/Sponsers/CASHIFY.webp";
import CashKaro from "/Sponsers/CASHKARO.webp";
import Infosys from "/Sponsers/INFOSYS.webp";
import NPCI from "/Sponsers/NCPI.webp";
import OYO from "/Sponsers/OYO.webp";
import Samsung from "/Sponsers/SAMSUNG.webp";
import Tides from "/Sponsers/TIDES.webp";
import TOI from "/Sponsers/TOI.webp";

const Sponsers = () => {
  return (
    <main>
      <section className="lg:min-h-full md:w-full pb-10 px-5 py-10 mb-16">
        {/* <h1
          className="text-[#d9d9d9] text-6xl  md:text-7xl lg:text-8xl text-center mb-16  font-passion font-extrabold leading-normal"
          style={{
            background:
              "linear-gradient(180deg, rgba(110, 110, 110, 0.46) 46.23%, rgba(212, 212, 212, 0.00) 90.52%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "10rem",
          }}
        >
          Sponsors
        </h1> */}
        {/* <div className="flex w-[100%] md:w-full gap-2.5 flex-col md:gap-10 justify-self-center">
          <div className="flex gap-4 justify-center md:gap-15">
            <div>
              <img src={NPCI} alt="" className="rounded-xl" />
            </div>
            <div>
              <img src={Tides} alt="" className="rounded-xl" />
            </div>
            <div>
              <img src={CashKaro} alt="" className="rounded-xl" />
            </div>
            <div className="rounded-xl">
              <img src={TOI} alt="" className="rounded-xl" />
            </div>
          </div>
          <div className="flex flex-row gap-4  w-[80%] mx-auto justify-self-center md:justify-center md:gap-18 md:w-full">
            <div className="bg-white rounded-xl">
              <img src={Infosys} alt="" className="rounded-xl" />
            </div>
            <div>
              <img src={NPCI} alt="" className="rounded-xl" />
            </div>
            <div className="bg-white pt-3 px-2 rounded-xl">
              <img src={Samsung} alt="" className="rounded-xl" />
            </div>
          </div>
          <div className="flex flex-row  gap-4  w-[60%] mx-auto justify-self-center md:gap-12 justify-center md:w-full">
            <div>
              <img src={OYO} alt="" className="rounded-xl" />
            </div>
            <div className="bg-white rounded-xl">
              <img src={Cashify} alt="" className="rounded-xl" />
            </div>
          </div>
          <div className="flex flex-row w-[40%] mx-auto justify-self-center md:justify-evenly md:w-full ">
            <div className="bg-white px-3 py-2 rounded-xl">
              <img className="w-[4rem] " src={AWS} alt="" />
            </div>
          </div>
        </div> */}

        <div className="flex flex-col gap-10 lg:gap-36 justify-evenly">
          <div className="flex flex-col">
            <h1
              className="text-[#d9d9d9] text-4xl  md:text-7xl lg:text-8xl text-center mb-4  font-passion font-extrabold leading-normal"
              style={{
                background:
                  "linear-gradient(180deg, rgba(110, 110, 110, 0.46) 46.23%, rgba(212, 212, 212, 0.00) 90.52%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "4rem",
              }}
            >
              Title Sponsor
            </h1>
            <a href="https://www.sudlife.in/" target="_blank">
              <img
                src="/Logos/TitleSponser.webp"
                className="w-[90%] lg:w-[60%] flex self-center mx-auto hover:scale-105 rounded-md border-transparent hover:border-red-600 transition-all duration-150"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h1
              className="text-[#d9d9d9] text-2xl  md:text-6xl lg:text-7xl text-center mb-4  font-passion font-extrabold leading-normal"
              style={{
                background:
                  "linear-gradient(180deg, rgba(110, 110, 110, 0.46) 46.23%, rgba(212, 212, 212, 0.00) 90.52%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "4rem",
              }}
            >
              Media Partner
            </h1>
            <img
              src="/Logos/MediaPartner.webp"
              className="w-[60%] lg:w-[50%] rounded-md"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sponsers;
