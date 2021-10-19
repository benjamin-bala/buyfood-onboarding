import React, { useState } from "react";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Headingsm from "../../components/Headingsm";
import Option from "../../components/Option";

const methodOption = ["yes", "no"];

export default function Category(props) {
  const [method, setMethod] = useState(methodOption[0] || "");
  const setActiveOption = (value) => setMethod(value);

  return (
    <section className="fadein">
      <div className='grid_2'>
        <div className='sub_header'>
          <Headingsm text='Type of your business' />
          <Dropdown />
        </div>
        <div className='sub_header'>
          <Headingsm text='Business category' />
          <Dropdown />
        </div>
      </div>

      <div className='sub_header'>
        <Headingsm text='Do you use pos machine for your business?' />
        <Option
          method={methodOption}
          active={method}
          setActiveOption={setActiveOption}
        />
      </div>

      <div className="button_container border_top">
        <Button value="Complete" type="primary" event={props.next} />
      </div>
    </section>
  );
}
