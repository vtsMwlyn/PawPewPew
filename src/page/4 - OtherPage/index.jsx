import React from 'react';
import buttons from '../../json/button.json';
import CardButton from './CardButton';

export default function index() {
  return (
    <div className='w-full flex flex-col items-center justify-center relative overflow-hidden py-20 gap-10'>
      {/* <div className="flex flex-col w-full text-4xl lg:text-5xl 2xl:text-6xl text-white">
        <h1 className="flex justify-center text-4xl lg:text-5xl text-center 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]">
          BIOMES
        </h1>
        <h2 className="flex justify-center text-lg 2xl:text-2xl outfit-medium  text-white text-shadow-[-2px_3px_0px_#0F1B24]">
          A Playful Journey With Heart
        </h2>
      </div> */}

      {buttons.map((button) => {
        return (
          <CardButton
            title={button.title}
            desk={button.desk}
            section={button.section}
            image={button.image}
            text={button.buttonText}
          />)
      })}

      <img
        src="splash-art/bg-cobra-blur.webp"
        className="absolute top-0 w-full h-full object-cover object-center -z-1 bg-blueblack"
      />
    </div>
  )
}
