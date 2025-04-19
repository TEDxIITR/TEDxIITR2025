import TeamMemberCard from "./TeamMemberCard";
import Aman from "/MemberImages/Aman.webp";
import Anuj from "/MemberImages/Anuj.webp";
import Anukriti from "/MemberImages/Anukriti.webp";
import Anushka from "/MemberImages/Anushka.webp";
import Karan from "/MemberImages/Karan.webp";
import Ram from "/MemberImages/Ram.webp";
// import Saksham from "/MemberImages/Saksham.webp";
import Sameer from "/MemberImages/Sameer.png";
import Shaurya from "/MemberImages/Shaurya.webp";
import Saumya from "/MemberImages/Saumya.webp";
import V_Anuj from "/MemberImages/V_Anuj.webp";
import Vidish from "/MemberImages/Vidish.webp";
import Yashaswi from "/MemberImages/Yashaswi.webp";
import sahil from "/MemberImages/sahil.webp";
import Pratham from "/MemberImages/Pratham.webp";
import Promit from "/MemberImages/Promit.webp";
import Prachi from "/MemberImages/Prachi.webp";
import Naresh from "/MemberImages/Naresh.webp";
import Kore from "/MemberImages/Kore.webp";
import Mehul from "/MemberImages/Mehul.webp";
import Aryan from "/MemberImages/Aryan.webp";
import Argh from "/MemberImages/Argh.webp";
import Shagun from "/MemberImages/Shagun.webp";
import Ved from "/MemberImages/Ved.webp";
import Aastha from "/MemberImages/Aastha.webp";
import Shyam from "/MemberImages/Shyam.webp";
import Rishika from "/MemberImages/Rishika.webp";
import Navin from "/MemberImages/Navin.webp";
import ShauryaSinghal from "/MemberImages/ShauryaSinghal.webp";
import Lakshya from "/MemberImages/Lakshya.webp";
import KumarAnuj from "/MemberImages/KumarAnuj.webp";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
// import gsap from "gsap";

function TeamPage() {
  const teamRef = useRef(null);

  const Advisory = [
    {
      name: "Lakshya ",
      role: "Advisor",
      image: `${Lakshya}`,
    },
  ];
  const Convenors = [
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
  ];

  const teamMembers = [
    {
      name: "Anukriti Sethi",
      role: "Organizing Committee",
      image: `${Anukriti}`,
    },
    {
      name: "Yashashvi Chaudhary",
      role: "Organizing Committee",
      image: `${Yashaswi}`,
    },

    {
      name: "Shyam",
      role: "Organizing Committee",
      image: `${Shyam}`,
    },
    {
      name: "Rishika",
      role: "Organizing Committee",
      image: `${Rishika}`,
    },
    {
      name: "Navin",
      role: "Organizing Committee",
      image: `${Navin}`,
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
    {
      name: "Pratham Garg",
      role: "Senior Manager",
      image: `${Pratham}`,
    },
    {
      name: "Shagun Agrawaal",
      role: "Senior Manager",
      image: `${Shagun}`,
    },
    {
      name: "Prachi Sawant",
      role: "Senior Manager",
      image: `${Prachi}`,
    },
    {
      name: "Aryan",
      role: "Senior Manager",
      image: `${Aryan}`,
    },

    // {
    //   name: "Saksham Jain",
    //   role: "Organizing Committee",
    //   image: `${Saksham}`,
    // },

    {
      name: "Argh",
      role: "Senior Manager",
      image: `${Argh}`,
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
      name: "Naresh Rajput",
      role: "Senior Manager",
      image: `${Naresh}`,
    },
    {
      name: "Shaurya",
      role: "Senior Manager",
      image: `${ShauryaSinghal}`,
    },

    {
      name: "Kore",
      role: "Senior Manager",
      image: `${Kore}`,
    },
    {
      name: "Ved",
      role: "Manager",
      image: `${Ved}`,
    },
    {
      name: "Anuj",
      role: "Manager",
      image: `${KumarAnuj}`,
    },
    {
      name: "Mehul",
      role: "Manager",
      image: `${Mehul}`,
    },
    {
      name: "Aastha",
      role: "Manager",
      image: `${Aastha}`,
    },
    {
      name: "Promit",
      role: "Manager",
      image: `${Promit}`,
    },
  ];

  return (
    <section
      className="py-16 px-6 w-full min-h-screen"
      style={{ backgroundColor: "black" }}
    >
      <h1 className="text-center text-[#555555] text-5xl md:text-6xl font-extrabold mb-16">
        MEET OUR TEAM
      </h1>
      <div className="flex flex-col gap-14">
        <h1 className="text-center text-[white] text-3xl md:text-4xl font-extrabold -tracking-tighter">
          Advisory
        </h1>
        <div
          className="flex flex-wrap justify-between px-2 gap-0 xl:px-50 items-center"
          ref={teamRef}
        >
          {Advisory.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-14">
        <h1 className="text-center text-[white] text-3xl md:text-4xl font-extrabold -tracking-tighter">
          Convenors
        </h1>
        <div
          className="flex flex-wrap justify-between px-2 gap-0 xl:px-50 items-center"
          ref={teamRef}
        >
          {Convenors.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-14">
        <h1 className="text-center text-[white] text-3xl md:text-4xl font-extrabold -tracking-tighter">
          Team
        </h1>
        <div
          className="flex flex-wrap px-2 sm:px-0  lg:gap-12 mx-auto justify-between items-center"
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
      </div>
    </section>
  );
}

export default TeamPage;
