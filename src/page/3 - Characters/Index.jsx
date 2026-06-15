import character from "../../json/character.json"
import { useState } from "react"
import CharacterButton from "./CharacterButton";
import CharacterCard from "./CharacterCard";

export default function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(character[0]);

  return (
    <section className="relative flex " id="heroes-page">
      {/* Background Image */}
      <img src="/bg-character.webp" alt="bg-characterpage"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Section Content */}
      <div className="w-full flex flex-col justify-center items-center gap-30 my-30">
        {/* Section Title */}
        <h1 className="flex justify-center text-center text-4xl lg:text-5xl 2xl:text-6xl text-white 
          uppercase text-shadow-[-2px_6px_0px_#0F1B24]">
          choose your survivor
        </h1>

        <div className="w-full flex items-center justify-center">
          {/* Character Selector */}
          <CharacterButton
            characters={character}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl w-2/3 text-center text-white uppercase tracking-wider text-shadow-[-1px_4px_0px_#0F1B24]">"{selectedCharacter.quotes}"</h1>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="mb-10 w-120"/>
            <div className="flex flex-col gap-5 justify-center items-center">
              <img src={selectedCharacter.text} alt="nama" className="w-1/2" />
              <img src={selectedCharacter.subname} alt="nama" className="w-2/3" />
            </div>
        </div>
          {/* Character Info */}
          <CharacterCard selectedCharacter={selectedCharacter} />
        </div>
      </div>
    </section>
  )
}