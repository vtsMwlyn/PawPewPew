import React from 'react'
import Relics from '../../json/relics.json'

function Index() {
  return (
    <div className='w-full flex flex-col items-center justify-center relative overflow-hidden py-20 gap-10'>

      {Relics.map((relic) => {
        return (
          <Relics
            name={relic.name}
            image={relic.image}
            speciality={relic.speciality}
          />)
      })}

      <img
        src="splash-art/bg-cobra-blur.webp"
        className="absolute top-0 w-full h-full object-cover object-center -z-1 bg-blueblack"
      />
    </div>
  )
}

export default Index