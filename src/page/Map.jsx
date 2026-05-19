import MapCard from '../components/MapCard'
import MapJson from '../json/map.json'
import {useState} from 'react'

export default function Map(){
  const [selectedMap, setSelectedMap] = useState(MapJson[0]);

  return (
    <div className="relative w-full">
      <img 
        src={selectedMap.background} alt="map" 
        className="w-full object-cover absolute inset-0 -z-5 h-200 2xl:h-400"
      />
      <MapCard 
        selectedMap = {selectedMap}
        setSelectedMap = {setSelectedMap}
        MapJson = {MapJson}
      />
    </div>
  )
}