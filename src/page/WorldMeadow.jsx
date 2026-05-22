import { useState } from "react";
import { useRef } from "react"

export default function WorldMeadow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    const video = videoRef.current;
  
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="w-full">
      {/* A peaceful sanctuary for all. */}
      <div className="w-full flex flex-col pt-10 lg:pt-30 bg-hijaubaru-reverse items-center justify-center">
        <div className="w-full flex flex-col items-center gap-5 px-8 2xl:p-0">
          <h3 className="text-xl lg:text-3xl text-white 
          comic-relief-bold text-shadow-[-2px_4px_0px_#0F1B24]">
            Welcome to Starlit Haven</h3>
          <h1 className="text-5xl lg:text-7xl text-white 
          uppercase text-shadow-[-2px_6px_0px_#0F1B24] text-center">
            A peaceful sanctuary for all.</h1>
          <p className="text-white comic-relief-bold text-lg lg:text-2xl w-full lg:w-4xl 
              text-center text-shadow-[-2px_4px_0px_#0F1B24]">
            Step into our hidden refuge, a safe space to gather scattered survivors. Together, you'll rebuild Starlit Haven, gathering the strength and resources needed for whatever comes next. 
          </p>
        </div>
        <img src="/bg-world-map.webp" alt="AI Map" />
      </div>

      {/* Village of Meadow */}
      <div className="w-full flex flex-col bg-hijaubaru-light items-center justify-center py-10 gap-6 px-8">
        <h1 className="text-2xl lg:text-4xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24] 
        w-full lg:w-4xl text-center">Life in the village of Meadow was peaceful, whimsical, and perfectly happy </h1>
        <div className="relative w-full max-w-7xl h-165 rounded-2xl overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="w-full h-full lg:rounded-4xl border-6 border-bs-blueblack shadow-[-10px_10px_25px_#000000] object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              videoRef.current.currentTime = 0;
              setIsPlaying(false);
            }}
          >
            <source src="/sample.mp4" type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={handlePlayButtonClick}
            className={`w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] absolute top-0 transition ease-in-out duration-200 ${
              isPlaying
                ? 'opacity-0 pointer-events-none'
                : 'opacity-100'
            }`}
          >
            <img src="/play-button.webp" />
          </button>
        </div>
        <p className="text-white comic-relief-bold text-lg lg:text-2xl w-full lg:w-4xl text-center text-shadow-[-2px_4px_0px_#0F1B24]">
          But when a relentless Robo-Beast army crashes in and kidnaps the villagers, playtime is officially over.
        </p>
      </div>
    </section>
  )
}