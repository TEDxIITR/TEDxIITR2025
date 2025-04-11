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
      <section className="lg:min-h-full md:w-full pb-10 px-5">
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
          Past Sponsors
        </h1>
        <div className="flex w-[100%] md:w-full gap-2.5 flex-col md:gap-10 justify-self-center">
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
        </div>
      </section>
    </main>
  );
};

export default Sponsers;
