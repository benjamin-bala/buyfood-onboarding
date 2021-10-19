import React, { useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Imagecard from "../../components/Imagecard";
import Progress from "../../components/Progress";
import Step from "../../components/Step";
import Category from "../Category";
import Social from "../Social";
import VerifyAccount from "../VerifyAccount";
import style from "./style.module.css";


const pages = ["Verify account", "social handles", "business category"]

export default function Onboarding() {

    const [steps,setSteps] = useState(1)

    const nextStep = () => {
        if(steps === 3) return steps
        else setSteps(steps + 1)
    }

  return (
    <div className={`${style.onboarding} fadein`}>
        <aside>
            <Imagecard />
        </aside>
        <main>
            <div className="button_container hide">
                <Button value="Logout" type="secondary" />
            </div>
            <div className="header">
                <Progress steps={steps} progress={pages}/>
                <div className='header_title'>
                <Step from={steps} to={pages.length} />
                {
                    steps === 3 ?
                        <Heading title='Business category' />
                    : steps === 2 ?
                    <Heading title='Social Handles' paragraph="Enter your business social media handles" />
                    :
                    <Heading title='Verify account' /> 
                }
                </div>
            </div>
            {
                steps === 3 ?
                <Category next={nextStep}/>
                : steps === 2 ?
                <Social next={nextStep}/>
                :
                <VerifyAccount next={nextStep}/>
            }
            
        </main>
      
    </div>
  );
}
