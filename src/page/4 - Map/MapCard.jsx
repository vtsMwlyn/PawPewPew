import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MapCard({ MapJson, selectedMap, setSelectedMap }) {
  return (
    <div className="w-full max-w-5xl px-5 absolute bottom-8 lg:bottom-12 z-10 flex justify-center">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        className="w-full max-w-4xl py-8 overflow-visible!"
      >
        {MapJson.map((location) => {
          const isSelected = selectedMap?.name === location.name;
          return (
            <SwiperSlide
              key={location.id}
              className="flex! items-center! justify-center! py-2"
            >
              <div
                className={`flex rounded-xl relative cursor-pointer items-center justify-center
                  ${isSelected ? "scale-110 origin-center bg-ungupink" : "bg-blueblack hover:bg-ungupink"}
                  group w-full max-w-65 h-21 lg:h-30 2xl:h-35 
                  transition-all ease-out duration-300 hover:scale-105 p-1.5 drop-shadow-[-1px_3px_0px_#0F1B24] lg:drop-shadow-[-2px_6px_0px_#0F1B24]`}
                onClick={() => setSelectedMap(location)}
              >
                <img
                  src={location.image}
                  alt={`Paw Pew Pew - ${location.name}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="flex w-full h-full justify-center items-end absolute left-0 bottom-1 z-5 cursor-pointer"
                  onClick={() => setSelectedMap(location)}
                >
                  <div className="px-5 lg:px-10 py-1 lg:py-2">
                    <img
                      src={location.button}
                      alt={`Paw Pew Pew - ${location.name}`}
                      className="w-20 lg:w-25 2xl:w-35"
                    />
                  </div>
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
