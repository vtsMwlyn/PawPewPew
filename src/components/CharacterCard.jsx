export default function CharacterCard({name, subname, quote, children}) {
  return (
    <div className='flex flex-col w-full 
      lg:w-1/2 2xl:w-3/5 
      h-auto 2xl:h-170
      gap-6 text-white'>
      <div 
        className="w-full flex flex-col 
        bg-hijaubaru-reverse p-8
        rounded-4xl border-10 border-blueblack
        drop-shadow-[-12px_15px_25px_#0F1B24]  
        gap-5 2xl:gap-7">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{name}</h1>
          <h2 className="text-2xl lg:text-4xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{subname}</h2>
        </div>
        <h3 className="w-full text-base lg:text-xl 2xl:text-2xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">“{quote}”</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 h-auto">
      {children.map((trait, index) => (
        <div key={index} className="bg-hijaubaru-reverse lg:w-1/3 p-8 
          rounded-4xl border-10 border-blueblack
          drop-shadow-[-12px_15px_25px_#0F1B24]">
          <h3 className="text-xl lg:text-3xl uppercase tracking-wider text-shadow-[-2px_4px_0px_#0F1B24]">{trait.title}</h3>
          <p className="text-sm lg:text-base 2xl:text-xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">{trait.description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}