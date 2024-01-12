import Fade from "react-reveal/Fade";
import { OrganizationCard } from "./OrganizationCard";
import React from "react";
import { organizationsData } from "../../data/organizations";

export default function Organizations() {
  return (
    <div className="mb-8 mt-20">
      <Fade up>
        <div>
          <h1 className="heading-main">Organizations</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="flex w-full flex-wrap">
          {organizationsData.map((organization, index) => (
            <OrganizationCard organization={organization} key={index} />
          ))}
        </div>
      </Fade>
    </div>
  );
}
