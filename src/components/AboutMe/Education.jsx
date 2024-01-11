import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Fade from "react-reveal/Fade";
import React from "react";
import educationData from "../../data/education.json";

export default function Education() {
  return (
    <div className="my-8">
      <Fade up>
        <div>
          <h1 className="heading-main mb-8 hover:text-orange-600">Education</h1>
        </div>
      </Fade>
      <VerticalTimeline>
        {educationData.map((education, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: "rgba(15, 23, 42, 0.6)", color: "#fff",  }}
              contentArrowStyle={{ borderRight: "7px solid  #1F2937" }}
              date={education.date}
              dateClassName="font-secondary font-medium text-white"
              iconStyle={{
                background: "#ea580c",
                color: "#1F2937",
              }}
              icon={
                <svg
                  className="mx-auto fill-current text-slate-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M 15 3 A 1 1 0 0 0 14.527344 3.1191406 L 0.53710938 10.113281 L 0.53710938 10.115234 A 1 1 0 0 0 0 11 A 1 1 0 0 0 0.53710938 11.884766 L 0.53710938 11.886719 L 14.521484 18.876953 A 1 1 0 0 0 15 19 A 1 1 0 0 0 15.472656 18.880859 L 29.453125 11.890625 A 1 1 0 0 0 29.462891 11.886719 L 29.462891 11.884766 A 1 1 0 0 0 30 11 A 1 1 0 0 0 29.462891 10.115234 L 29.462891 10.113281 L 15.478516 3.1230469 A 1 1 0 0 0 15 3 z M 29 14.353516 L 27 15.353516 L 27 24.277344 C 26.404366 24.623613 26 25.261054 26 26 C 26 27.105 28 30 28 30 C 28 30 30 27.105 30 26 C 30 25.261054 29.595634 24.623613 29 24.277344 L 29 14.353516 z M 6 16.851562 L 6 21 C 6 23.761 10.029 26 15 26 C 19.971 26 24 23.761 24 21 L 24 16.851562 L 16.365234 20.669922 C 16.281234 20.711922 16.197328 20.746391 16.111328 20.775391 C 15.749328 20.924391 15.377 21 15 21 C 14.624 21 14.252578 20.924391 13.892578 20.775391 C 13.805578 20.746391 13.719766 20.710969 13.634766 20.667969 L 6 16.851562 z"></path>
                </svg>
              }
            >
              <h3 className="mb-2 font-primary text-xl font-bold text-orange-600">
                {education.title}
              </h3>
              <h4 className="mb-4 font-secondary text-md font-normal text-white">
                {education.subtitle}
              </h4>
              <h6 className="font-secondary text-md font-normal text-gray-400">
                {education.grade}
              </h6>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{
            background: "#ea580c",
            color: "#1F2937",
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="mx-auto fill-current text-gray-900"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" />
            </svg>
          }
        />
      </VerticalTimeline>
    </div>
  );
}
