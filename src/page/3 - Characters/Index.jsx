import character from "../../json/character.json"
import { useState } from "react"
import CharacterButton from "./CharacterButton";
import CharacterCard from "./CharacterCard";

export default function Characters() {
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
        <h1 className="flex justify-center text-center text-4xl lg:text-5xl 2xl:text-6xl text-white 
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