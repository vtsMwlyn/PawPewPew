import React from 'react';
import buttons from '../../json/button.json';
import CardButton from './CardButton';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <div className='w-full flex flex-col items-center justify-center relative overflow-hidden px-30 xl:px-55 py-20 gap-10'>

      <div className='grid xl:grid-cols-2 gap-5 xl:gap-15 w-full '>
        <div className='flex xl:hidden flex-col gap-5'>
          <p className='flex text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]'>
            meet tailguards
          </p>
          <p className='flex text-xl lg:text-2xl 2xl:text-3xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24]'>
            Meet the Tailguards: Pipi, Pito, and Toto! Ready to protect their family from Robobeasts
          </p>
        </div>
        <img
          src="splash-art/bg-pito.webp"
          alt="meet tailguards image"
          className='w-full object-cover rounded-2xl border-blueblack border-4'
        />
        <div className='flex flex-col w-full justify-between'>
          <div className='hidden xl:flex flex-col gap-5'>
            <p className='flex text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]'>
              meet tailguards
            </p>
            <p className='flex text-xl lg:text-2xl 2xl:text-3xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24]'>
              Meet the Tailguards: Pipi, Pito, and Toto! Ready to protect their family from Robobeasts
            </p>
          </div>
          <Link
            to={`/alcove#heroes-page`}
            className="w-50 h-12.5 bg-contain bg-no-repeat bg-center flex items-center justify-center cursor-pointer group no-underline"
            style={{ backgroundImage: `url(button/button-discover.webp)` }}
          >
            <p className="inline-flex items-center gap-1 outfit-medium text-white group-hover:text-shadow-[-1px_2px_0px_#0F1B24] transition-all">
              Meet The Tailguards
              <span className="hidden group-hover:inline-block">→</span>
            </p>
          </Link>
        </div>
      </div>

      <div className='grid xl:grid-cols-2 gap-5 xl:gap-15 w-full '>
        <div className='flex flex-col xl:hidden gap-5'>
          <p className='flex text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]'>
            Relics Index
          </p>
          <p className='flex text-xl lg:text-2xl 2xl:text-3xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24]'>
            Collect powerful artifacts, boost your stats, and unlock game-changing combinations.
          </p>
        </div>
        <img
          src="splash-art/bg-pipi.webp"
          alt="relic image"
          className='w-full block xl:hidden object-cover rounded-2xl border-blueblack border-4'
        />
        <div className='flex flex-col w-full justify-between'>
          <div className=' hidden xl:flex flex-col gap-5'>
            <p className='flex text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]'>
              Relics Index
            </p>
            <p className='flex text-xl lg:text-2xl 2xl:text-3xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24]'>
              Collect powerful artifacts, boost your stats, and unlock game-changing combinations.
            </p>
          </div>
          <Link
            to={`/alcove#relics-page`}
            className="w-50 h-12.5 bg-contain bg-no-repeat bg-center flex items-center justify-center cursor-pointer group no-underline"
            style={{ backgroundImage: `url(button/button-discover.webp)` }}
          >
            <p className="inline-flex items-center gap-1 outfit-medium text-white group-hover:text-shadow-[-1px_2px_0px_#0F1B24] transition-all">
              View Relics Index
              <span className="hidden group-hover:inline-block">→</span>
            </p>
          </Link>
        </div>
        <img
          src="splash-art/bg-pipi.webp"
          alt="relic image"
          className='w-full hidden xl:block object-cover rounded-2xl border-blueblack border-4'
        />
      </div>

      <div className='grid xl:grid-cols-2 gap-5 xl:gap-15 w-full '>
        <div className='flex xl:hidden flex-col gap-5'>
          <p className='flex text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]'>
            explore biomes
          </p>
          <p className='flex text-xl lg:text-2xl 2xl:text-3xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24]'>
            Journey through diverse biomes, conquer regional challenges, and uncover hidden secrets to claim your rewards.
          </p>
        </div>
        <img
          src="splash-art/bg-toto.webp"
          alt="explore biomes image"
          className='w-full object-cover rounded-2xl border-blueblack border-4'
        />
        <div className='flex flex-col w-full justify-between'>
          <div className='hidden xl:flex flex-col gap-5'>
            <p className='flex text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]'>
              explore biomes
            </p>
            <p className='flex text-xl lg:text-2xl 2xl:text-3xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24]'>
              Journey through diverse biomes, conquer regional challenges, and uncover hidden secrets to claim your rewards.
            </p>
          </div>
          <Link
            to={`/alcove#heroes-page`}
            className="w-50 h-12.5 bg-contain bg-no-repeat bg-center flex items-center justify-center cursor-pointer group no-underline"
            style={{ backgroundImage: `url(button/button-discover.webp)` }}
          >
            <p className="inline-flex items-center gap-1 outfit-medium text-white group-hover:text-shadow-[-1px_2px_0px_#0F1B24] transition-all">
              Discover The Biomes
              <span className="hidden group-hover:inline-block">→</span>
            </p>
          </Link>
        </div>
      </div>

      <img
        src="splash-art/bg-cobra-blur.webp"
        className="absolute top-0 w-full h-full object-cover object-center -z-1 bg-blueblack"
      />
    </div>
  )
}
