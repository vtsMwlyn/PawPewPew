export default function CharacterCard({ selectedCharacter }) {
  const { traits } = selectedCharacter;

  return (
    <div className="flex w-150">
      <div className="flex flex-col gap-5 h-full">
        {traits.map((trait, index) => (
          <div key={index} className={`flex flex-col pl-13 w-160 bg-gradient-to-r py-8 from-[#D6BC51] to-transparent rounded-xl ${index == traits.length - 1 ? '' : ''}`}>
            <h3 className="text-xl 2xl:text-3xl text-white uppercase tracking-wider">{trait.title}</h3>
            <p className="text-sm lg:text-base text-white 2xl:text-xl poppins-regular">{trait.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}