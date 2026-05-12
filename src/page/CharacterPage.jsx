import CharacterCard from "../components/CharacterCard"
import character from "../json/character.json"
import {useState} from "react"

export default function CharacterPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(character[0]);

  return (
    <div className="relative flex py-65" id="character-page">
      <img src="/bg-character.webp" alt="bg-characterpage" className="absolute top-0 left-0 w-full h-max-full object-cover -z-10"/>
      <div className="flex flex-col w-full gap-20">
        <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">choose your survivor</h1>
      <div className="flex justify-between px-40 items-start">
        <CharacterCard 
          name={selectedCharacter.name} 
          subname={selectedCharacter.subname} 
          quote={selectedCharacter.quotes}
        >
          {selectedCharacter.description}
        </CharacterCard>
        <div className="flex flex-col items-center gap-10 relative">
          <div className="flex gap-10 items-center">
            <button type="button" className={`rounded-full hover:scale-110 ${selectedCharacter.name === 'TOTO THE BRAWLER' ? 'bg-ungupink border-10 scale-110 border-blueblack drop-shadow-[-2px_6px_0px_#0F1B24]' : 'bg-blueblack hover:bg-ungupink'}`} onClick={() => setSelectedCharacter(character[0])}>
             <img src="toto.webp" alt="toto" className="w-30 m-2 shadow-[0_4px_8px_rgba(0,0,0,0)]" />
            </button>
            <button type="button"  className={`rounded-full hover:scale-110 ${selectedCharacter.name === 'PIPI THE GUNSLINGER' ? 'bg-ungupink border-10 scale-110 border-blueblack drop-shadow-[-2px_6px_0px_#0F1B24]' : 'bg-blueblack hover:bg-ungupink'}`} onClick={() => setSelectedCharacter(character[1])}>
              <img src="pipi.webp" alt="Pipi" className="w-30 m-2 shadow-[0_4px_8px_rgba(0,0,0,0)]" />
            </button>
            <button type="button"  className={`rounded-full hover:scale-110 ${selectedCharacter.name === 'PITO THE SPELLBINDER' ? 'bg-ungupink border-10 scale-110 border-blueblack drop-shadow-[-2px_6px_0px_#0F1B24]' : 'bg-blueblack hover:bg-ungupink'}`} onClick={() => setSelectedCharacter(character[2])}>
              <img src="pito.webp" alt="pito" className="w-30 m-2 shadow-[0_4px_8px_rgba(0,0,0,0)]" />
            </button>
          </div>
          <img 
            src={selectedCharacter.image} alt={selectedCharacter.name} 
            className={`w-150 absolute -z-5 `}
          />
        </div>
      </div>
      </div>
    </div>
  )
}