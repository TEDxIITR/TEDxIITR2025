import React, { useEffect } from "react";
import Hero from "./Hero";
import SpearkersPage from "./SpearkersPage";
import TapestryPage from "./TapestryPage";
import SponsersPage from "./SponsersPage";
import { useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import EventsLinePage from "./EventsLinePage";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 50,
        // scale: 0.9,
        duration: 1,
      },
      {
        opacity: 1,
        y: 0,
        duration: 4,
        // scale: 1,
      }
    );
  }, []);

  return (
    <div className="" style={{ backgroundColor: "#0E0E0E" }}>
      {/* <Navbar /> */}
      <section id="Tapestry-section">
        <TapestryPage />
      </section>
      <section id="about-section" ref={heroRef}>
        <Hero />
      </section>
      <section>
        <EventsLinePage />
      </section>
      <section id="speakers-section">
        <SpearkersPage />
      </section>

      <section id="sponsers-section">
        <SponsersPage />
      </section>
    </div>
  );
};

export default HomePage;
