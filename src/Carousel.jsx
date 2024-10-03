import React, { useState } from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import Card from "./Card";

export default function Carousel({ Pictures = [] }) {
  const [indexImg, setIndexImg] = useState(0);

  const [videoOn, setVideoOn] = useState(false);

  const L = Pictures.length;

  const perc = 100 / L;

  const Next = () => {
    setIndexImg(indexImg === L - 1 ? 0 : indexImg + 1);
  };
  const Previus = () => {
    setIndexImg(indexImg === 0 ? L - 1 : indexImg - 1);
  };

  return (
    <div className="Box_2">
      <Card
        Title={Pictures[indexImg].Title}
        Picture={Pictures[indexImg].Picture}
        Video={Pictures[indexImg].Video}
        Description={Pictures[indexImg].Description}
        Play={setVideoOn}
      />
      <div>
        <Button
          Text={"Previous"}
          onClick={() => Previus()}
          VideoOn={videoOn}
          primary="primary"
          size={"large"}
        />
        <Button
          Text={"Next"}
          onClick={() => Next()}
          VideoOn={videoOn}
          primary="primary"
          size={"large"}
        />
      </div>
      <ProgressBar progress={perc * (indexImg + 1)} />
    </div>
  );
}
