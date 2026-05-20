export default function CharacterCard({name, subname, quote, children}) {
  return (
    <div className='flex bg-hijaubaru-reverse 
      p-6 2xl:p-20 items-center h-auto 2xl:h-175
      rounded-4xl border-10 border-blueblack
      drop-shadow-[-12px_15px_25px_#0F1B24]
      -mt-30 lg:mt-0
      w-full lg:w-1/2 2xl:w-3/5 gap-2 text-white'>
      <div className="w-full flex flex-col gap-5 2xl:gap-7">
        <div className="flex flex-col">
          <h1 className="text-5xl 2xl:text-6xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{name}</h1>
          <h2 className="text-4xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{subname}</h2>
        </div>
        <h3 className="w-full text-lg lg:text-xl 2xl:text-2xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">“{quote}”</h3>
        <div className="flex flex-col gap-2 ">
        {children.map((trait, index) => (
          <div key={index}>
            <h3 className="text-2xl 2xl:text-3xl uppercase tracking-wider text-shadow-[-2px_4px_0px_#0F1B24]">{trait.title}</h3>
            <p className="text-sm lg:text-base 2xl:text-xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">{trait.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}