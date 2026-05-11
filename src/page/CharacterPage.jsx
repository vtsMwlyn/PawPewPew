import CharacterCard from "../components/CharacterCard"
import character from "../json/character.json"
import {useState} from "react"

export default function CharacterPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(character[0]);

  return (
    <div className="relative flex py-65 px-10">
      <img src="/bg-character.png" alt="bg-characterpage" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
      <div className="flex flex-col w-full gap-25">
        <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">choose your survivor</h1>
      <div className="flex justify-center gap-15">
        <CharacterCard name={selectedCharacter.name} subname={selectedCharacter.subname} quote={selectedCharacter.quotes}>
          {selectedCharacter.description}
        </CharacterCard>
        <div className="flex flex-col items-center">
          <div className="flex gap-5">
            <button type="button" onClick={() => setSelectedCharacter(character[0])}>
             <img src="icon-toto.png" alt="toto" className="w-30 hover:scale-110" />
            </button>
            <button type="button" onClick={() => setSelectedCharacter(character[1])}>
              <img src="icon-pipi.png" alt="Pipi" className="w-30 hover:scale-110" />
            </button>
            <button type="button" onClick={() => setSelectedCharacter(character[2])}>
              <img src="icon-pito.png" alt="pito" className="w-30 hover:scale-110" />
            </button>
          </div>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} className="h-150" />
        </div>
      </div>
      </div>
    </div>
  )
}