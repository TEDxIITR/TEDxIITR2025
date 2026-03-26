import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero2026 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Initial state ──────────────────────────────────────────────
      gsap.set(imageRef.current, {
        scale: 1.18,
        opacity: 0,
        filter: "brightness(0) saturate(0) contrast(1.4)",
        transformOrigin: "center center",
      });

      const tl = gsap.timeline();

      // ── Phase 1: Camera-iris flash (0 → 0.25s) ────────────────────
      // Mimics a cinema projector snapping on — pure white overexposure
      tl.to(imageRef.current, {
        opacity: 1,
        filter: "brightness(4) saturate(0) contrast(1.4)",
        duration: 0.22,
        ease: "power3.in",
      })

        // ── Phase 2: Cinematic pull-back + colour bloom (0.22 → 2.6s) ──
        // Scale settles, overexposure burns down, colour saturates in
        .to(imageRef.current, {
          scale: 1,
          filter: "brightness(1) saturate(1) contrast(1)",
          duration: 2.4,
          ease: "expo.out",
        })

        // ── Phase 3: Infinite Ken Burns drift (2.6s → ∞) ──────────────
        // Ultra-slow organic zoom — keeps the frame alive without distraction
        .to(imageRef.current, {
          scale: 1.06,
          duration: 12,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden bg-black">
      <div
        ref={imageRef}
        className="w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url('/HeroPlaceholder2026.webp')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default Hero2026;
