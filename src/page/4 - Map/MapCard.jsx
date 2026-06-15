export default function MapCard({ MapJson, selectedMap, setSelectedMap }) {
  return (
    <div className="w-full flex px-5 gap-5 2xl:gap-10 justify-center absolute bottom-15">
      {MapJson.map((location) => {
        const isSelected = selectedMap?.name === location.name;
        return (
          <div
            key={location.id}
            className={`flex rounded-xl relative 
              ${isSelected ? 'scale-110 origin-bottom hover:scale-120 bg-ungupink' : 'bg-blueblack hover:bg-ungupink'}
              group w-40 lg:w-50 2xl:w-65 h-21 lg:h-30 2xl:h-35 
              transition-transform ease-out duration-400 hover:scale-110 p-1.5 drop-shadow-[-1px_3px_0px_#0F1B24] lg:drop-shadow-[-2px_6px_0px_#0F1B24]`}
          >

            <img
              src={location.image}
              alt={location.name}
              className={`w-full rounded-lg`}
            />
            <button
              type="button"
              className="flex w-full h-full justify-center items-end absolute left-0 bottom-1 z-5"
              onClick={() => setSelectedMap(location)}
            >
              <div className={`
                px-5 lg:px-10 py-1 lg:py-2
              `}>
                <img src={location.button} alt={location.name} className="w-20 lg:w-25 2xl:w-35" />
              </div>
            </button>
          </div>
        );
      })}
    </div>
  )
}