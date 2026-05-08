const Map = () => {
  return (
    <div className="relative w-full h-400">
      <img src="/bg-map-gemini.png" alt="map" className="w-full object-cover absolute inset-0 -z-5 h-400 w-full" />
      <div className="flex gap-10 justify-center items-end p-50 h-400">
        <img src="/map-sahara.png" alt="map" className="w-50 hover:scale-125 transition-transform duration-200" />
        <img src="/map-bali.png" alt="map" className="w-50 hover:scale-125 transition-transform duration-200" />
        <img src="/map-amazon.png" alt="map" className="w-50 hover:scale-125 transition-transform duration-200" />
        <img src="/map-alaska.png" alt="map" className="w-50 hover:scale-125 transition-transform duration-200" />
      </div>
    </div>
  )
}

export default Map