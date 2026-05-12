import MapCard from '../components/MapCard'
import MapJson from '../json/map.json'

const Map = () => {
  return (
    <div className="relative w-full h-400">
      <img src="/bg-map-gemini.webp" alt="map" className="w-full object-cover absolute inset-0 -z-5 h-400 w-full" />
      <div className="flex gap-10 justify-center items-end p-60 h-400">
        {MapJson.map((location) => (
          <MapCard key={location.id} img={location.image} name={location.name} />
        ))}
      </div>
    </div>
  )
}

export default Map