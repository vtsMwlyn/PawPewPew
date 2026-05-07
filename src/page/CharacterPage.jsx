import CharacterCard from "../components/CharacterCard"

export default function CharacterPage() {
  return (
    <div className="flex flex-col w-full gap-15 p-50 bg-hijaubaru-reverse items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">choose your survivor</h1>
        <p className="text-white comic-relief-bold text-lg w-4xl text-center text-shadow-[-2px_4px_0px_#0F1B24]">
          Three Survivors. Three Fighting Style. Just one top of the food chain.
        </p>
      </div>
      <div className="flex gap-5">
        <img src="icon-toto.png" alt="toto" className="w-30" />
        <img src="icon-pipi.png" alt="Pipi" className="w-30" />
        <img src="icon-pito.png" alt="pito" className="w-30" />
      </div>
      <CharacterCard image={"/splashart-toto.png"} name="Toto The Brawler" title="The Dependable Vanguard" quote="Threat detected in proximity. Initiating knockback protocols. Please stand clear of the hammer">
        The fiercely loyal and deeply literal guard dog trying to keep this chaotic rescue operation from falling apart. Pito treats enemy swarms as workplace safety hazards that must be physically pushed away from his team. With strikes designed for maximum knockback, his entire combat philosophy is about creating safe zones by force.
      </CharacterCard>
    </div>
  )
}