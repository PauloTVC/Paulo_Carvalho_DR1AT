import React from "react";
import styles from "./Button.module.css";

export default function Button({
  primary,
  size,
  onClick,
  Text,
  VideoOn = false,
}) {
  return (
    <button
      className={`${
        VideoOn
          ? styles.play
          : primary === "primary"
          ? styles.primary
          : primary === "secundary"
          ? styles.secundary
          : styles.default
      } ${
        size === "large"
          ? styles.large
          : size === "medium"
          ? styles.medium
          : styles.small
      }`}
      onClick={onClick}
    >
      {Text}
    </button>
  );
}
