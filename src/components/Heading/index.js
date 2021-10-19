import React from 'react'
import style from './style.module.css'

export default function Heading(props) {
    return (
        <div className={style.heading}>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </div>
    )
}
