import { useState, useRef } from "react"
import FrameEdge from "../../components/FrameEdge";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAudio } from "../../context/AudioContext";
import Separator from "../../components/Separator";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Introduction() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const { pauseForVideo, resumeAfterVideo } = useAudio();
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const handlePlayButtonClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleSlideChange = () => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });
    setPlayingIndex(null);
    resumeAfterVideo();
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="w-full relative" id="introduction-page">
      {/* A peaceful sanctuary for all. */}
      <div className="w-full min-h-screen flex flex-col items-center justify-start py-20">
        <div className="w-full flex flex-col items-center gap-5 px-8 2xl:px-0">
          <h3 className="text-xl lg:text-2xl 2xl:text-3xl text-white poppins-medium text-shadow-[-2px_3px_0px_#0F1B24]">
            Welcome to STARLIT ALCOVE
          </h3>
          <h1 className="text-4xl lg:text-5xl 2xl:text-7xl text-white uppercase text-center text-shadow-[-4px_4px_0px_#0F1B24]">
            A peaceful sanctuary for all.
          </h1>
          <p className="text-white poppins-medium text-lg lg:text-xl 2xl:text-2xl w-full lg:w-4xl text-center text-shadow-[-2px_3px_0px_#0F1B24]">
            Step into our hidden refuge, a safe space to gather scattered survivors. Together, you'll rebuild Starlit Alcove
          </p>
          <img src="/bg-world-map2.webp" className="absolute top-0 h-screen w-full object-cover o r -z-5" />
        </div>
      </div>

      <Separator />

      {/* Village of Meadow */}
      <div className="w-full flex flex-col items-center justify-center px-8 py-20 relative">
        <h1 className="text-xl lg:text-4xl text-white uppercase w-full lg:w-4xl text-center text-shadow-[-4px_4px_0px_#0F1B24]">
          Life in the village of Meadow was peaceful, whimsical, and perfectly happy
        </h1>

        <div className="relative w-3/4 2xl:w-full max-w-7xl h-auto md:h-100 lg:h-120 xl:h-165 mt-10 2xl:mt-20">
          <FrameEdge position="topLeft" className={`
            w-20 md:w-30 2xl:w-40
            -top-8 md:-top-12 2xl:-top-15
            -left-7 md:-left-10 2xl:-left-14
          `} />
          <FrameEdge position="bottomRight" className={`
            w-20 md:w-30 2xl:w-40
            -bottom-8 md:-bottom-12 2xl:-bottom-15
            -right-7 md:-right-10 2xl:-right-14
          `} />
          <div className="w-full h-full border-6 rounded-xl lg:rounded-4xl overflow-hidden">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              loop={true}
              className="cursor-grab active:cursor-grabbing overflow-hidden h-full w-full"
            >
              {['/trailer.mp4','/gameplay-forest-web.mp4', '/gameplay-ruins-web.mp4', '/gameplay-temple-web.mp4'].map((src, index) => (
                <SwiperSlide key={index} className="h-full w-full">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full shadow-[-10px_10px_25px_#000000] object-cover"
                    onPlay={() => { setPlayingIndex(index); pauseForVideo(); }}
                    onPause={() => { setPlayingIndex(null); resumeAfterVideo(); }}
                    onEnded={(e) => { e.target.currentTime = 0; setPlayingIndex(null); resumeAfterVideo(); }}
                  >
                    <source src={src} type="video/mp4" />
                  </video>

                  <button
                    type="button"
                    onClick={() => handlePlayButtonClick(index)}
                    className={`w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] absolute top-0 transition ease-in-out duration-200
                      ${playingIndex === index ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <img src="/play-button.webp" className="w-10 lg:w-16" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-15 lg:-left-25 2xl:-left-40 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center active:scale-70 hover:scale-115 transition-transform duration-200 animate-arrow-left hover:drop-shadow-[0px_0px_5px_white]"
          >
            <img src="/arrow-triangle-left.webp" className="w-1/2 h-1/2 lg:w-full lg:h-full" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-15 lg:-right-25 2xl:-right-40 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center active:scale-70 hover:scale-115 transition-transform duration-200 animate-arrow-right hover:drop-shadow-[0px_0px_5px_white]"
          >
            <img src="/arrow-triangle-right.webp" className="w-1/2 h-1/2 lg:w-full lg:h-full" />
          </button>
        </div>
        <p className="text-white outfit-bold text-base lg:text-2xl w-full lg:w-4xl text-center text-shadow-[-2px_3px_0px_#0F1B24] mt-10">
          But when a relentless Robo-Beast army crashes in and kidnaps the villagers, <br/>playtime is officially over, turning a peaceful life into a fast-paced battle for survival.
        </p>
        <img src="/bg-shop.webp" className="absolute inset-0 h-full w-full object-cover object-center -z-5" />
      </div>
    </section>
  )
}
