import React, { useState } from "react";

function ProgressBar({ progress, color = "steelblue", height = 20 }) {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    border: "1px solid #ccc",
    height: `${height}px`,
    position: "relative",
  };

  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: color,
    height: "100%",
    transition: "0.3s",
  };

  const textStyle = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "transform(-50%,-50%)",
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}>
        <div style={textStyle}>{progress.toFixed(2)}%</div>
      </div>
    </div>
  );
}

export default ProgressBar;
