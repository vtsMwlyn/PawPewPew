export default function CharacterButton({ characters, selectedCharacter, setSelectedCharacter }) {
  return (
    <div className="w-full flex gap-5 lg:gap-10 justify-center items-end absolute top-0">
      {characters.map((char) => {
        const isSelected = selectedCharacter?.name === char.name;
        return (
          <button
            key={char.id}
            type="button"
            className={`rounded-full hover:scale-105 2xl:hover:scale-110 hover:origin-bottom transition-all duration-200 ease-in-out 
              ${isSelected
                ? 'bg-ungupink border-5 2xl:border-10 scale-110 border-blueblack drop-shadow-[-1px_3px_0px_#0F1B24] lg:drop-shadow-[-2px_6px_0px_#0F1B24]'
                : 'bg-blueblack hover:bg-ungupink'
              }`}
            onClick={() => setSelectedCharacter(char)}
          >
            <img
              src={char.icon}
              alt={char.name}
              className="w-25 2xl:w-30 m-1 lg:m-2 shadow-[0_4px_8px_rgba(0,0,0,0)]"
            />
          </button>
        );
      })}
    </div>
  );
};