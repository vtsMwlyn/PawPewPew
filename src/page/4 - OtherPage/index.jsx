import React from 'react';
import buttons from '../../json/button.json';
import CardButton from '../../components/CardButton';

export default function index() {
  return (
    <div className='flex flex-col gap-5 p-10'>
      {buttons.map((button) => {
        return (
          <CardButton
            title={button.title}
            desk={button.desk}
            buttonImg={button.buttonImg}
            image={button.image}
          />)
      })}
    </div>
  )
}
