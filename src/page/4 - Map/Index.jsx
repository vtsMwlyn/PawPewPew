import MapJson from '../../json/map.json'
import { useState, useEffect, useRef } from 'react'
import MapCard from './MapCard';

export default function Map() {
  const [selectedMap, setSelectedMap] = useState(MapJson[0]);
  const mapNameRef = useRef(null);

  useEffect(() => {
    const el = mapNameRef.current;
    if (!el) return;

    el.classList.add('opacity-0', '-translate-x-10', 'transition-none');

    void el.offsetHeight;

    requestAnimationFrame(() => {
      el.classList.remove('transition-none');
      el.classList.add('transition-all', 'duration-500', 'ease-out');
      el.classList.remove('opacity-0', '-translate-x-10');
    });

    return () => {
      el.classList.remove(
        'opacity-0', '-translate-x-10',
        'transition-all', 'duration-500', 'ease-out', 'transition-none'
      );
    };
  }, [selectedMap]);

  return (
    <div className="relative w-full h-200 lg:h-300 2xl:h-400" id='biomes-page'>
      <img
        src={selectedMap.background} alt="map"
        className="w-full object-cover absolute inset-0 -z-5 h-full"
      />

      <div className="w-full flex flex-col items-center justify-center h-full py-30 lg:py-80 2xl:py-120">
        <h1 className="absolute top-30 text-4xl lg:text-5xl 2xl:text-6xl text-white 
          uppercase text-shadow-[-2px_6px_0px_#0F1B24]">
          Biomes
        </h1>

        <div className="w-11/12 md:w-3/4 h-full flex flex-col items-center gap-10 lg:flex-row mb-10">
          <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col items-center lg:items-start gap-6 h-full justify-end" ref={mapNameRef}>
            <h2 className='text-xl 2xl:text-3xl uppercase tracking-wider text-shadow-[-1px_4px_0px_#0F1B24] text-white'>
              {selectedMap.name}
            </h2>
            <p className='text-sm lg:text-base 2xl:text-xl comic-relief-bold text-shadow-[-1px_4px_0px_#0F1B24] text-white'>
              {selectedMap.desc}
            </p>
          </div>

          <div className="w-full lg:w-1/2 xl:w-2/3 flex flex-col items-center lg:items-end gap-6 h-full justify-start">
            <h2 className='text-xl 2xl:text-3xl uppercase tracking-wider text-shadow-[-1px_4px_0px_#0F1B24] text-white'>
              Enemies Encountered
            </h2>
            <div key={selectedMap.name} className="w-full xl:w-1/2 grid grid-cols-6 lg:grid-cols-3 gap-4 mt-6">
              {selectedMap.enemies.map((enemy, index) => (
                <div
                  key={index}
                  className="w-full aspect-square border-4 border-black rounded-xl overflow-hidden animate-pop-up opacity-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img src={enemy.image} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <MapCard
          selectedMap={selectedMap}
          setSelectedMap={setSelectedMap}
          MapJson={MapJson}
        />
      </div>
    </div>
  )
}