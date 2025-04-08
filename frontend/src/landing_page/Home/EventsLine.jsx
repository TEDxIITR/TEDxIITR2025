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
    date: "TEDxIITRoorkee 2013",
    title: "TEDxIITRoorkee 2013",

    background: "white",
    color: "#fff",
  },
  {
    id: 2,
    type: "work",
    date: "TEDxIITRoorkee 2014",
    title: "Art Director",

    background: "white",
    color: "#fff",
  },
  {
    id: 3,
    type: "work",
    date: "TEDxIITRoorkee 2015",

    description: "User Experience, Visual Design",
    background: "white",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2016",

    description: "User Experience, Visual Design",
    background: "white",
    color: "#fff",
  },
  {
    id: 5,
    type: "work",
    date: "TEDxIITRoorkee 2017",

    description: "User Experience, Visual Design",
    background: "white",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2018",

    description: "User Experience, Visual Design",
    background: "white",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2019",

    description: "User Experience, Visual Design",
    background: "white",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2020",

    description: "User Experience, Visual Design",
    background: "red",
    color: "red",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2021",

    description: "User Experience, Visual Design",
    background: "red",
    color: "red",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2022",

    description: "User Experience, Visual Design",
    background: "red",
    color: "red",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2023",

    description: "User Experience, Visual Design",
    background: "red",
    color: "red",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2024",

    description: "User Experience, Visual Design",
    background: "red",
    color: "red",
  },
  {
    id: 4,
    type: "work",
    date: "TEDxIITRoorkee 2025",

    description: "User Experience, Visual Design",
    background: "#fff",
    color: "#fff",
  },
];

const EventsLine = () => {
  return (
    <div className="w-full lg:w-[65%] flex justify-center align-middle my-auto">
      <VerticalTimeline>
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            contentStyle={{
              background: "#343434",
              backgroundColor: "transparent",
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
              paddingRight: "0rem",
              borderTop: "3px solid white",
              borderLeft: "3px solid white",
              borderRight: "3px solid white",
              fontFamily: "Inter, sans-serif",
              style: "transperant",
              color: event.color,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${event.background}`,
            }}
            // date={event.date}
            iconStyle={{
              background: event.background,
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
