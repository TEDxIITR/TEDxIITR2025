import { useEffect } from "react";
import Frame from "/Speakers2024/Frame.png";
import { useRef, useState } from "react";
import { gsap } from "gsap";

import Sp1 from "/Speakers2024/Sp1.png";
import Sp2 from "/Speakers2024/Sp2.png";
import Sp3 from "/Speakers2024/Sp3.png";
import Sp4 from "/Speakers2024/Sp4.png";
import Sp5 from "/Speakers2024/Sp5.png";
import Sp6 from "/Speakers2024/Sp6.png";
import Sp7 from "/Sp2019/Sp7.png";
import Sp8 from "/Sp2019/Sp8.png";
// import Sp9 from "/Sp2019/Sp9.png";
import Sp10 from "/Sp2019/Sp10.png";
import Sp11 from "/Sp2019/Sp11.png";
import Sp12 from "/Sp2019/Sp12.png";
import Sp13 from "/Sp2019/Sp13.png"; // 2019
import Sp14 from "/Sp2017/Sp14.png";
import Sp15 from "/Sp2017/Sp15.png";
import Sp16 from "/Sp2017/Sp16.png";
import Sp17 from "/Sp2017/Sp17.png";
import Sp18 from "/Sp2017/Sp18.png";
import Sp19 from "/Sp2017/Sp19.png"; // 2017
import Sp20 from "/Sp2016/Sp20.png";
import Sp21 from "/Sp2016/Sp21.png";
import Sp22 from "/Sp2016/Sp22.png";
import Sp23 from "/Sp2016/Sp23.png";
import Sp24 from "/Sp2016/Sp24.png";

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const speakerNameRef = useRef(null);
  const speakerImageRef = useRef(null);
  const carouselRef = useRef(null);
  const carouselItemsRef = useRef([]);
  const mainRef = useRef(null);

  const speakerTextRef = useRef(null);

  const centerActiveSpeaker = (index) => {
    if (!carouselRef.current || !carouselItemsRef.current[index]) return;

    const carousel = carouselRef.current;
    const item = carouselItemsRef.current[index];
    const carouselWidth = carousel.offsetWidth;
    const itemWidth = item.offsetWidth;

    const scrollLeft = item.offsetLeft - carouselWidth / 2 + itemWidth / 2;

    const width = window.innerWidth;
    carousel.scrollTo({
      left: width > 640 ? scrollLeft - 100 : scrollLeft,
      behavior: "smooth",
    });
  };

  const handleSectionClick = (index) => {
    setActiveSection(index);
    setActiveSpeaker(0); // Reset to first speaker when changing years

    // Update carousel after state change
    setTimeout(() => {
      centerActiveSpeaker(0);

      // Animate the speaker name and image when changing sections
      gsap.fromTo(
        speakerNameRef.current.children,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.out",
        }
      );

      gsap.fromTo(
        speakerImageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Animate carousel items
      gsap.fromTo(
        carouselRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    }, 50);
  };

  const handleSpeakerClick = (index) => {
    if (index === activeSpeaker) return;
    const timeline = gsap.timeline();

    setActiveSpeaker(index);

    centerActiveSpeaker(index);

    gsap.fromTo(
      speakerNameRef.current.children,
      {
        opacity: -10,
        y: +500,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      speakerImageRef.current,
      {
        opacity: 0,
        x: 50,
        duration: 0.6,
        ease: "power2.out",
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  };

  useEffect(() => {
    // Main container animation
    gsap.fromTo(
      mainRef.current,
      { opacity: -1, y: 100, delay: 0 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 95%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      speakerNameRef.current.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        // delay: 0.2,
        // stagger: 0.2,
        // immediateRender: false,
        scrollTrigger: {
          trigger: speakerNameRef.current,
          start: "top 99%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // Speaker image animation
    gsap.fromTo(
      speakerImageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        // delay: 0.2,
        // immediateRender: false,
        scrollTrigger: {
          trigger: speakerImageRef.current,
          start: "top 99%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // Carousel items animation
    gsap.fromTo(
      carouselRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.2,

        // immediateRender: false,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 140%",

          end: "bottom 110%",
          scrub: true,
        },
      }
    );

    // Center the active speaker on mount
    centerActiveSpeaker(activeSpeaker);
  }, []);

  useEffect(() => {
    centerActiveSpeaker(activeSpeaker);
  }, [activeSpeaker]);

  const speakers2025 = [
    {
      id: 1,
      name: "Mohit Tyagi",
      //  image: `${}`
    },
    {
      id: 2,
      name: "Soumesh Pandey",
      // image: `${}`,
    },
    {
      id: 3,
      name: "Rahul Choudhary",
      // image: `${}`,
    },
    {
      id: 4,
      name: "Bijay N Nair",
      // image: `${}`,
    },
    {
      id: 5,
      name: "Azhar Iqbal",
      // image: `${}`,
    },
    {
      id: 6,
      name: "Sumeet Anand",
      // image: `${}`,
    },
  ];
  const speakers2024 = [
    { id: 1, name: "ANUJ", image: `${Sp1}` },
    {
      id: 2,
      name: "SAURABH, MANISHA",
      image: `${Sp2}`,
    },
    {
      id: 3,
      name: "JAI MADAAN",
      image: `${Sp3}`,
    },
    {
      id: 4,
      name: "AMAN DHATTARWAAL",
      image: `${Sp4}`,
    },
    {
      id: 5,
      name: "DHANAJYA JOSHI",
      image: `${Sp5}`,
    },
    {
      id: 6,
      name: "RAJEEV BRARWAN",
      image: `${Sp6}`,
    },
    {
      id: 7,
      name: "MANISH BEHL",
      image: `${Sp7}`,
    },
  ];
  const speakers2016 = [
    { id: 1, name: "ANSHU MOR", image: `${Sp20}` },
    {
      id: 2,
      name: "KDEORHH",
      image: `${Sp21}`,
    },
    {
      id: 3,
      name: "SUSHRUTI KRISHNA",
      image: `${Sp22}`,
    },
    {
      id: 4,
      name: "VIVEK ANGIHOTRI",
      image: `${Sp23}`,
    },
    {
      id: 5,
      name: "KIRAN MRINAL",
      image: `${Sp24}`,
    },
  ];
  const speakers2017 = [
    // { id: 1, name: "ANUJ", image: `${Sp13}` },
    {
      id: 2,
      name: "SHARELL COOK",
      image: `${Sp14}`,
    },
    {
      id: 3,
      name: "SHARON PRABHAKAR",
      image: `${Sp15}`,
    },
    {
      id: 4,
      name: "BISTRITI PODDAR",
      image: `${Sp16}`,
    },
    {
      id: 5,
      name: "ANKUR WARIKOO",
      image: `${Sp17}`,
    },
    {
      id: 6,
      name: "SAUMITRA BHAT",
      image: `${Sp18}`,
    },
    {
      id: 7,
      name: "BIJESH AMIN",
      image: `${Sp19}`,
    },
  ];
  const speakers2019 = [
    { id: 1, name: "MANISH BEHL", image: `${Sp7}` },
    {
      id: 2,
      name: "JOSEPH RADHIK",
      image: `${Sp8}`,
    },
    // {
    //   id: 3,
    //   name: "VIDISH MISHRA",
    //   image: `${Sp9}`,
    // },
    {
      id: 4,
      name: "NAVNEET NAIR",
      image: `${Sp10}`,
    },
    {
      id: 5,
      name: "MAYA",
      image: `${Sp11}`,
    },
    {
      id: 6,
      name: "NARPATH RAMAN",
      image: `${Sp12}`,
    },
    {
      id: 7,
      name: "PRASHANT DHAWAN",
      image: `${Sp13}`,
    },
  ];

  const sections = [
    { year: "2025", speakers: speakers2025 },
    { year: "2024", speakers: speakers2024 },
    { year: "2019", speakers: speakers2019 },
    { year: "2017", speakers: speakers2017 },
    { year: "2016", speakers: speakers2016 },
  ];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center "
      ref={mainRef}
      style={{
        backgroundImage: `url(${Frame})`,
      }}
    >
      <div className="w-full flex justify-center md:justify-end">
        <h1
          className=" text-[5rem] lg:text-[8rem] xl:text-[9rem] font-lexend font-extrabold leading-none tracking-[0.05em]"
          style={{
            WebkitTextFillColor: "black",
            WebkitTextStrokeWidth: "0.90px",
            WebkitTextStrokeColor: "white",
          }}
        >
          SPEAKER
        </h1>
      </div>
      <div className="flex justify-center md:gap-20 items-center">
        <div className="flex flex-col gap-2">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`text-2xl cursor-pointer transition-all duration-300 ${
                activeSection === index
                  ? "text-red-500 font-bold scale-110"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => handleSectionClick(index)}
            >
              {section.year}
            </button>
          ))}
        </div>
        <div>
          <div className="flex flex-col items-center sm:flex-row md:gap-10 md:justify-center md:h-[25rem] ">
            <div
              className="flex flex-col justify-center items-end md:pl-12"
              ref={speakerNameRef}
            >
              <div className="text-white text-6xl md:text-7xl font-extrabold tracking-[0.5rem]">
                {
                  sections[activeSection].speakers[activeSpeaker].name.split(
                    " "
                  )[0]
                }
              </div>
              <div className="text-white text-4xl md:text-5xl font-bold tracking-[0.5rem]">
                {sections[activeSection].speakers[activeSpeaker].name.split(
                  " "
                )[1] || ""}
              </div>
            </div>
            <div>
              <div ref={speakerImageRef} className="z-10">
                <img
                  src={
                    sections[activeSection].speakers[activeSpeaker].image ||
                    "/placeholder.svg"
                  }
                  alt={sections[activeSection].speakers[activeSpeaker].name}
                  className="z-10 w-100px md:w-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10  flex justify-center items-end">
            <div
              ref={carouselRef}
              className="flex gap-4 px-4 overflow-x-auto pb-8 pt-3 carousel carousel-center  max-w-md md:max-w-2xl mx-auto"
            >
              {sections[activeSection].speakers.map((speaker, index) => (
                <div
                  key={index}
                  ref={(el) => (carouselItemsRef.current[index] = el)}
                  className={`carousel-item rounded-2xl overflow-hidden border-3 mr-2 transition-all duration-300 cursor-pointer ${
                    index === activeSpeaker
                      ? "scale-125 z-20 active bg-gradient-to-t from-black to-red-500 "
                      : "border-white bg-gradient-to-t from-black to-transparent "
                  }`}
                  onClick={() => handleSpeakerClick(index)}
                >
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-16 h-20 md:h-22 md:w-18 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
