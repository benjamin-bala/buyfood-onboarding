import React from "react";
import style from "./style.module.css";

export default function Input(props) {
  return (
    <div className={style.input_box}>
      {props.icon && (
        <div className={style.input_icon}>
          <span>{props.icon}</span>
        </div>
      )}
      <input
        type={props.type || "text"}
        required={props.isRequired || false}
        maxLength={props.max || "false"}
        name={props.name || ''}
      />
    </div>
  );
}
