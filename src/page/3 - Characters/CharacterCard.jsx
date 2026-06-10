export default function CharacterCard({ selectedCharacter }) {
	const {  subname, weaponIcon, quotes, traits, text } = selectedCharacter;

  return (
    <div className='flex flex-col w-full
      xl:w-1/2
      h-auto text-white drop-shadow-[-12px_15px_25px_#0F1B24]
      bg-hijaubaru-reverse rounded-4xl border-5 lg:border-10 border-blueblack'>
      <div
        className="w-full flex flex-col p-8 gap-5 2xl:gap-7
        border-b-5 border-blueblack">
				<div className="w-full flex gap-4">
					<img src={weaponIcon} alt="weapon icon" className="w-18 h-18 lg:w-30 lg:h-30"/>
					<div className="flex flex-col justify-between">
						<img src={text} alt={name} className="drop-shadow-[-2px_4px_0px_#0F1B24] lg:drop-shadow-[-2px_10px_0px_#0F1B24] w-40 lg:w-50" />
						<img src={subname} alt={name} className="drop-shadow-[-2px_4px_0px_#0F1B24] lg:drop-shadow-[-2px_8px_0px_#0F1B24] w-40 lg:w-80" />
					</div>
				</div>
        <h3 className="w-full text-base lg:text-xl 2xl:text-2xl comic-relief-bold text-shadow-[-1px_4px_0px_#0F1B24]">“{quotes}”</h3>
      </div>
      <div className="flex flex-col 2xl:flex-row h-auto">
        {traits.map((trait, index) => (
          <div key={index} className={`flex flex-col gap-2 
          2xl:w-1/3 p-8 ${index == traits.length - 1 ? '' : 'border-b-5 2xl:border-b-0 2xl:border-r-5 border-blueblack '}`}>
            <h3 className="text-xl 2xl:text-3xl uppercase tracking-wider text-shadow-[-1px_4px_0px_#0F1B24]">{trait.title}</h3>
            <p className="text-sm lg:text-base 2xl:text-xl comic-relief-bold text-shadow-[-1px_4px_0px_#0F1B24] ">{trait.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}