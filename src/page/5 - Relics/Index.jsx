import React from 'react'
import Relics from '../../json/relics.json'
import Relic from './Relic'

function Index() {
  return (
    <div
      className="flex flex-col items-center relative gap-10 py-10"
      id='relics-page'
    >

      <div className="flex flex-col text-4xl lg:text-5xl gap-5 2xl:text-6xl w-1/2 text-white">
        <h1 className="flex justify-center text-center text-4xl lg:text-5xl 2xl:text-6xl uppercase text-shadow-[-4px_4px_0px_#0F1B24]">
          Relics
        </h1>
        <p className="flex justify-center text-center text-lg 2xl:text-2xl poppins-medium text-shadow-[-2px_3px_0px_#0F1B24]">
          Upgrade your Tailguard's abilities and defeat the Robo-Beasts with a variety of combinations
        </p>
      </div>

      <div className='w-9/10 grid grid-cols-5 grid-rows-5 place-items-center overflow-hidden py-10 px-5 rounded-4xl bg-black/50 mb-30'>
        {Relics.map((relic) => {
          return (
            <Relic
              key={relic.id}
              name={relic.name}
              image={relic.image}
              speciality={relic.speciality}
            />)
        })}
      </div>

      <img
        src="splash-art/bg-cobra-blur.webp"
        className="absolute top-0 w-full h-full object-cover object-center -z-1 bg-blueblack"
      />
    </div>
  )
}

export default Index