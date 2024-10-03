import React from "react";
import Carousel from "./Carousel";

export default function Sea() {
  const maritimeRobot = [
    {
      Title: "MantaRay",
      Picture:
        "https://static.wixstatic.com/media/36a213_744fe0137842434a98f9ea208942dada~mv2.png/v1/fill/w_1170,h_702,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/MantaRay%20web%20shadow.png",
      Video: "https://www.youtube.com/embed/OoXFdf2sWLE?si=XaVdIeEOzBPQ0Qp_",
      Description:
        "The Manta Ray is an autonomous underwater vehicle (AUV) developed by Northrop Grumman for long-range, energy-efficient missions. It uses glider-like propulsion for ocean mapping and surveillance, aligning with the goals of companies like PXGEO in marine exploration.",
    },
  ];

  return (
    <div className="Box_1">
      <Carousel Pictures={maritimeRobot} />
    </div>
  );
}
