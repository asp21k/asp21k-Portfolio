import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import React from "react";
import { RecommendationCard } from "./RecommendationCard";
import { recommendationsData } from "../../data/recommendations";
import { useState } from "react";

export default function Recommendations() {
  const [current, setCurrent] = useState(recommendationsData[0]);

  const [active, setActive] = useState(0);

  const clickHandler = (event) => {
    setCurrent(
      recommendationsData[event.target.getAttribute("data-recommendation")]
    );
    setActive(parseInt(event.target.getAttribute("data-recommendation")));
  };

  const handlePrev = () => {
    if (active > 0) {
      setCurrent(recommendationsData[active - 1]);
      setActive(active - 1);
    } else {
      setCurrent(recommendationsData[recommendationsData.length - 1]);
      setActive(recommendationsData.length - 1);
    }
  };

  const handleNext = () => {
    if (active < recommendationsData.length - 1) {
      setCurrent(recommendationsData[active + 1]);
      setActive(active + 1);
    } else {
      setCurrent(recommendationsData[0]);
      setActive(0);
    }
  };

  return (
    <div className="mt-20 mx-3">
      <Fade up>
        <h1 className="heading-tagline">WHAT MY SENIORS SAY</h1>
        <div>
          <a
            href="https://www.linkedin.com/in/atharva-pardeshi-01054b237/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="heading-main">Recommendations</h1>
          </a>
        </div>
      </Fade>

      <Fade up>
        <div className="mt-20 grid grid-cols-1 gap-8">
          <RecommendationCard recommendation={current} />
        </div>
      </Fade>
      <Fade up>
        <div>
          {recommendationsData.length > 1 ? (
            <div className="flex flex-row justify-between py-4 mt-2">
              <FaChevronLeft
                className="h-6 w-6 cursor-pointer transition duration-300 ease-in-out text-gray-300 hover:text-yellow-400"
                onClick={() => {
                  handlePrev();
                }}
              >
                Prev
              </FaChevronLeft>

              <div className="flex flex-row justify-center space-x-2">
                {recommendationsData.map((recommendation, index) => (
                  <span
                    className={`h-4 w-4 rounded-full cursor-pointer transition duration-300 ease-in-out ${
                      index === active
                        ? `bg-gray-300 hover:bg-yellow-400`
                        : `border-gray-300 hover:border-yellow-400 border`
                    }`}
                    onClick={(event) => clickHandler(event)}
                    data-recommendation={index}
                    key={index}
                  ></span>
                ))}
              </div>

              <FaChevronRight
                className="h-6 w-6 cursor-pointer transition duration-300 ease-in-out text-gray-300 hover:text-yellow-400"
                onClick={handleNext}
              >
                Next
              </FaChevronRight>
            </div>
          ) : (
            <div className="flex flex-row justify-center space-x-2 py-4 mt-2">
              {recommendationsData.map((recommendation, index) => (
                <span
                  className={`h-4 w-4 rounded-full cursor-pointer transition duration-300 ease-in-out ${
                    index === active
                      ? `bg-gray-300 hover:bg-yellow-400`
                      : `border-gray-300 hover:border-yellow-400 border`
                  }`}
                  onClick={(event) => clickHandler(event)}
                  data-recommendation={index}
                  key={index}
                ></span>
              ))}
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
}
