import React from "react";
import style from "./style.module.css";

export default function Button(props) {
  return (
    <div
      className={`${style.button} ${
        props.type && props.type === "primary" ? style.primary : style.secondary
      }`}
      onClick={props.event}
    >
      {props.value}
    </div>
  );
}
