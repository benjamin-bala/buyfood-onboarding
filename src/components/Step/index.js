import React from 'react'
import style from './style.module.css'

export default function Step(props) {
    return (
        <div className={style.step}>
            <p>Step {`${props.from || ''}/${props.to || ''}`}</p>
        </div>
    )
}
