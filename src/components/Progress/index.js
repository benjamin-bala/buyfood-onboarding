import React from "react";
import style from "./style.module.css";

export default function Progress(props) {
  return (
    <div className={`${style.progress} border_bottom`}>
      {props.progress.map((page, index) => {
          let step = index + 1
        return (
          <div className={`${style.progress__option}`} key={page}>
            <div
              className={`${style.progress__box} ${
                props.steps === index + 1 ? style.active : null
              }
              ${props.step > step ? style.done: null}
              `
            }
            >
              {
                  props.steps > step ?
                  <div className={`${style.tick}`}></div>
                  :
                  <span>{step}</span>
              }
            </div>
            <div className={`${style.progress__box__label} ${
                props.steps === index + 1 ? style.active_text : null
              }`}>
              <span>{page}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
