import React from "react";
import styles from "./ButtonBrandOutline.module.css";

export const ButtonBrandOutline = ({
  fn,
  cont,
  image,
  type = "button",
  disable = false,
}) => {
  return (
    <button
      className={styles.buttonOutline}
      onClick={fn}
      type={type}
      disabled={disable}
    >
      {image && <img src={image} alt="main-logo" />} {cont}
    </button>
  );
};
