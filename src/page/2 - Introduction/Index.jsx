import { useRef } from "react"
import FrameEdge from "../../components/FrameEdge";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Introduction() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === swiper.realIndex) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="w-full" id="introduction-page">
      {/* A peaceful sanctuary for all. */}
      <div className="w-full flex flex-col pt-10 lg:pt-30 bg-hijaubaru-reverse items-center justify-center">
        <div className="w-full flex flex-col items-center gap-5 px-8 2xl:p-0">
          <h3 className="text-xl lg:text-3xl text-white comic-relief-bold text-shadow-[-1px_3px_0px_#0F1B24] lg:text-shadow-[-2px_4px_0px_#0F1B24]">
            Welcome to STARLIT HAVEN
          </h3>
          <h1 className="text-5xl lg:text-7xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24] text-center">
            A peaceful sanctuary for all.
          </h1>
          <p className="text-white comic-relief-bold text-lg lg:text-2xl w-full lg:w-4xl text-center text-shadow-[-1px_3px_0px_#0F1B24] lg:text-shadow-[-2px_4px_0px_#0F1B24]">
            Step into our hidden refuge, a safe space to gather scattered survivors. Together, you'll rebuild Starlit Haven, gathering the strength and resources needed for whatever comes next.
          </p>
        </div>
        <img src="/bg-world-map.webp" alt="AI Map" />
      </div>

      {/* Village of Meadow */}
      <div className="w-full flex flex-col bg-hijaubaru-light items-center justify-center pb-10 gap-6 px-8 -mt-80">
        <h1 className="text-2xl lg:text-4xl text-white uppercase text-shadow-[-1px_3px_0px_#0F1B24] lg:text-shadow-[-2px_6px_0px_#0F1B24] w-full lg:w-4xl text-center">
          Life in the village of Meadow was peaceful, whimsical, and perfectly happy
        </h1>

        <div className="relative w-3/4 2xl:w-full max-w-7xl h-auto md:h-100 lg:h-120 xl:h-165 mt-10">
          <FrameEdge position="topLeft" className={`
            w-20 md:w-30 2xl:w-40
            -top-8 md:-top-12 2xl:-top-15
            -left-7 md:-left-10 2xl:-left-14
          `} />
          <FrameEdge position="bottomRight" className={`
            w-20 md:w-30 2xl:w-40
            -bottom-8 md:-bottom-12 2xl:-bottom-15
            -right-7 md:-right-10 2xl:-right-14
          `}/>

          <div className="w-full h-full border-6 rounded-xl lg:rounded-4xl overflow-hidden">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              loop={true}
              className="cursor-grab active:cursor-grabbing overflow-hidden h-full w-full"
            >
              {['/gameplay-forest-web.mp4', '/gameplay-ruins-web.mp4', '/gameplay-temple-web.mp4'].map((src, index) => (
                <SwiperSlide key={index} className="h-full w-full">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full shadow-[-10px_10px_25px_#000000] object-cover"
                    controls
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-20 2xl:-left-40 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center active:scale-70 hover:scale-115 transition-transform duration-200 animate-arrow-left hover:drop-shadow-[0px_0px_5px_white]"
          >
            <img src="/arrow-triangle-left.webp" className="w-full h-full"/>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-20 2xl:-right-40 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center active:scale-70 hover:scale-115 transition-transform duration-200 animate-arrow-right hover:drop-shadow-[0px_0px_5px_white]"
          >
            <img src="/arrow-triangle-right.webp" className="w-full h-full"/>
          </button>
        </div>

        <p className="text-white comic-relief-bold text-lg lg:text-2xl w-full lg:w-4xl text-center text-shadow-[-1px_3px_0px_#0F1B24] lg:text-shadow-[-2px_4px_0px_#0F1B24] mt-20">
          But when a relentless Robo-Beast army crashes in and kidnaps the villagers, playtime is officially over.
        </p>
      </div>
    </section>
  )
}
