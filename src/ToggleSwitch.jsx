import React from "react";
import styled from "styled-components";

const SwitchWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  margin: 2px;
  width: ${({ size }) =>
    size == "small" ? "40px" : size === "medium" ? "60px" : "80px"};
  height: ${({ size }) =>
    size == "small" ? "20px" : size === "medium" ? "30px" : "40px"};
`;

const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isOn }) => (isOn ? "green" : "gray")};
  border-radius: ${({ size }) =>
    size === "small" ? "10px" : size === "medium" ? "15px" : "20px"};
  transition: background-color 1s, transform 1s;

  &:before {
    content: "";
    position: absolute;
    height: ${({ size }) =>
      size === "small" ? "16px" : size === "medium" ? "26px" : "36px"};
    width: ${({ size }) =>
      size === "small" ? "16px" : size === "medium" ? "26px" : "36px"};
    left: ${({ isOn, size }) =>
      isOn
        ? `calc(100% - ${
            size === "small" ? "20px" : size === "medium" ? "30px" : "40px"
          })`
        : "4px"};
    top: 2px;
    background-color: white;
    transition: 1s;
    border-radius: 50%;
  }
`;

const ToggleSwitch = ({ isOn, onToggle, size = "medium" }) => {
  const keyHandle = (ev) => {
    if (ev.key === "" || ev.key === "Enter") {
      onToggle();
    }
  };

  return (
    <SwitchWrapper size={size}>
      <HiddenCheckBox
        checked={isOn}
        onChange={onToggle}
        onKeyDown={keyHandle}
      />
      <Slider isOn={isOn} size={size} />
    </SwitchWrapper>
  );
};

export default ToggleSwitch;
