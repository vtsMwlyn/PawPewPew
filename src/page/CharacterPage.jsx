import CharacterCard from "../components/CharacterCard"
import character from "../json/character.json"
import {useState} from "react"
import CharacterButton from "../components/CharacterButton"

export default function CharacterPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(character[0]);

  return (
    <div className="relative flex py-65" id="character-page">
      <img 
        src="/bg-character.webp" alt="bg-characterpage" 
        className="absolute top-0 left-0 w-full object-cover -z-10"
      />
      <div className="flex flex-col justify-center items-center w-full gap-20 h-220">
        <h1 className="flex justify-center text-6xl text-white 
          uppercase text-shadow-[-2px_6px_0px_#0F1B24]">
            choose your survivor
        </h1>
        <div className="flex justify-between px-40 items-start">
          <CharacterCard 
            name={selectedCharacter.name} 
            subname={selectedCharacter.subname} 
            quote={selectedCharacter.quotes}
          >
            {selectedCharacter.description}
          </CharacterCard>
          <div className="flex flex-col items-center gap-10 relative">
            <CharacterButton 
              characters={character} 
              selectedCharacter={selectedCharacter} 
              setSelectedCharacter={setSelectedCharacter} 
            />
            <img 
              src={selectedCharacter.image} alt={selectedCharacter.name} 
              className={`w-150 absolute -z-5`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}