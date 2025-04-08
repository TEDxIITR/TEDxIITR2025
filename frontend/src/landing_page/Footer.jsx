import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../../public/Logos/logo-white.png";

function Footer() {
  return (
    <footer
      className="py-12 px-10 md:px-6 border-t border-[#555555] flex flex-wrap"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between gap-15 md:gap-20  flex-wrap">
        <div>
          <Link to="/" className="flex items-center">
            <img src={NavLogo} alt="" />
          </Link>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Events & Incentives</h3>
          <ul className="space-y-2 text-md md:text-sm text-[#b6b6b6]">
            <li>
              <Link to="#" className="hover:text-white">
                Pre-Ted Event
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Athyudan
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                TED
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2 text-md md:text-sm text-[#b6b6b6]">
            <li>
              <Link to="#" className="hover:text-white">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Youtube
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4">Community</h3>
          <ul className="space-y-2 text-md md:text-sm text-[#b6b6b6]">
            <li>
              <Link to="#" className="hover:text-white">
                TED
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                TED Speakers
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                TEDx Organizers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:mx-auto mt-12 ">
        <div className="">
          <div>
            <h3 className="font-bold text-white  mb-4">
              TedxIITRoorkee Recorded
            </h3>
            <p className="text-md text-[#b6b6b6] mb-4">
              Watch the latest TEDxIITRoorkee events on your screen
            </p>
            <a
              href="https://youtube.com"
              className="btn bg-[#eb0028] hover:bg-[#d70000] text-white border-none rounded"
            >
              See on youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
