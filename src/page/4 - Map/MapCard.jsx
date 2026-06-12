export default function MapCard({ MapJson, selectedMap, setSelectedMap }) {
  return (
    <div className="w-full flex px-5 gap-5 2xl:gap-10 justify-center absolute bottom-15">
      {MapJson.map((location) => {
        const isSelected = selectedMap?.name === location.name;
        return (
          <div
            key={location.id}
            className={`flex rounded-xl relative 
              ${isSelected ? 'scale-110 origin-bottom' : ''}
              group w-40 lg:w-65 h-21 lg:h-35 
              transition-transform ease-out duration-400 hover:scale-120`}
          >

            <img
              src={location.image}
              alt={location.name}
              className={`absolute inset-0 -z-5 w-full 
                rounded-2xl border-4 lg:border-8 border-bluedark`}
            />
            <button
              type="button"
              className="flex w-full h-full justify-center items-end"
              onClick={() => setSelectedMap(location)}
            >
              <h2 className={`
                gap-4 bg-hijaubaru border-4 lg:border-8 border-bluedark 
                ${isSelected ? 'bg-ungupink' : 'group-hover:bg-ungupink'}
                rounded-full text-xs lg:text-base px-5 lg:px-10 py-1 lg:py-2 
                text-shadow-[-2px_3px_0px_#0F1B24] text-white
              `}>
                {/* Ganti selectedMap jadi location */}
                {location.name}
              </h2>
            </button>
          </div>
        );
      })}
    </div>
  )
}