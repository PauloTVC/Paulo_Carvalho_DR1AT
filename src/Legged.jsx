import React from "react";
import ProgressBar from "./ProgressBar";
import Carousel from "./Carousel";

export default function Legged() {
  const leggedRobots = [
    {
      Title: "Go2",
      Picture: "https://shop.unitree.com/cdn/shop/products/75_900x.jpg",
      Video: "https://www.youtube.com/embed/6zPvT0ig1VM?si=82vPRVsldyUkK-Gr",
      Description:
        "Unitree Robotics’ affordable quadruped robot designed for research, education, and industrial tasks, offering strong mobility and AI-driven obstacle avoidance.",
    },
    {
      Title: "Spot",
      Picture:
        "https://bostondynamics.com/wp-content/uploads/2023/06/spot-climbs-stairs-min.jpg",
      Video: "https://www.youtube.com/embed/wlkCQXHEgjA?si=_7EiHRF2HyggfcJI",
      Description:
        "Boston Dynamics’ robot dog, known for autonomous navigation and versatility, used in industries like construction and public safety for inspection and data collection.",
    },
    {
      Title: "ANYmal",
      Picture:
        "https://eesc.usp.br/comunicacao-admin/wp-content/uploads/2022/09/dest-ANYmal-um-dos-robos-quadrupedes-mais-modernos-do-mundo-1024x769-1.jpeg",
      Video: "https://www.youtube.com/embed/eMUlZkNbANI?si=7P8Cy5OPBYVpqrwB",
      Description:
        "A four-legged robot by ANYbotics, designed for industrial inspections, with advanced mobility to navigate hazardous environments like oil rigs and power plants.",
    },
  ];

  return (
    <div className="Box_1">
      <Carousel Pictures={leggedRobots} />
    </div>
  );
}
