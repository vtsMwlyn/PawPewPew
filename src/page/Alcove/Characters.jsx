import { useState } from "react";
import CharacterButton from "./CharacterButton";
import CharacterCard from "./CharacterCard";
import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/Section";

export default function Characters() {
  const { t } = useLanguage();
  const character = t.character;
  const [selectedCharId, setSelectedCharId] = useState(1);
  const selectedCharacter =
    character.content.find((c) => c.id === selectedCharId) ||
    character.content[0];

  return (
    <Section id="heroes-page">
      {/* Background Image */}
      <img
        src={`/${selectedCharacter.background}`}
        alt="Paw Pew Pew - Character Overview"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Section Content */}
      <div className="w-full flex flex-col justify-center items-center gap-10 2xl:gap-20 my-25">
        {/* Section Title */}
        <h1 className="flex justify-center text-center text-4xl lg:text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]">
          {character.title}
        </h1>

        <div className="w-full flex flex-col gap-10 lg:px-8 2xl:p-0 lg:gap-20 lg:flex-row items-center justify-center">
          {/* Character Selector */}
          <CharacterButton
            characters={character.content}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={(char) => setSelectedCharId(char.id)}
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl 2xl:text-2xl w-100 text-center text-white outfit-bold tracking-wider text-shadow-[-2px_3px_0px_#0F1B24]">
              “{selectedCharacter.quotes}”
            </h1>
            <img
              src={selectedCharacter.image}
              alt={`Paw Pew Pew - ${selectedCharacter.name}`}
              className="mb-10 w-100 2xl:w-140"
            />
            <div className="flex flex-col gap-5 justify-center items-center">
              <img
                src={selectedCharacter.text}
                alt={`Paw Pew Pew - ${selectedCharacter.name}`}
                className="w-60 2xl:w-1/2"
              />
              <img
                src={selectedCharacter.subname}
                alt={`Paw Pew Pew - ${selectedCharacter.subname}`}
                className="w-70 2xl:w-2/3"
              />
            </div>
          </div>
          {/* Character Info */}
          <CharacterCard selectedCharacter={selectedCharacter} />
        </div>
      </div>
    </Section>
  );
}
