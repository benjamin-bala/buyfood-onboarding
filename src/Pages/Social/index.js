import React from "react";
import Button from "../../components/Button";
import Headingsm from "../../components/Headingsm";
import Input from "../../components/Input";

export default function Social(props) {
  return (
    <section className="fadein">
      <div className='grid_2'>
        <div className='sub_header'>
          <Headingsm text='Choose your Abeg Tag (required)' />
          <Input icon="@" type='text' required={true} name='abeg tag' />
        </div>
      </div>
      <div className='grid_2'>
        <div className='sub_header'>
          <Headingsm text='Instagram' />
          <Input icon="@" type='text' name='instagram' />
        </div>
        <div className='sub_header'>
          <Headingsm text='Twitter' />
          <Input icon="@" type='text' name='twitter' />
        </div>
      </div>
      <div className="button_container border_top">
        <Button value="Confirm social handles" type="primary" event={props.next} />
      </div>
    </section>
  );
}
