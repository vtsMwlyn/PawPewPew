export default function CharacterCard({ selectedCharacter }) {
  const { traits } = selectedCharacter;

  return (
    <div className='flex w-1/2'>
      <div className="flex w-188">
        <div className="flex flex-col gap-5 py-10 h-full">
          {traits.map((trait, index) => (
            <div key={index} className={`flex flex-col px-10 bg-gradient-to-r py-3 from-yellow-300 rounded-xl to-transparent  ${index == traits.length - 1 ? '' : ''}`}>
              <h3 className="text-xl 2xl:text-3xl text-white uppercase tracking-wider text-shadow-[-1px_4px_0px_#0F1B24]">{trait.title}</h3>
              <p className="text-sm lg:text-base text-white 2xl:text-xl comic-relief-bold text-shadow-[-1px_4px_0px_#0F1B24] ">{trait.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}