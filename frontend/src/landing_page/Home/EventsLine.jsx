import React, { useEffect, useRef } from "react";

const events = [
  { id: 1, date: "TEDxIITRoorkee 2013", color: "#fff" },
  { id: 2, date: "TEDxIITRoorkee 2014", color: "#fff" },
  { id: 3, date: "TEDxIITRoorkee 2015", color: "#fff" },
  { id: 4, date: "TEDxIITRoorkee 2016", color: "#fff" },
  { id: 5, date: "TEDxIITRoorkee 2017", color: "#fff" },
  { id: 6, date: "TEDxIITRoorkee 2018", color: "#fff" },
  { id: 7, date: "TEDxIITRoorkee 2019", color: "#fff" },
  { id: 8, date: "TEDxIITRoorkee 2020", color: "red" },
  { id: 9, date: "TEDxIITRoorkee 2021", color: "red" },
  { id: 10, date: "TEDxIITRoorkee 2022", color: "red" },
  { id: 11, date: "TEDxIITRoorkee 2023", color: "red" },
  { id: 12, date: "TEDxIITRoorkee 2024", color: "white" },
  { id: 13, date: "TEDxIITRoorkee 2025", color: "red" },
  { id: 14, date: "TEDxIITRoorkee 2026", color: "white", isCurrent: true },
];

const TED_RED = "#E62B1E";

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

  .tl-header-eyebrow {
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--ted-red);
    margin-bottom: 0.75rem;
  }

  .tl-header-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    font-weight: 300;
    letter-spacing: 0.04em;
    color: #fff;
    line-height: 1.1;
    margin: 0;
  }

  .tl-header-title em {
    font-style: italic;
    color: var(--ted-red);
  }

  .tl-header-line {
    width: 40px;
    height: 2px;
    background: var(--ted-red);
    margin: 1.5rem auto 0;
    border-radius: 2px;
  }

  /* ── LEGEND ── */
  .tl-legend {
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
    align-items: center;
  }

  .tl-legend-item {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .tl-legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .tl-legend-dot.red   { background: var(--ted-red); box-shadow: 0 0 8px var(--ted-red-glow); }
  .tl-legend-dot.white { background: rgba(255,255,255,0.28); border: 1px solid rgba(255,255,255,0.2); }

  /* ── TRACK ── */
  .tl-track {
    position: relative;
    width: 100%;
    max-width: 820px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  /* vertical spine */
  .tl-track::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      var(--spine-color) 8%,
      var(--spine-color) 92%,
      transparent 100%
    );
    z-index: 0;
  }

  /* ── ROW ── */
  .tl-row {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 48px 1fr;
    align-items: center;
    min-height: 72px;
    padding: 10px 0;
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.55s ease, transform 0.55s ease;
    z-index: 1;
  }

  .tl-row.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* node cell */
  .tl-node-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  /* node */
  .tl-node {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid var(--spine-color);
    background: #0a0a0a;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    flex-shrink: 0;
    position: relative;
    z-index: 3;
  }

  .tl-node.red {
    border-color: var(--ted-red);
    background: #1a0808;
    box-shadow: 0 0 0 3px var(--ted-red-soft), 0 0 14px var(--ted-red-glow);
  }

  .tl-node.current {
    width: 20px;
    height: 20px;
    border-color: var(--ted-red);
    background: var(--ted-red);
    box-shadow:
      0 0 0 4px var(--ted-red-soft),
      0 0 22px var(--ted-red-glow),
      0 0 40px rgba(230,43,30,0.18);
    animation: pulse-node 2.4s ease-in-out infinite;
  }

  @keyframes pulse-node {
    0%, 100% { box-shadow: 0 0 0 4px var(--ted-red-soft), 0 0 22px var(--ted-red-glow); }
    50%       { box-shadow: 0 0 0 8px rgba(230,43,30,0.08), 0 0 32px rgba(230,43,30,0.5); }
  }

  /* horizontal connector */
  .tl-connector {
    position: absolute;
    top: 50%;
    height: 1px;
    width: 24px;
    background: var(--spine-color);
    transform: translateY(-50%);
    transition: background 0.3s;
  }

  .tl-connector.left  { right: 100%; }
  .tl-connector.right { left: 100%; }
  .tl-connector.red   { background: rgba(230,43,30,0.35); }

  /* card cell */
  .tl-cell-left  { display: flex; justify-content: flex-end; padding-right: 0; }
  .tl-cell-right { display: flex; justify-content: flex-start; padding-left: 0; }

  /* card */
  .tl-card {
    display: inline-flex;
    align-items: center;
    padding: 0.7rem 1.25rem;
    border-radius: 4px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    cursor: default;
    transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
    max-width: 320px;
  }

  .tl-card:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.055);
  }

  .tl-card.red {
    border-color: var(--card-border-red);
    background: rgba(230,43,30,0.06);
  }

  .tl-card.red:hover {
    background: rgba(230,43,30,0.1);
    box-shadow: 0 4px 24px rgba(230,43,30,0.15);
  }

  .tl-card.current {
    border-color: var(--ted-red);
    background: rgba(230,43,30,0.1);
    box-shadow: 0 0 0 1px rgba(230,43,30,0.2), 0 8px 32px rgba(230,43,30,0.2);
  }

  .tl-card.current:hover {
    box-shadow: 0 0 0 1px rgba(230,43,30,0.4), 0 12px 40px rgba(230,43,30,0.3);
    transform: translateY(-3px);
  }

  /* label */
  .tl-label {
    font-family: 'Rajdhani', sans-serif;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    font-weight: 600;
    letter-spacing: 0.06em;
    line-height: 1;
    transition: color 0.3s;
  }

  .tl-label.white   { color: rgba(255,255,255,0.55); }
  .tl-label.red     { color: var(--ted-red); }
  .tl-label.current { color: #fff; }

  /* current badge */
  .tl-badge {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ted-red);
    border: 1px solid rgba(230,43,30,0.5);
    border-radius: 2px;
    padding: 0.15rem 0.45rem;
    margin-left: 0.9rem;
    white-space: nowrap;
    animation: badge-flicker 3s ease-in-out infinite;
  }

  @keyframes badge-flicker {
    0%, 90%, 100% { opacity: 1; }
    94%            { opacity: 0.5; }
    97%            { opacity: 0.9; }
  }

  /* ── EMPTY SIDE ── */
  .tl-cell-empty { /* intentionally empty side */ }

  /* ── RESPONSIVE: collapse to single column ── */
  @media (max-width: 600px) {
    .tl-track::before {
      left: 20px;
      transform: none;
    }

    .tl-row {
      grid-template-columns: 48px 1fr;
      grid-template-rows: auto;
    }

    /* hide the "other side" empty cell */
    .tl-row .tl-cell-empty,
    .tl-row .tl-cell-left:not(.mobile-right) {
      display: none;
    }

    .tl-node-cell {
      grid-column: 1;
      grid-row: 1;
    }

    .tl-cell-right {
      grid-column: 2;
      grid-row: 1;
      padding-left: 0.5rem;
    }

    .tl-connector.left  { display: none; }
    .tl-connector.right { left: 0; width: 14px; }

    .tl-node-cell {
      justify-content: flex-start;
      padding-left: 13px;
    }

    .tl-card { max-width: 100%; width: 100%; }

    .tl-legend { gap: 1.25rem; }
  }

  /* glow line fill as user scrolls — purely decorative overlay */
  .tl-spine-fill {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background: linear-gradient(to bottom, var(--ted-red) 0%, transparent 100%);
    z-index: 1;
    transition: height 0.1s linear;
  }

  @media (max-width: 600px) {
    .tl-spine-fill { left: 20px; transform: none; }
  }
