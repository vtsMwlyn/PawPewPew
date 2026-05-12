export default function MapCard({img, name}) {
  return (
    <div className="flex rounded-xl relative w-65 h-35 ">
      <img src={img} alt={name} 
        className="absolute inset-0 -z-5 w-65 rounded-2xl border-8 border-bluedark" 
      />
      <div className="flex w-full h-full justify-center items-end" >
        <h2 className="gap-4 bg-hijaubaru border-8 border-bluedark hover:bg-ungupink rounded-full text-base px-10 py-2 text-shadow-[-2px_4px_0px_#0F1B24] text-white">{name}</h2>
      </div>
    </div>
  )
}