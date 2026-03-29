import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Hero2026 = () => {
  const route = useNavigate();
  const imageRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // ── Inject Playfair Display for the editorial serif title ──────────
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400&display=swap";
    document.head.appendChild(link);

    const ctx = gsap.context(() => {
      // ── Initial states ─────────────────────────────────────────────
      gsap.set(imageRef.current, {
        scale: 1.18,
        opacity: 0,
        filter: "brightness(0) saturate(0) contrast(1.4)",
        transformOrigin: "center center",
      });

      // Title lines start clipped below their container (mask-like reveal)
      gsap.set([line1Ref.current, line2Ref.current], {
        y: 80,
        opacity: 0,
        skewY: 4,
      });

      gsap.set(subtitleRef.current, {
        y: 20,
        opacity: 0,
      });

      gsap.set(buttonsRef.current, {
        x: -30,
        opacity: 0,
      });

      const tl = gsap.timeline();

      // ── Phase 1: Camera-iris flash (0 → 0.22s) ─────────────────────
      tl.to(imageRef.current, {
        opacity: 1,
        filter: "brightness(4) saturate(0) contrast(1.4)",
        duration: 0.22,
        ease: "power3.in",
      })

        // ── Phase 2: Cinematic pull-back + colour bloom (0.22 → 2.6s) ──
        .to(imageRef.current, {
          scale: 1,
          filter: "brightness(1) saturate(1) contrast(1)",
          duration: 2.4,
          ease: "expo.out",
        })

        // ── Phase 3: Title line 1 slams up (overlaps with colour bloom) ─
        .to(
          line1Ref.current,
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.0,
            ease: "expo.out",
          },
          "-=1.8",
        ) // starts 1.8s before phase 2 ends — right in the flash

        // ── Phase 4: Title line 2 follows with a slight stagger ─────────
        .to(
          line2Ref.current,
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.0,
            ease: "expo.out",
          },
          "-=0.75",
        ) // 0.75s after line 1 starts

        // ── Phase 5: Subtitle drifts in ─────────────────────────────────
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4",
        )

        // ── Phase 6: Buttons slide in from left ─────────────────────────
        .to(
          buttonsRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )

        // ── Phase 7: Infinite Ken Burns drift ───────────────────────────
        .to(
          imageRef.current,
          {
            scale: 1.06,
            duration: 12,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
          "-=0.2",
        );
    });

    return () => {
      ctx.revert();
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="w-full  h-[34rem] lg:h-screen overflow-hidden bg-black relative">
      {/* ── Background image with all cinematic animation ── */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/HeroPlaceholder2026.png')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />

      {/* ── Dark vignette so text stays readable over any image ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
        }}
      />

      {/* ── Foreground content ── */}
      <div
        // i want to disable the top-margin after lg
        className="absolute inset-0 flex flex-col top-[8rem] lg:top-0 lg:justify-center"
        style={{ padding: "0 5vw" }}
      >
        {/* Title — overflow hidden on each line acts as a reveal mask */}
        <div style={{ overflow: "hidden" }}>
          <h1
            ref={line1Ref}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              color: "#F5E6D8",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Zephyr of
          </h1>
        </div>

        <div style={{ overflow: "hidden" }}>
          <h1
            ref={line2Ref}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              color: "#F5E6D8",
              lineHeight: 1.05,
              margin: "0 0 1.4rem 0",
              letterSpacing: "-0.02em",
            }}
          >
            Change
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
            color: "rgba(245,230,216,0.80)",
            margin: "0 0 2.2rem 0",
            letterSpacing: "0.03em",
          }}
        >
          Not a storm, but a whisper, the gentle winds of Transformation
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <button
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              padding: "0.65rem 1.5rem",
              backgroundColor: "#E8192C",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "3px",
              transition: "background 0.25s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c41424";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8192C";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onClick={() => route("/ticket")}
          >
            Buy Tickets
          </button>

          <button
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              padding: "0.63rem 1.5rem",
              backgroundColor: "transparent",
              color: "#F5E6D8",
              border: "1px solid rgba(245,230,216,0.60)",
              cursor: "pointer",
              borderRadius: "3px",
              transition:
                "border-color 0.25s ease, color 0.25s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#F5E6D8";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,230,216,0.60)";
              e.currentTarget.style.color = "#F5E6D8";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Buy Merch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2026;
