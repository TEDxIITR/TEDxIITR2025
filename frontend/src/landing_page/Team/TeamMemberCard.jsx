import { GrLinkedin } from "react-icons/gr";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ImLinkedin } from "react-icons/im";
import Linkedin from "../../../public/Logos/Linkedin.png";

function TeamMemberCard({ name, role, image }) {
  const [display, setDisplay] = useState(true);

  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const infoRef = useRef(null);
  const imageRef = useRef(null);
  const linkedInRef = useRef(null);

  useEffect(() => {
    if (!gsap) {
      console.error("GSAP not loaded");
      return;
    }

    const card = cardRef.current;
    if (card) {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
      );
    }

    if (overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0 });
    }

    if (linkedInRef.current) {
      gsap.set(linkedInRef.current, { scale: 0 });
    }
  }, []);

  const handleMouseEnter = () => {
    setDisplay(false);

    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -6,
        duration: 0.3,
        ease: "power1.out",
      });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0.3,
        duration: 0.3,
      });
    }

    if (linkedInRef.current) {
      gsap.to(linkedInRef.current, {
        scale: 1,
        opacity: 10,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.5,
      });
    }
  };

  const handleMouseLeave = () => {
    setDisplay(true);

    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }

    if (linkedInRef.current) {
      gsap.to(linkedInRef.current, {
        scale: 0,
        duration: 0.3,
      });
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.4,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group mx-auto w-[20rem] sm:w-[19rem] mb-10 hover:mb-3.5 transition-all duration-300 ease-in-out overflow-hidden rounded-sm bg-black self-center"
    >
      <div className="aspect-[3/4] relative">
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#eb0028] z-1 flex justify-center items-center text-3xl"
        >
          <a href="" className="text-white">
            <div
              className="text-white opacity-1000 cursor-pointer"
              ref={linkedInRef}
            >
              <img
                src={Linkedin}
                alt=""
                className="w-[50px] opacity:2000 z-10 hover:scale-110 transition-all duration-75"
              />
            </div>
          </a>
        </div>

        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            ref={imageRef}
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover object-center bg-black"
          />
        </div>
      </div>

      <div
        ref={infoRef}
        className={`absolute bottom-0 left-0 right-0 p-2 z-20 border-1 w-[90%] mx-auto mb-2 rounded-sm ${
          display ? "visible" : "invisible"
        }`}
        style={{ background: "rgba(215, 0, 0, 0.17)" }}
      >
        <h3 className="font-bold text-white">{name}</h3>
        <p className="text-sm font-semibold" style={{ color: "#B6B6B6" }}>
          {role}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