`;

const isRed = (c) => c === "red";
const isCurrent = (ev) => ev.isCurrent;

const EventsLine = () => {
  const rowRefs = useRef([]);
  const fillRef = useRef(null);
  const trackRef = useRef(null);

  // Intersection Observer for reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );
    rowRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  // Scroll-driven spine fill
  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      const fill = fillRef.current;
      if (!track || !fill) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const pct = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (rect.height + vh * 0.3)),
      );
      fill.style.height = `${pct * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="tl-root">
      <style>{styles}</style>

      {/* Header */}
      <div className="tl-header">
        {/* <p className="tl-header-eyebrow">A decade of ideas worth spreading</p> */}
        <h1 className="text-center text-7xl font-bold">
          OUR <em>Journey</em> THROUGH TIME
        </h1>
        <div className="tl-header-line" />
      </div>

      {/* Legend */}
      <div className="tl-legend">
        <div className="tl-legend-item">
          <span className="tl-legend-dot red" />
          Event happened
        </div>
        <div className="tl-legend-item">
          <span className="tl-legend-dot white" />
          Upcoming / not yet held
        </div>
      </div>

      {/* Timeline track */}
      <div className="tl-track" ref={trackRef}>
        {/* animated spine fill */}
        <div className="tl-spine-fill" ref={fillRef} style={{ height: 0 }} />

        {events.map((ev, i) => {
          const leftSide = i % 2 === 0; // even → card on left, odd → card on right
          const red = isRed(ev.color);
          const curr = isCurrent(ev);
          const nodeClass = `tl-node${red || curr ? ` ${curr ? "current" : "red"}` : ""}`;
          const labelClass = `tl-label ${curr ? "current" : red ? "red" : "white"}`;
          const cardClass = `tl-card${curr ? " current" : red ? " red" : ""}`;
          const connClass = `tl-connector ${red || curr ? " red" : ""}`;

          return (
            <div
              key={ev.id}
              className="tl-row"
              ref={(el) => (rowRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              {/* LEFT CELL */}
              {leftSide ? (
                <div className="tl-cell-left">
                  <div className={cardClass}>
                    <span className={labelClass}>{ev.date}</span>
                    {curr && <span className="tl-badge">UPCOMING</span>}
                  </div>
                </div>
              ) : (
                <div className="tl-cell-empty" />
              )}

              {/* NODE */}
              <div className="tl-node-cell">
                <div className={nodeClass}>
                  {leftSide ? (
                    <span className={`${connClass} left`} />
                  ) : (
                    <span className={`${connClass} right`} />
                  )}
                </div>
              </div>

              {/* RIGHT CELL */}
              {!leftSide ? (
                <div className="tl-cell-right">
                  <div className={cardClass}>
                    <span className={labelClass}>{ev.date}</span>
                    {curr && <span className="tl-badge">UPCOMING</span>}
                  </div>
                </div>
              ) : (
                <div className="tl-cell-empty" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsLine;
