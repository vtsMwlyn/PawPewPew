import React from 'react'

function Relic({ key, name, speciality, image }) {
  return (
    <div
      className='flex flex-col justify-center items-center gap-5'
      key={key}>
      <img
        src={image}
        alt={`${image} image`}
        className='w-25 h-25 drop-shadow-orange-500 transition duration-300 ease-in-out hover:drop-shadow-orange-900 hover:scale-125'
      />
      <div className='flex flex-col items-center gap-2'>
        <p className='uppercase text-white text-xl 2xl:text-2xl outfit-bold text-center'>{name}</p>
        <p className="uppercase text-white text-sm 2xl:text-base poppins-regular text-center">{speciality}</p>
      </div>
    </div>
  )
}

export default Relic