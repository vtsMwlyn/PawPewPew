export default function WorldMeadow() {
  return (
    <>
      <div className="flex flex-col w-full pt-50 bg-hijaubaru-reverse items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-3xl text-white 
          comic-relief-bold text-shadow-[-2px_4px_0px_#0F1B24]">
            Welcome to The Meadow</h3>
          <h1 className="text-7xl text-white 
          uppercase text-shadow-[-2px_6px_0px_#0F1B24]">
            animal utopia</h1>
          <p className="text-white comic-relief-bold text-2xl w-4xl 
              text-center text-shadow-[-2px_4px_0px_#0F1B24]">
            Home to the Alcove, a hidden refuge where scattered survivors are brought together and given a chance to rebuild.
          </p>
        </div>
        <img src="/bg-map-world.webp" alt="AI Map" />
      </div>
      <div className="flex flex-col w-full bg-hijaubaru-light items-center justify-center py-10 gap-6">
        <h1 className="text-4xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24] 
        w-4xl text-center">Life in the village of Meadow was peaceful, whimsical, and perfectly happy </h1>
        <video className="w-full max-w-7xl rounded-4xl border-6 
          border-bs-blueblack shadow-[-10px_10px_25px_#000000]" controls>
          <source src="/video.mp4" type="video/mp4"/>
        </video>
        <p className="text-white comic-relief-bold text-2xl w-4xl text-center text-shadow-[-2px_4px_0px_#0F1B24]">
          But when a relentless Robo-Beast army crashes in and kidnaps the villagers, playtime is officially over.
        </p>
      </div>
    </>
    
  )
}