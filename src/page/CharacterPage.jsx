import character from "../json/character.json"
import {useState} from "react"

export default function CharacterPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(character[0]);

  return (
    <section className="relative flex py-10 lg:py-65" id="character-page">
      {/* Background Image */}
      <img 
        src="/bg-character.webp" alt="bg-characterpage" 
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Section Content */}
      <div className="w-full flex flex-col justify-center items-center gap-15 2xl:gap-30 px-8 2xl:p-0">
        {/* Section Title */}
        <h1 className="flex justify-center text-5xl 2xl:text-6xl text-white 
          uppercase text-shadow-[-2px_6px_0px_#0F1B24]">
            choose your survivor
        </h1>

        <div className="w-full flex flex-col-reverse lg:flex-row justify-between px-0 2xl:px-20 items-start gap-0 lg:gap-10 2xl:gap-0">
          {/* Character Info */}
          <CharacterCard 
            name={selectedCharacter.name} 
            subname={selectedCharacter.subname} 
            quote={selectedCharacter.quotes}
          >
            {selectedCharacter.traits}
          </CharacterCard>

          {/* Character Selector */}
          <div className="w-full lg:w-1/2 lg:flex flex-col items-center gap-10 relative lg:sticky lg:top-27 2xl:relative 2xl:top-0">
            <CharacterButton 
              characters={character} 
              selectedCharacter={selectedCharacter} 
              setSelectedCharacter={setSelectedCharacter} 
            />
            <img 
              src={selectedCharacter.image} alt={selectedCharacter.name} 
              className={`w-full 2xl:w-150`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CharacterCard({name, subname, quote, children}) {
  return (
    <div className='flex flex-col w-full
      lg:w-1/2 2xl:w-3/5 
      h-auto 2xl:h-170
      gap-6 text-white'>
      <div 
        className="w-full flex flex-col p-8
        bg-hijaubaru-reverse 
        rounded-4xl border-10 border-blueblack
        drop-shadow-[-12px_15px_25px_#0F1B24]  
        gap-5 2xl:gap-7">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{name}</h1>
          <h2 className="text-2xl lg:text-4xl uppercase text-shadow-[-2px_6px_0px_#0F1B24]">{subname}</h2>
        </div>
        <h3 className="w-full text-base lg:text-xl 2xl:text-2xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">“{quote}”</h3>
      </div>
      <div className="flex flex-col 2xl:flex-row gap-6 h-auto">
      {children.map((trait, index) => (
        <div key={index} className="bg-hijaubaru-reverse flex flex-col gap-2 2xl:w-1/3 p-8 
          rounded-4xl border-10 border-blueblack
          drop-shadow-[-12px_15px_25px_#0F1B24]">
          <h3 className="text-xl 2xl:text-3xl uppercase tracking-wider text-shadow-[-2px_4px_0px_#0F1B24]">{trait.title}</h3>
          <p className="text-sm lg:text-base 2xl:text-xl comic-relief-bold text-shadow-[-2px_3px_0px_#0F1B24]">{trait.description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

function CharacterButton({ characters, selectedCharacter, setSelectedCharacter }){
  return (
    <div className="w-full flex gap-5 lg:gap-10 justify-center items-end absolute top-0">
      {characters.map((char) => {
        const isSelected = selectedCharacter?.name === char.name;
        return (
          <button
            key={char.id}
            type="button"
            className={`rounded-full hover:scale-105 2xl:hover:scale-110 hover:origin-bottom transition-all duration-200 ease-in-out 
              ${ isSelected
                ? 'bg-ungupink border-5 2xl:border-10 scale-110 border-blueblack drop-shadow-[-2px_6px_0px_#0F1B24]'
                : 'bg-blueblack hover:bg-ungupink'
            }`}
            onClick={() => setSelectedCharacter(char)}
          >
            <img
              src={char.icon}
              alt={char.name}
              className="w-18 lg:w-22 2xl:w-30 m-1 2xl:m-2 shadow-[0_4px_8px_rgba(0,0,0,0)]"
            />
          </button>
        );
      })}
    </div>
  );
};