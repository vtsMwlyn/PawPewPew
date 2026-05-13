import MapCard from '../components/MapCard'
import MapJson from '../json/map.json'
import {useState} from 'react'

const Map = () => {
  const [selectedMap, setSelectedMap] = useState(MapJson[0]);
  return (
    <div className="relative w-full h-400">
      <img 
        src={selectedMap.background} alt="map" 
        className="w-full object-cover absolute inset-0 -z-5 h-400"
      />
      <MapCard 
        selectedMap = {selectedMap}
        setSelectedMap = {setSelectedMap}
        MapJson = {MapJson}
      />
    </div>
  )
}

export default Map