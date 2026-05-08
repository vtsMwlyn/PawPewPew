import CharacterCard from "../components/CharacterCard"

export default function CharacterPage() {
  return (
    <div className="relative flex py-65 px-10">
      <img src="/bg-character.png" alt="bg-characterpage" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
      <div className="flex flex-col w-full gap-25">
        <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">choose your survivor</h1>
      <div className="flex justify-center gap-15">
        <CharacterCard name="Toto The Brawler" title="The Dependable Vanguard" quote="Threat detected in proximity. Initiating knockback protocols. Please stand clear of the hammer">
          The fiercely loyal and deeply literal guard dog trying to keep this chaotic rescue operation from falling apart. Pito treats enemy swarms as workplace safety hazards that must be physically pushed away from his team. With strikes designed for maximum knockback, his entire combat philosophy is about creating safe zones by force.
        </CharacterCard>
        <div className="flex flex-col items-center">
          <div className="flex gap-5">
            <img src="icon-toto.png" alt="toto" className="w-30" />
            <img src="icon-pipi.png" alt="Pipi" className="w-30" />
            <img src="icon-pito.png" alt="pito" className="w-30" />
          </div>
          <img src="/splashart-toto.png" alt="Toto The Brawler" className="h-150" />
        </div>
      </div>
      </div>
    </div>
  )
}