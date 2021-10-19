import React, { Fragment, useState } from "react";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Headingsm from "../../components/Headingsm";
import Input from "../../components/Input";
import Message from "../../components/Message";
import Option from "../../components/Option";

const methodOption = ["bvn", "personal account number"];

export default function VerifyAccount(props) {
  const [method, setMethod] = useState(methodOption[0] || "");
  const setActiveOption = (value) => setMethod(value);

  return (
    <section className="fadein">
       <div className="sub_header">
            <Headingsm text='Select a verification method' />
            <Option
            method={methodOption}
            active={method}
            setActiveOption={setActiveOption}
            />
        </div>
      {
          method === methodOption[0] ?
            <Fragment>
           
                <div className="sub_header">
                    <Headingsm text='Bank Verification Number (11-digits)' />
                    <Input type='text' required={true} name='bvn verification' />
                </div>
                <div className="sub_header">
                    <Message />
                </div>
            </Fragment>
        :
            <Fragment>
                <div className="grid_2">
                    <div className="sub_header">
                        <Headingsm text='Account number' />
                        <Input type='text' required={true} name='Account number' />
                    </div>
                    <div className="sub_header">
                        <Headingsm text='Select Bank' />
                        <Dropdown />
                    </div>
                </div>
            </Fragment>
      }
      <div className="button_container border_top">
        <Button value="Continue" type="primary" event={props.next} />
      </div>
    </section>
  );
}
