import React, { useState } from 'react'
import style from './style.module.css'
import padlock from '../../assets/Union.svg'
import arrow from '../../assets/Vector 2.svg'
import tick from '../../assets/tick.svg'

export default function Message() {
    const [showMessage, setView] = useState(false)

    const toggleView = () => setView(!showMessage)
    return (
        <div className={style.message}>
            <div className={style.message_icon}>
                <img src={padlock} alt="" />
            </div>
            <div className={style.message_header}>
                <div className={style.message_title} onClick={toggleView}>
                    <span>Why we need your BVN</span>
                    <div className={style.message_toggle}>
                        <span>{!showMessage ? "Show" : "Hide"}</span>
                        <img src={arrow} alt="" className={!showMessage ? style.rotate : ""} />
                    </div>
                </div>
                <div className={`${style.message_info} ${!showMessage ? style.hide_message: ""}`}>
                    <div className={style.message_content}>
                        <p>We only need access to your:</p>
                        {option("fullname")}
                        {option("date of birth")}
                        {option("phone number")}
                        <div className={`border_top sub_header`}>
                            <p>🔐 Your BVN does not give us access to your bank accounts or transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const option = name =>{
    return (
        <div className={style.option_item}>
            <div className={style.option_tick}>
                <img src={tick} alt="" />
            </div>
            <span>{name}</span>
        </div>
    )
}