import React, { useEffect } from "react";
// import Hero from "./Hero";
import SpearkersPage from "./SpearkersPage";
import TapestryPage from "./TapestryPage";
import SponsersPage from "./SponsersPage";
import PastEventsPage from "./PastEventsPage";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import EventsLinePage from "./EventsLinePage";
import CountDown from "./CountDown";
import ThemeSection from "./Theme";
import TicketsAndMerch2026Home from "./TicketsAndMerch2026Home";
import Hero2026 from "./Hero2026";
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
      },
    );
  }, []);

  return (
    <div className="" style={{ backgroundColor: "#0E0E0E" }}>
      {/* <Navbar /> */}
      <section id="Tapestry-section">
        <Hero2026 />
      </section>
      <section id="about-section">
        <ThemeSection />
      </section>
      {/* <section id="about-section" ref={heroRef}>
        <Hero2026 />
      </section> */}
      <section>
        <EventsLinePage />
      </section>
      <section id="speakers-section">
        <SpearkersPage />
      </section>
      <section id="sponsers-section">
        <SponsersPage />
      </section>
      <section id="tickets-merch-section">
        <TicketsAndMerch2026Home />
      </section>
      <section id="pastEvents-section">
        <PastEventsPage />
      </section>
      <section id="countdown-section">
        <CountDown />
      </section>
    </div>
  );
};

export default HomePage;
