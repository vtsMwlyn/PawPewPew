export default function WorldMeadow() {
  return (
    <section className="w-full">
      {/* Animal Utopia */}
      <div className="w-full flex flex-col pt-10 2xl:pt-50 bg-hijaubaru-reverse items-center justify-center">
        <div className="w-full flex flex-col items-center gap-2 px-8 2xl:p-0">
          <h3 className="text-xl 2xl:text-3xl text-white 
          comic-relief-bold text-shadow-[-2px_4px_0px_#0F1B24]">
            Welcome to The Meadow</h3>
          <h1 className="text-5xl 2xl:text-7xl text-white 
          uppercase text-shadow-[-2px_6px_0px_#0F1B24] text-center">
            animal utopia</h1>
          <p className="text-white comic-relief-bold text-lg 2xl:text-2xl w-full 2xl:w-4xl 
              text-center text-shadow-[-2px_4px_0px_#0F1B24]">
            Home to the Alcove, a hidden refuge where scattered survivors are brought together and given a chance to rebuild.
          </p>
        </div>
        <img src="/bg-map-world.webp" alt="AI Map" />
      </div>

      {/* Village of Meadow */}
      <div className="w-full flex flex-col bg-hijaubaru-light items-center justify-center py-10 gap-6 px-8 2xl:p-0">
        <h1 className="text-2xl 2xl:text-4xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24] 
        w-full 2xl:w-4xl text-center">Life in the village of Meadow was peaceful, whimsical, and perfectly happy </h1>
        <video className="w-full max-w-7xl rounded-2xl 2xl:rounded-4xl border-6 
          border-bs-blueblack shadow-[-10px_10px_25px_#000000]" controls>
          <source src="/video.mp4" type="video/mp4"/>
        </video>
        <p className="text-white comic-relief-bold text-lg 2xl:text-2xl w-full 2xl:w-4xl text-center text-shadow-[-2px_4px_0px_#0F1B24]">
          But when a relentless Robo-Beast army crashes in and kidnaps the villagers, playtime is officially over.
        </p>
      </div>
    </section>
  )
}