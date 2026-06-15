export default function CharacterCard({ selectedCharacter }) {
  const { traits } = selectedCharacter;

  return (
    <div className="flex w-full px-4 lg:p-0 lg:w-150">
      <div className="flex flex-col gap-5">
        {traits.map((trait, index) => (
          <div key={index} className={`flex flex-col justify-center pl-5 2xl:pl-13 2xl:w-160 2xl:h-56 bg-gradient-to-r py-8 from-[#551755] to-transparent rounded-xl ${index == traits.length - 1 ? '' : ''}`}>
            <h3 className="text-xl 2xl:text-3xl text-white uppercase tracking-wider text-shadow-[-2px_3px_0px_#0F1B24]">{trait.title}</h3>
            <p className="text-sm lg:text-base text-white 2xl:text-xl poppins-medium text-shadow-[-2px_3px_0px_#0F1B24] mt-2">{trait.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}