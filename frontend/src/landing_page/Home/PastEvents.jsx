import React from "react";
const PastEvents = () => {
  const events = [
    {
      id: 1,
      title: "Chai Pe Charcha",
      date: "4 NOV",
      time: "5:30 PM",
      venue: "MAC AUDI",
      image: "/placeholder.svg?height=600&width=450",
      year: "2024",
    },
    {
      id: 2,
      title: "Abhyuday",
      date: "10th March",
      time: "5 PM",
      venue: "MAC Audi",
      image: "/placeholder.svg?height=600&width=450",
      year: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-wider">
        PAST EVENTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {events.map((event) => (
          <div
            key={event.id}
            className="card bg-[#111111] border border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="relative">
              {/* TEDx Logo */}
              <div className="absolute top-4 right-4 flex items-center">
                <span className="text-xs font-bold mr-1">TEDx</span>
                <span className="text-xs text-red-500 font-bold">
                  IITRoorkee
                </span>
              </div>

              {/* Event Title Section */}
              <div className="p-6 pt-12">
                {event.id === 1 ? (
                  <div>
                    <div className="text-sm mb-1">
                      <span className="text-gray-400">Pre</span>
                      <span className="text-red-500 font-bold">TED</span>
                    </div>
                    <h2 className="text-3xl font-bold">
                      CHA<span className="text-yellow-500">☕</span>PE CHARCHA
                    </h2>
                  </div>
                ) : (
                  <div>
                    <div className="text-sm mb-1">
                      <span className="text-gray-400">
                        TEDxIITRoorkee x Sangarsh Presents
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-red-500">
                      ABHYUDAY
                    </h2>
                  </div>
                )}

                {/* Event Details */}
                <div className="flex items-center mt-4 text-sm space-x-4">
                  <div className="flex items-center">
                    <span className="mr-1">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">⏰</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">📍</span>
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Event Image */}
              <div className="h-48 bg-gray-800 relative">
                {event.id === 1 ? (
                  <div className="absolute inset-0 flex justify-center">
                    <div className="grid grid-cols-4 w-full h-full">
                      <div className="bg-gray-700 border-r border-gray-600"></div>
                      <div className="bg-gray-700 border-r border-gray-600"></div>
                      <div className="bg-gray-700 border-r border-gray-600"></div>
                      <div className="bg-gray-700"></div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex justify-center">
                    <div className="grid grid-cols-3 w-full h-full">
                      <div className="bg-gray-700 border-r border-gray-600"></div>
                      <div className="bg-gray-700 border-r border-gray-600"></div>
                      <div className="bg-gray-700"></div>
                    </div>
                  </div>
                )}

                {/* Red lines for the second card */}
                {event.id === 2 && (
                  <div className="absolute inset-0">
                    <div className="w-full h-full overflow-hidden">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-[1px] bg-red-500 opacity-30"
                          style={{
                            width: "150%",
                            left: "-25%",
                            top: `${i * 10}%`,
                            transform: `rotate(${i % 2 === 0 ? 15 : -15}deg)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Event Footer */}
            <div className="p-4 bg-[#0a0a0a]">
              <p className="font-semibold">
                <span className="text-gray-400">Event {event.year}:</span>{" "}
                {event.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
