export default function CharacterCard({name, title, quote, children}) {
  return (
    <div className='flex bg-hijaubaru-reverse 
      py-20 px-20 items-center 
      rounded-4xl border-10 border-blueblack
      drop-shadow-[-12px_15px_25px_#0F1B24]
      w-1/2 gap-2 text-white'>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{name}</h1>
          <h2 className="text-lg comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">{title}</h2>
        </div>
        <h3 className="text-2xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">“{quote}”</h3>
        <p className="text-2xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">{children}</p>
      </div>
    </div>
  )
}