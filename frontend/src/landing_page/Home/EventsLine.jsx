import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const events = [
  {
    id: 1,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2013",
    title: "TEDxIITRoorkee 2013",

    background: "transparent",
    color: "#fff",
  },
  {
    id: 2,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2014",
    title: "Art Director",

    background: "transparent",
    color: "#fff",
  },
  {
    id: 3,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2015",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2016",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "#fff",
  },
  {
    id: 5,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2017",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "#fff",
  },
  {
    id: 6,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2018",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "#fff",
  },
  {
    id: 7,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2019",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "#fff",
  },
  {
    id: 8,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2020",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "red",
  },
  {
    id: 9,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2021",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "red",
  },
  {
    id: 10,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2022",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "red",
  },
  {
    id: 11,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2023",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "red",
  },
  {
    id: 12,
    type: "work",
    iconColor: "black",
    date: "TEDxIITRoorkee 2024",

    description: "User Experience, Visual Design",
    background: "transparent",
    color: "white",
  },
  {
    id: 13,
    type: "work",
    iconColor: "linear-gradient(to top, black, red)",
    date: "TEDxIITRoorkee 2025",

    description: "User Experience, Visual Design",
    background:
      "linear-gradient(90deg,black 0%, rgba(166, 28, 134, 1) 0%, darkred 0%, black 100%, darkred 36%)",
    color: "white",
  },
];

const EventsLine = () => {
  return (
    <div className="w-full md:w-[65%] flex justify-center align-middle my-auto px-10 md:px-0">
      <VerticalTimeline>
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            contentStyle={{
              // background: "#343434",
              background: event.background,
              textAlign: "center",
              fontStyle: "italic",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textJustify: "auto",
              fontSize: "28px",
              paddingTop: "0rem",
              paddingBottom: "0rem",
              paddingLeft: "0rem",
              // lineHeight: "1rem",
              paddingRight: "0rem",
              boxShadow: `${
                event.id == 13
                  ? "box-shadow: 8px 8px 15px -3px rgba(255, 0, 0, 0.6)"
                  : ""
              }`,
              // borderTop: "3px solid white",
              // borderLeft: "3px solid white",
              // borderRight: "3px solid white",
              fontFamily: "Inter, sans-serif",
              style: "transperant",
              color: event.color,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${event.background}`,
            }}
            // date={event.date}
            iconStyle={{
              background: event.iconColor,
              color: event.color,

              width: "20px",
              height: "20px",
              lineHeight: "8px",
              marginLeft: "-10px",
            }}
          >
            <h3>{event.date}</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">
              {event.subtitle}
            </h4>
            <p>{event.description}</p> */}
          </VerticalTimelineElement>
        ))}
        {/* A final timeline element if needed */}
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        /> */}
      </VerticalTimeline>
    </div>
  );
};

export default EventsLine;
