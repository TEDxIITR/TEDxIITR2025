import React from "react";

// Partner data array for easy management.
// Just drop your actual WebP files into the public/Sponsers directory.
const partners = [
  {
    name: "Algorithm Research",
    type: "Silver Sponsor",
    link: "https://algorithmresearch.com/",
    logo: "/Sponsers/Algorithm.png",
  },
  {
    name: "Arome World",
    type: "Scent Partner",
    link: "https://aromeworld.in/",
    logo: "/Sponsers/Arome.png",
  },
  {
    name: "Ayouthveda",
    type: "Lifestyle Partner",
    link: "https://www.ayouthveda.com/",
    logo: "/Sponsers/Ayouthveda.webp",
  },
  {
    name: "Peter England",
    type: "Clothing Partner",
    link: "https://www.google.com/maps/search/Peter+England+Roorkee",
    logo: "/Sponsers/PeterEngland.png",
  },
  {
    name: "Tim Paris",
    type: "Fashion Partner",
    link: "https://www.google.com/maps/search/Tim+Paris+Roorkee",
    logo: "/Sponsers/TimParis.png",
  },
  {
    name: "Doon Merch",
    type: "Merchandise Partner",
    link: "https://www.google.com/maps/search/Doon+Merch+Dehradun", // Usually DDN based, update to Roorkee if needed
    logo: "/Sponsers/Doon.png",
  },
  {
    name: "Salon Name Pending", // TODO: Update this once you get the Insta name
    type: "Beauty Partner",
    link: "https://www.google.com/maps/search/Salon+Roorkee",
    logo: "/Sponsers/Salon.png",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap');

  .tl-root {
    --ted-red: #E62B1E;
    --ted-red-glow: rgba(230, 43, 30, 0.35);
    --ted-red-soft: rgba(230, 43, 30, 0.15);
    --spine-color: rgba(255,255,255,0.12);
    --bg: #0a0a0a;
    --card-bg: rgba(255,255,255,0.035);
    --card-border: rgba(255,255,255,0.08);
    --card-border-red: rgba(230,43,30,0.45);
    --text-dim: rgba(255,255,255,0.38);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 1.25rem 6rem;
    box-sizing: border-box;
    position: relative;
    font-family: 'Rajdhani', sans-serif;
  }

  .tl-header {
    text-align: center;
    margin-bottom: 4.5rem;
    position: relative;
    z-index: 2;
  }

  .tl-header-line {
    width: 40px;
    height: 2px;
    background: var(--ted-red);
    margin: 1.5rem auto 0;
    border-radius: 2px;
  }`;

const Sponsers = () => {
  return (
    <main>
      {/* Inline styles for the infinite marquee animation to ensure it works on Vercel without Tailwind config changes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            /* Adjust the 25s value to make the scroll faster or slower */
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="lg:min-h-full md:w-full pb-10 px-5 py-10 mb-16 overflow-hidden tl-root">
        <style>{styles}</style>
        <div className="flex flex-col gap-10 lg:gap-20 justify-evenly">
          {/* --- Title Sponsor Section --- */}
          {/* <div className=""> */}
          <div className="flex flex-col">
            <div className="tl-header">
              <h1 className="text-center text-4xl md:text-7xl lg:text-8xl font-bold text-[#ffffff]">
                Title Sponsor
              </h1>
              {/* <div className="tl-header-line" /> */}
            </div>
            <a href="https://sarrthiias.com/" target="_blank" rel="noreferrer">
              <img
                src="/Sponsers/Saarthi.png"
                className="w-[8%] lg:w-[10%] flex self-center mx-auto hover:scale-105 rounded-md border-transparent hover:border-red-600 transition-all duration-150"
                alt="Sarrthi IAS"
              />
            </a>
          </div>

          {/* --- Other Partners Section (Infinite Scroll) --- */}
          <div className="flex flex-col items-center overflow-hidden w-full">
            <h1 className="text-[#d9d9d9] text-4xl md:text-7xl lg:text-8xl text-center mb-10 font-passion font-extrabold leading-normal">
              Other Partners
            </h1>

            {/* Scroll Container */}
            <div className="relative flex w-full overflow-hidden group">
              <div className="flex w-max animate-marquee gap-8 px-4">
                {/* We map through the partners array TWICE. 
                  This is the secret to making an infinite scroll seamless without javascript jumps.
                */}
                {[...partners, ...partners].map((partner, index) => (
                  <a
                    key={index}
                    href={partner.link}
                    target="_blank"
                    rel="noreferrer"
                    // Styling matching your reference image: light grey box, red hover glow
                    className="flex flex-col items-center justify-center min-w-[220px] h-[110px] bg-[#e5e5e5] rounded-md transition-all duration-300 border border-transparent hover:border-red-600 shadow-[0_0_10px_rgba(255,0,0,0.1)] hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:scale-105"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 max-w-[80%] object-contain"
                      // Fallback: If you haven't added the logo file yet, it displays the text instead
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden flex-col items-center">
                      <span className="text-sm font-bold text-gray-800 text-center px-2">
                        {partner.name}
                      </span>
                      <span className="text-xs text-red-600 font-semibold">
                        {partner.type}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sponsers;
