import React from "react";
import Speakers from "./Speakers";
import Speakers2026 from "./Speakers2026";
const SpearkersPage = () => {
  return (
    <div
      className="lg:min-h-screen w-full"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      {/* <Speakers /> */}
      <Speakers2026 />
    </div>
  );
};

export default SpearkersPage;
