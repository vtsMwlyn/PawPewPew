import galleryItem from '../json/gallery.json';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
export default function Gallery() {
  return (
    <div className="flex flex-col gap-10 w-full py-25 bg-hijaubaru-light" id="gallery-page">
        <div className="flex flex-col w-full">
          <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">see it in action</h1>
          <h2 className="flex justify-center text-2xl comic-relief-bold text-white text-shadow-[-2px_4px_0px_#0F1B24]">chaos gameplay</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full h-180 cursor-grab active:cursor-grabbing"
        >
          {galleryItem.map((galer, index) => (
            <SwiperSlide key={index} >
              <div className="flex justify-center items-center h-full w-full">
                <img src={galer.src} className="border-blueblack border-10 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-3xl w-300" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}