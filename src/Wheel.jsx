import React from "react";
import ProgressBar from "./ProgressBar";
import Carousel from "./Carousel";

export default function Wheel() {
  const wheeledRobot = [
    {
      Title: "Perseverance",
      Picture: "https://static.poder360.com.br/2021/02/Mzc2NDkzNA.jpeg",
      Video: "https://www.youtube.com/embed/w-0GMURCDBM?si=2rSn_q5BTDL_C6QV",
      Description:
        "Perseverance is NASA’s most advanced rover, designed to explore the Martian surface, specifically targeting the Jezero Crater to search for signs of ancient life.",
    },
  ];
  return (
    <div className="Box_1">
      <Carousel Pictures={wheeledRobot} />
    </div>
  );
}
