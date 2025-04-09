import TeamMemberCard from "./TeamMemberCard";
import Aman from "/MemberImages/Aman.webp";
import Anuj from "/MemberImages/Anuj.webp";
import Anukriti from "/MemberImages/Anukriti.webp";
import Anushka from "/MemberImages/Anushka.webp";
import Karan from "/MemberImages/Karan.webp";
import Ram from "/MemberImages/Ram.webp";
// import Saksham from "/MemberImages/Saksham.webp";
import Sameer from "/MemberImages/Sameer.webp";
import Shaurya from "/MemberImages/Shaurya.webp";
import Saumya from "/MemberImages/Saumya.webp";
import V_Anuj from "/MemberImages/V_Anuj.webp";
import Vidish from "/MemberImages/Vidish.webp";
import Yashasvi from "/MemberImages/Yashasvi.webp";
import sahil from "/MemberImages/sahil.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

function TeamPage() {
  const teamRef = useRef(null);

  const teamMembers = [
    {
      name: "Anukriti Sethi",
      role: "Advisory",
      image: `${Anukriti}`,
    },
    {
      name: "Yashashvi Chaudhary",
      role: "Advisory",
      image: `${Yashasvi}`,
    },
    {
      name: "Saumya Singh",
      role: "Curator",
      image: `${Saumya}`,
    },
    {
      name: "Vidish Mishra",
      role: "Co-Curator",
      image: `${Vidish}`,
    },
    {
      name: "Aman Kumar",
      role: "Organizing Committee",
      image: `${Aman}`,
    },
    {
      name: "Karan Kuthe",
      role: "Organizing Committee",
      image: `${Karan}`,
    },
    {
      name: "Shaurya Singhal",
      role: "Organizing Committee",
      image: `${Shaurya}`,
    },
    // {
    //   name: "Saksham Jain",
    //   role: "Organizing Committee",
    //   image: `${Saksham}`,
    // },
    {
      name: "Sameer Modi",
      role: "Senior Manager",
      image: `${Sameer}`,
    },
    {
      name: "Ramavtar Uranw",
      role: "Senior Manager",
      image: `${Ram}`,
    },
    {
      name: "Sahil Kamble",
      role: "Senior Manager",
      image: `${sahil}`,
    },
    {
      name: "V.Anuj",
      role: "Senior Manager",
      image: `${V_Anuj}`,
    },
    {
      name: "Anushka Tyagi",
      role: "Manager",
      image: `${Anushka}`,
    },

    {
      name: "Anuj Kumar",
      role: "Manager",
      image: `${Anuj}`,
    },
  ];

  return (
    <section
      className="py-16 px-6 w-full min-h-screen"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      <h1 className="text-center text-[#555555] text-5xl md:text-6xl font-bold mb-16">
        MEET OUR TEAM
      </h1>

      <div
        className="flex flex-wrap  mx-auto justify-between items-center"
        ref={teamRef}
      >
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamPage;
