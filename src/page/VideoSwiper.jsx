import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = [
  "/gameplay-forest-web.mp4",
  "/gameplay-ruins-web.mp4",
  "/gameplay-temple-web.mp4",
];

export default function VideoSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      className="w-full h-[500px]"
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <video
            className="w-full h-full object-cover rounded-xl"
            controls
            preload="metadata"
          >
            <source src={video} type="video/mp4" />
          </video>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
