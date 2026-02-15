// import React from "react";
// import ThemeIITRoorkee from "../../../public/ThemeIITRoorkee.jpg";
// import ThemeX from "../../../public/ThemeX.png";

// const TextCard = ({ title, text }) => {
//   return (
//     <div
//       className="
//       h-full w-full
//       relative overflow-hidden
//       bg-gradient-to-br from-[#5a0a0a] to-[#e60808]
//       rounded-[2rem]
//       p-8 md:p-10 lg:p-12
//       flex flex-col justify-center
//       shadow-2xl shadow-red-900/20
//     "
//     >
//       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

//       <div className="relative z-10">
//         <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-6 tracking-wide font-serif">
//           {title}
//         </h2>
//         <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed text-justify font-normal">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };

// const ImageCard = ({ src, alt }) => {
//   return (
//     <div className="h-full w-full rounded-[2rem] overflow-hidden relative shadow-2xl bg-neutral-900">
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-all duration-700 ease-in-out"
//       />
//       <div className="absolute inset-0 bg-black/20"></div>
//     </div>
//   );
// };

// const LogoCard = () => {
//   return (
//     <div className="h-full w-full rounded-[2rem] overflow-hidden relative shadow-2xl bg-neutral-900">
//       <img
//         src={ThemeX}
//         alt="TEDxIITRoorkee Logo"
//         className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-700 ease-in-out"
//       />
//       <div className="absolute inset-0 bg-black/20"></div>
//     </div>
//   );
// };

// export default function ThemeSection() {
//   const dummyText =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 lg:p-12">
//       <div className="max-w-7xl w-full mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
//           <div className="lg:col-span-2 h-[320px]">
//             <TextCard title="TEDxIIT ROORKEE" text={dummyText} />
//           </div>

//           <div className="lg:col-span-1 h-[320px]">
//             <ImageCard src={ThemeIITRoorkee} alt="IIT Roorkee Main Building" />
//           </div>

//           <div className="lg:col-span-1 h-[320px]">
//             <LogoCard />
//           </div>

//           <div className="lg:col-span-2 h-[320px]">
//             <TextCard title="ZEPHYR OF CHANGE" text={dummyText} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
