import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TicketsAndMerch2026Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const route = useNavigate();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center font-sans py-20">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 25s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* ── CARD STYLES ── */
        @media (min-width: 768px) {
          .stub-text-vertical {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
          }
        }

        .ticket-body-texture {
          background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 40%, #2d2d2d 70%, #1a1a1a 100%);
          position: relative;
        }
        .ticket-body-texture::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.012) 8px,
            rgba(255,255,255,0.012) 9px
          );
          pointer-events: none;
          border-radius: inherit;
        }

        .ticket-hole {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #050505;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }
        .ticket-hole-top    { top: -14px; }
        .ticket-hole-bottom { bottom: -14px; }

        .seam-hole-top {
          width: 28px; height: 28px; border-radius: 50%;
          background: #050505;
          position: absolute; top: -14px; left: -14px; z-index: 20;
        }
        .seam-hole-bottom {
          width: 28px; height: 28px; border-radius: 50%;
          background: #050505;
          position: absolute; bottom: -14px; left: -14px; z-index: 20;
        }
      `}</style>

      {/* ── ORIGINAL: Deep Background Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-red-900/10 blur-[100px] md:blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* ── ORIGINAL: Scrolling BG text ── */}
        <div className="absolute top-1/8 md:top-1/6 left-0 bg-gradient-to-t from-black to-red-600 -translate-y-1/2 whitespace-nowrap opacity-20 select-none pointer-events-none flex z-0 w-[200%]">
          <h1 className="text-[15vw] md:text-[12vw] font-black bg-red-400 bg-clip-text text-transparent tracking-tighter animate-scroll uppercase">
            TICKETS TICKETS TICKETS TICKETS TICKETS TICKETS TICKETS
            TICKETS&nbsp;
          </h1>
        </div>

        {/* ── ORIGINAL: Section title ── */}
        <h2
          className={`text-white text-3xl md:text-5xl font-bold tracking-widest uppercase text-center drop-shadow-lg transition-all w-full md:w-[100vw] h-auto md:h-[25vh] mb-8 md:mb-0 duration-700 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          TICKETS AND MERCH
        </h2>

        {/* ── NEW CARD: Single Standard Pass ticket ── */}
        <div className="w-full flex justify-center pb-8 pt-4">
          <div
            className="flex flex-col md:flex-row w-full max-w-4xl overflow-visible"
            style={{ filter: "drop-shadow(0 30px 60px rgba(200,0,0,0.15))" }}
          >
            {/* STUB */}
            <div
              className="
                flex-shrink-0 flex flex-row md:flex-col items-center justify-between
                px-6 py-4 md:px-0 md:py-8
                w-full md:w-[80px]
                rounded-t-2xl md:rounded-t-none md:rounded-l-2xl
                border-b-2 md:border-b-0 md:border-r-2 border-dashed border-black/40
              "
              style={{
                background:
                  "linear-gradient(160deg, #e60020 0%, #b5001a 55%, #800012 100%)",
                boxShadow: "inset -3px 0 10px rgba(0,0,0,0.35)",
              }}
            >
              <span className="text-yellow-300 font-black text-sm md:text-base tracking-wider stub-text-vertical">
                Rs. 700
              </span>
              <div className="flex flex-row md:flex-col items-center gap-4 md:gap-1 stub-text-vertical">
                <span className="text-white/65 text-[10px] font-semibold tracking-[0.22em] uppercase">
                  Ticket only
                </span>
                <span className="text-white font-extrabold text-sm md:text-[15px] tracking-wide uppercase">
                  Standard Pass
                </span>
              </div>
            </div>

            {/* BODY */}
            <div
              className="ticket-body-texture flex-1 relative overflow-visible
                rounded-b-2xl md:rounded-b-2xl md:rounded-tl-none md:rounded-tr-2xl md:rounded-bl-none
              "
              style={{
                boxShadow: "0 0 0 1px rgba(255,255,255,0.07)",
                borderRadius: "0 16px 16px 0",
              }}
            >
              {/* Punch holes at seam on desktop */}
              <div className="hidden md:block seam-hole-top" />
              <div className="hidden md:block seam-hole-bottom" />

              {/* Punch holes at stub join on mobile */}
              <div className="md:hidden ticket-hole ticket-hole-top" />

              {/* Two-panel row */}
              <div className="flex flex-col md:flex-row">
                {/* Left: Price panel */}
                <div className="flex flex-col self-center justify-center px-8 py-8 md:py-10 border-b md:border-b-0 md:border-r border-dashed border-white/15 md:w-[42%]">
                  <p className="text-gray-400 text-[11px] font-bold tracking-[0.28em] uppercase mb-4">
                    TICKET PRICE
                  </p>
                  <p
                    className="text-white font-black leading-none"
                    style={{ fontSize: "clamp(2.4rem,5.5vw,3.5rem)" }}
                  >
                    ₹ 700/-
                  </p>
                  <p className="text-gray-500 text-xs font-medium mt-3 tracking-wider">
                    including all taxes
                  </p>
                </div>

                {/* Right: Event info panel */}
                <div className="flex flex-col justify-center items-center md:items-start flex-1 px-8 py-8 md:py-10 md:pl-10 text-center md:text-left gap-3">
                  <p className="text-gray-400 text-xs font-semibold tracking-[0.22em] uppercase">
                    TEDxIITRoorkee 2026
                  </p>
                  <h3 className="text-white font-black uppercase leading-tight text-2xl md:text-3xl lg:text-4xl tracking-wide">
                    ZEPHYR OF CHANGE
                  </h3>
                  <button
                    onClick={() => route("/ticket")}
                    className="mt-1 bg-gradient-to-r flex self-center cursor-pointer from-[#e60020] to-[#b0001a] hover:from-[#ff0030] hover:to-[#cc0020] text-white font-bold text-sm py-3 px-8 rounded-full shadow-[0_8px_24px_-8px_rgba(230,0,32,0.7)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 tracking-widest uppercase"
                  >
                    Get Your Ticket
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div
                className="border-t border-dashed border-white/15 px-4 py-4"
                style={{ background: "rgba(0,0,0,0.28)" }}
              >
                {/* Desktop: 3-column */}
                <div className="hidden md:grid grid-cols-3 divide-x divide-dashed divide-white/15">
                  {[
                    "SUNDAY, 5TH APRIL, 2026",
                    "11:00 AM – 3:00 PM",
                    "MAC AUDITORIUM, IIT ROORKEE",
                  ].map((t) => (
                    <p
                      key={t}
                      className="text-gray-400 text-[10px] font-bold tracking-[0.18em] uppercase text-center py-1 px-3"
                    >
                      {t}
                    </p>
                  ))}
                </div>
                {/* Mobile: stacked */}
                <div className="md:hidden flex flex-col items-center gap-1 text-center">
                  {[
                    "SUNDAY, 5TH APRIL, 2026",
                    "11:00 AM – 3:00 PM",
                    "MAC AUDITORIUM, IIT ROORKEE",
                  ].map((t) => (
                    <p
                      key={t}
                      className="text-gray-400 text-[10px] font-bold tracking-[0.18em] uppercase"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              {/* Mobile bottom hole */}
              <div className="md:hidden ticket-hole ticket-hole-bottom" />
            </div>
          </div>
        </div>
        {/* ── END CARD ── */}
      </div>
    </section>
  );
}
