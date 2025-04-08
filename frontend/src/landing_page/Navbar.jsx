import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLogo from "../../public/Logos/logo-white.png";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const drawerRef = useRef(null); // Add ref for drawer checkbox

  const scrollToSection = (sectionId) => {
    if (drawerRef.current && drawerRef.current.checked) {
      drawerRef.current.checked = false; // Uncheck the drawer checkbox
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav
      className="w-full border-b-1  border-b-gray-500 my-auto "
      style={{ backgroundColor: "#0E0E0E" }}
    >
      <div className="flex justify-between items-center px-4 lg:px-6 py-4 h-14 self-center ">
        <Link to="/" className="flex items-center">
          <img src={NavLogo} alt="Logo" />
        </Link>
        {isSmallScreen ? (
          <div className="drawer flex justify-end">
            {/* Drawer Checkbox with Ref */}
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle"
              ref={drawerRef}
            />
            <div
              className="drawer-content p-3 rounded-sm text-black"
              style={{ backgroundColor: "red" }}
            >
              <label htmlFor="my-drawer" className="drawer-button">
                <RxHamburgerMenu />
              </label>
            </div>
            <div className="drawer-side z-50 w-full">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div
                className="menu text-base-content min-h-full p-4 w-[80%] flex flex-col justify-center gap-10 items-center"
                style={{ backgroundColor: "#000" }}
              >
                <button onClick={() => scrollToSection("Tapestry-section")}>
                  <Link
                    to="/"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
                  >
                    HOME
                  </Link>
                </button>
                <button onClick={() => scrollToSection("about-section")}>
                  <Link
                    to="/"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
                  >
                    ABOUT US
                  </Link>
                </button>

                <button onClick={() => scrollToSection("speakers-section")}>
                  <Link
                    to="/"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
                  >
                    SPEAKERS
                  </Link>
                </button>

                <button onClick={() => scrollToSection("team-section")}>
                  <Link
                    to="/team"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
                  >
                    TEAM
                  </Link>
                </button>
                <button onClick={() => scrollToSection("events-section")}>
                  <Link
                    to="/"
                    className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
                  >
                    PREVIOUS EVENTS
                  </Link>
                </button>

                <button onClick={() => scrollToSection("register-section")}>
                  <Link
                    to="/ticket"
                    className="btn btn-sm bg-[#eb0028] hover:bg-[#d70000] text-white border-none rounded px-4 btn btn-ghost"
                  >
                    BUY TICKET
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("Tapestry-section")}>
              <Link
                to="/"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
              >
                HOME
              </Link>
            </button>
            <button onClick={() => scrollToSection("about-section")}>
              <Link
                to="/"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
              >
                ABOUT US
              </Link>
            </button>

            <button onClick={() => scrollToSection("speakers-section")}>
              <Link
                to="/"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
              >
                SPEAKERS
              </Link>
            </button>

            <button onClick={() => scrollToSection("team-section")}>
              <Link
                to="/team"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
              >
                TEAM
              </Link>
            </button>
            <button onClick={() => scrollToSection("events-section")}>
              <Link
                to="/"
                className="text-white text-sm hover:text-red-500 transition-all duration-300 btn btn-ghost hover:scale-95"
              >
                PREVIOUS EVENTS
              </Link>
            </button>

            <button onClick={() => scrollToSection("register-section")}>
              <Link
                to="/ticket"
                className="btn btn-sm bg-[#eb0028] hover:bg-[#d70000] text-white text-sm border-none rounded px-3 btn btn-ghost"
              >
                BUY TICKET
              </Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
