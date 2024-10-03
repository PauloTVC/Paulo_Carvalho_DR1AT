import React from "react";
import ProgressBar from "./ProgressBar";
import Carousel from "./Carousel";

export default function TreadTank() {
  const treadRobot = [
    {
      Title: "Tupã Ex",
      Picture:
        "https://instor.com.br/wp-content/uploads/2022/07/Instor_Tupa_EX-removebg-preview.png",
      Video: "https://www.youtube.com/embed/2_EeSCemwg8?si=xF3O7u9b94QT1MFl",
      Description:
        "The Tupã Ex is an autonomous robot by Instor designed for inspecting hazardous environments, detecting gas leaks, corrosion, and performing 3D visual inspections with 6 hours of autonomy.",
    },
  ];
  return (
    <div className="Box_1">
      <Carousel Pictures={treadRobot} />
    </div>
  );
}
