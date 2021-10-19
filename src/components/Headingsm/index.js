import React from 'react'
import style from './style.module.css'

export default function Headingsm(props) {
    return <p className={style.heading_sm || ''}>{props.text}</p>
}
