import React from 'react'
import style from './style.module.css'
import onboardingImage from '../../assets/onboarding-image.png'

export default function Imagecard() {
    return (
        <div className={style.image_card}>
            <img src={onboardingImage} alt="" />
        </div>
    )
}
