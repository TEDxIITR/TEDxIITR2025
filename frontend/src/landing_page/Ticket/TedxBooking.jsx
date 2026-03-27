import React, { useState, useEffect, useRef } from "react";
import { FaRegCalendarAlt, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import tickets from "/tickets.webp";
import Frame from "/Speakers2024/Frame.webp";

// ─── CONFIGURE YOUR URLS & COUPON HERE ───────────────────────────────────────
const COUPON_CODE = "ZEPHYR100";
const URL_COUPON =
  "https://smartpay.easebuzz.in/161962/f8d4e7b0eb3c445b9690ca62a124422f"; // url1 – ₹599
const URL_REGULAR =
  "https://smartpay.easebuzz.in/161962/8d4c39b8ed00435baab68aa719f7d6ac"; // url2 – ₹699
const PRICE_COUPON = 599;
const PRICE_REGULAR = 699;
// ─────────────────────────────────────────────────────────────────────────────

/* ── Coupon Modal ─────────────────────────────────────────────────────────── */
const CouponModal = ({ onClose }) => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("idle"); // idle | valid | invalid
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleApply = () => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === COUPON_CODE) {
      setStatus("valid");
      setTimeout(() => window.open(URL_COUPON, "_blank"), 900);
    } else {
      setStatus("invalid");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  const handleSkip = () => window.open(URL_REGULAR, "_blank");

  const borderColor =
    status === "valid"
      ? "#22c55e"
      : status === "invalid"
        ? "#E60000"
        : "rgba(255,255,255,0.15)";

  const inputBg =
    status === "valid"
      ? "rgba(34,197,94,0.07)"
      : status === "invalid"
        ? "rgba(230,0,0,0.07)"
        : "rgba(255,255,255,0.04)";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.78)",
          backdropFilter: "blur(6px)",
          zIndex: 999,
          animation: "fadeIn .2s ease",
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 1000,
          width: "min(92vw, 440px)",
          background: "linear-gradient(160deg,#1a1a1a 0%,#111 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          padding: "36px 32px 30px",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(230,0,0,0.12)",
          animation: shaking
            ? "shake .4s ease"
            : "slideUp .28s cubic-bezier(.22,1,.36,1)",
          fontFamily: "'DM Sans',sans-serif",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 16,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.35)",
            fontSize: "1.3rem",
            lineHeight: 1,
            transition: "color .15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
          }
        >
          ✕
        </button>

        {/* Icon */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "rgba(230,0,0,0.12)",
            border: "1.5px solid rgba(230,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M9.5 14.5L3 21M14.5 9.5L21 3M3 3l5.5 5.5M15.5 15.5L21 21"
              stroke="#E60000"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle
              cx="8.5"
              cy="8.5"
              r="2.5"
              stroke="#E60000"
              strokeWidth="1.8"
            />
            <circle
              cx="15.5"
              cy="15.5"
              r="2.5"
              stroke="#E60000"
              strokeWidth="1.8"
            />
          </svg>
        </div>

        <h2
          style={{
            color: "#fff",
            fontSize: "1.35rem",
            fontWeight: 800,
            marginBottom: 6,
            letterSpacing: "-0.01em",
          }}
        >
          Have a coupon code?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.83rem",
            marginBottom: 24,
            lineHeight: 1.55,
          }}
        >
          Apply your coupon for an exclusive discount. No code? No worries —
          proceed at the regular price.
        </p>

        {/* Pricing chips */}
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          <div
            style={{
              flex: 1,
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 10,
              padding: "10px 12px",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 4,
              }}
            >
              With Coupon
            </div>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "#22c55e",
                fontFamily: "'Barlow Condensed',sans-serif",
              }}
            >
              ₹{PRICE_COUPON}/-
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "10px 12px",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 4,
              }}
            >
              Regular Price
            </div>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Barlow Condensed',sans-serif",
              }}
            >
              ₹{PRICE_REGULAR}/-
            </div>
          </div>
        </div>

        {/* Input row */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1, position: "relative" }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter coupon code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                setStatus("idle");
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && code.trim() && handleApply()
              }
              style={{
                width: "100%",
                background: inputBg,
                border: `1.5px solid ${borderColor}`,
                borderRadius: 8,
                padding: "12px 40px 12px 14px",
                color: "#fff",
                fontSize: "0.9rem",
                fontFamily: "'DM Mono','Courier New',monospace",
                letterSpacing: "0.08em",
                outline: "none",
                transition: "border-color .2s, background .2s",
              }}
            />
            {status === "valid" && (
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#22c55e",
                  fontSize: "1.1rem",
                }}
              >
                ✓
              </span>
            )}
            {status === "invalid" && (
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#E60000",
                  fontSize: "1rem",
                }}
              >
                ✗
              </span>
            )}
          </div>
          <button
            onClick={handleApply}
            disabled={!code.trim() || status === "valid"}
            style={{
              background: status === "valid" ? "#22c55e" : "#E60000",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0 18px",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor:
                !code.trim() || status === "valid" ? "not-allowed" : "pointer",
              opacity: !code.trim() ? 0.5 : 1,
              transition: "background .2s, opacity .2s",
              whiteSpace: "nowrap",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {status === "valid" ? "✓ Applied!" : "Apply"}
          </button>
        </div>

        {/* Feedback message */}
        <div style={{ minHeight: 22, marginTop: 8 }}>
          {status === "invalid" && (
            <p
              style={{
                color: "#E60000",
                fontSize: "0.78rem",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span>✗</span> Invalid coupon code. Please try again.
            </p>
          )}
          {status === "valid" && (
            <p
              style={{
                color: "#22c55e",
                fontSize: "0.78rem",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span>✓</span> Coupon applied! Redirecting you to checkout…
            </p>
          )}
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "22px 0 18px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}
          />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
            or
          </span>
          <div
            style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* Skip */}
        <button
          onClick={handleSkip}
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            padding: "11px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.85rem",
            cursor: "pointer",
            fontFamily: "'DM Sans',sans-serif",
            transition: "background .2s, color .2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.09)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          Skip — Continue at ₹{PRICE_REGULAR}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translate(-50%,-46%)} to{opacity:1;transform:translate(-50%,-50%)} }
        @keyframes shake   {
          0%,100%{transform:translate(-50%,-50%)}
          20%    {transform:translate(calc(-50% - 8px),-50%)}
          40%    {transform:translate(calc(-50% + 8px),-50%)}
          60%    {transform:translate(calc(-50% - 5px),-50%)}
          80%    {transform:translate(calc(-50% + 5px),-50%)}
        }
      `}</style>
    </>
  );
};

/* ── Ticket Card ──────────────────────────────────────────────────────────── */
const TicketCard = ({ leftTitle, leftImage, locationText }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <CouponModal onClose={() => setShowModal(false)} />}

      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-gradient-to-b from-[#fdfdfd] to-[#e0e0e0] rounded-xl overflow-hidden shadow-2xl mb-10 text-black">
        {/* Left Stub */}
        <div className="w-full md:w-1/3 p-6 flex flex-col items-center justify-center relative border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-300">
          <div className="w-32 h-24 mb-4 flex items-center justify-center overflow-hidden">
            {leftImage ? (
              <img
                src={leftImage}
                alt="Ticket visual"
                className="object-contain w-full h-full drop-shadow-md hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
                Image Space
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{leftTitle}</h3>

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#E60000]">
              Rs. {PRICE_REGULAR}/-
            </p>
            {/* NEW: Dynamic Coupon Tag */}
            <span className="mt-2 text-[0.7rem]  tracking-wider font-bold text-green-700 bg-green-100/80 px-2.5 py-1 rounded-md border border-green-200 flex items-center gap-1.5 shadow-sm">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              Rs. {PRICE_COUPON}/- with Coupon Code
            </span>
          </div>
        </div>

        {/* Notch cutouts */}
        <div className="hidden md:block absolute top-0 left-[33.33%] w-8 h-8 bg-[#000000] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />
        <div className="hidden md:block absolute bottom-0 left-[33.33%] w-8 h-8 bg-[#000000] rounded-full transform -translate-x-1/2 translate-y-1/2 z-10" />

        {/* Right Main */}
        <div className="w-full md:w-2/3 p-8 flex flex-col justify-between items-center bg-gradient-to-b from-white to-[#f0f0f0]">
          <div className="text-center w-full mb-8 mt-2 flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-800 tracking-wide mb-1">
              TEDx IITRoorkee 2026
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest text-black mb-6 uppercase">
              Zephyr of Change
            </h2>

            {/* Opens modal instead of direct link */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#E60000] hover:bg-red-700 text-white font-semibold py-2.5 px-8 rounded shadow-[0_4px_15px_rgba(230,0,0,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get Your Ticket
            </button>

            {/* NEW: Coupon Helper Text */}
            <p className="text-[11px] text-gray-500 font-medium mt-3 uppercase tracking-wider">
              *Apply coupon code on the next step
            </p>
          </div>

          {/* Footer details */}
          <div className="w-full flex flex-col border-t border-gray-300 pt-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full pb-4 border-b border-gray-300 gap-4 md:gap-0">
              <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <FaRegCalendarAlt className="text-[#E60000] text-lg" /> Sunday,
                5th April, 2026
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <FaRegClock className="text-[#E60000] text-lg" /> 11:00 AM -
                3:00 PM
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-700 font-medium pt-4">
              <FaMapMarkerAlt className="text-[#E60000] text-lg" />{" "}
              {locationText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function TedxBooking() {
  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden flex flex-col items-center pt-16 pb-20 px-6 md:px-10 font-sans">
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <img
          src={Frame}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider mb-14 text-center">
          <span className="text-white">BUY</span>{" "}
          <span className="text-[#E60000]">NOW</span>
        </h1>

        <div className="w-full flex flex-col items-center">
          <TicketCard
            leftTitle="Price"
            leftImage={tickets}
            locationText="IIT Roorkee, 247667"
          />
        </div>
      </div>
    </div>
  );
}
