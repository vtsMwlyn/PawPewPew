export default function CharacterButton({ characters, selectedCharacter, setSelectedCharacter, }) {
  
  return (
    <div className="flex lg:flex-col gap-5 lg:gap-15 justify-center items-center top-0 z-10">
      {characters.map((char) => {
        const isSelected = selectedCharacter?.name === char.name;
        return (
          <button
            key={char.id}
            type="button"
            className={`rounded-full hover:scale-105 2xl:hover:scale-110 hover:origin-bottom transition-all duration-200 ease-in-out
              ${isSelected
                ? 'bg-ungupink border-5 lg:border-8 2xl:border-10 scale-110 border-blueblack drop-shadow-[-1px_3px_0px_#0F1B24] lg:drop-shadow-[-2px_6px_0px_#0F1B24]'
                : 'bg-blueblack hover:bg-ungupink '
              }`}
            onClick={() => setSelectedCharacter(char)}
            disabled={char.id === 4}
          >
            <img
              src={char.icon}
              alt={`Paw Pew Pew - ${char.name}`}
              className={`w-12 lg:w-18 2xl:w-30 m-1 2xl:m-2 scale-250 shadow-[0_4px_8px_rgba(0,0,0,0)]`}
            />
          </button>
        );
      })}
    </div>
  );
};