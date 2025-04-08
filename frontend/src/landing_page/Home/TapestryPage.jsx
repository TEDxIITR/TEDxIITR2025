import React from "react";
import Tapestry from "./Tapestry";

const TapestryPage = () => {
  return (
    <div
      className="min-h-screen w-full p-5"
      style={{
        background:
          "linear-gradient(90deg, rgba(242, 0, 0, 0.16) 0%, rgba(255, 54, 54, 0.00) 100%)",
      }}
    >
      <Tapestry />
    </div>
  );
};

export default TapestryPage;
