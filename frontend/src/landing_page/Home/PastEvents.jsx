import { useState } from "react";

export default function PastEvents() {
  const events = [
    {
      id: 1,
      image: "/PrevEvents/Event1.webp",
      title: "Event 2024: Chai Pe Charcha",
    },
    {
      id: 2,
      image: "/PrevEvents/Event2.webp",
      title: "Event 2024: Abhyuday",
    },
    {
      id: 3,
      image: "/PrevEvents/Event3.webp",
      title: "Event 2024: Defying Defiance",
    },
  ];

  return (
    <div className="flex flex-col md:justify-evenly w-full lg:min-h-screen justify-center items-center px-4 pb-20">
      <h1
        className="text-[#d9d9d9] text-6xl  md:text-7xl lg:text-8xl text-center mb-16  font-passion font-extrabold leading-normal"
        style={{
          background:
            "linear-gradient(180deg, rgba(110, 110, 110, 0.46) 46.23%, rgba(212, 212, 212, 0.00) 90.52%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "10rem",
        }}
      >
        Past Events
      </h1>

      <div
        className={`flex flex-col md:flex-row justify-evenly items-center gap-8 w-full max-w-6xl`}
      >
        {events.map((event) => (
          <EventCard key={event.id} image={event.image} title={event.title} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ image, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[95%] md:w-[45%] lg:w-[40%] xl:w-[35%] relative transition-all duration-200 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className={`border-2 object-cover object-center w-full rounded-lg transition-all duration-200 ${
          isHovered ? "border-red-700" : "border-white"
        }`}
      />
      <div
        className={`absolute  bg-gradient-to-t from-black to-black/30 text-white p-4 rounded-lg border-3 transition-all duration-200 ${
          isHovered
            ? "bg-red-800 border-red-700 left-0 right-0 bottom-0 border-none"
            : "border-gray-900 bottom-1 left-1 right-1"
        }`}
      >
        <div className="text-lg font-semibold">{title}</div>
      </div>
    </div>
  );
}
