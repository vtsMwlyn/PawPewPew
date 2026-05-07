export default function CharacterCard({image, name, title, quote, description}) {
  return (
    <div className='flex bg-hijaubaru 
      py-10 px-20 items-center 
      rounded-4xl border-10 border-blueblack
      gap-2 text-white'>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{name}</h1>
          <h2 className="text-lg comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">{title}</h2>
        </div>
        <h3 className="text-2xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">“{quote}”</h3>
        <p className="text-2xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">{description}</p>
      </div>
      <img src={image} alt={name} className="h-150" />
    </div>
  )
}