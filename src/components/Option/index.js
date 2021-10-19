import React from "react";
import style from "./style.module.css";

export default function Option(props) {
  return (
    <div className={style.option}>
      {props.method &&
        props.method.map((option) => {
          return (
            <div
            key={option}
              className={`${style.option_selection} ${
                option === props.active ? style.active_selection : null
              }`}
              onClick={() =>props.setActiveOption(option)}
            >{option}</div>
          );
        })}
    </div>
  );
}
