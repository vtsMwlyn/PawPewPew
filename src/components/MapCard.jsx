export default function MapCard({MapJson, selectedMap, setSelectedMap}) {
  return (
    <div className="flex gap-10 justify-center items-end p-60 h-400">
      {MapJson.map((location) => {
        const isSelected = selectedMap?.name === location.name;
        return (
          <div 
            key={location.id} 
            className={`flex rounded-xl relative 
              ${isSelected ? 'scale-110 origin-bottom' : ''}
              group w-65 h-35 :origin-bottom 
              transition-transform duration-500`}
          >
            
            <img 
              src={location.image} 
              alt={location.name} 
              className={`absolute inset-0 -z-5 w-65 
                rounded-2xl border-8 border-bluedark`} 
            />
            <button 
              type="button"
              className="flex w-full h-full justify-center items-end" 
              onClick={() => setSelectedMap(location)}
            >
              <h2 className={`
                gap-4 bg-hijaubaru border-8 border-bluedark 
                ${isSelected ? 'bg-ungupink' : 'group-hover:bg-ungupink'}
                rounded-full text-base px-10 py-2 
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