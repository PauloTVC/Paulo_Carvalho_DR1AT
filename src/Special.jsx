import React from "react";
import Carousel from "./Carousel";

export default function Special() {
  const specialRobots = [
    {
      Title: "Go2 with Wheels",
      Picture:
        "https://alphageouk.com/cdn/shop/files/cdd125a1e6064c5caf25dde9b7452f09_288x238_b6fe1368-b286-4826-a92b-496a6298b046.png",
      Video: "https://www.youtube.com/embed/iaBDDpuJglY?si=o_9yxvcE2gtWBTHE",
      Description:
        "A version of Unitree's Go2 equipped with wheels, combining quadruped walking with wheeled mobility, enhancing its speed and versatility in smoother environments.",
    },
  ];
  return (
    <div className="Box_1">
      <Carousel Pictures={specialRobots} />
    </div>
  );
}
