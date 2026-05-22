import { Swiper, SwiperSlide } from 'swiper/react';
import featuresItem from '../../json/features.json';
import { Autoplay } from 'swiper/modules';
import FeaturesCard from './FeaturesCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function GameFeatures() {
  return (
    <div className="flex flex-col w-full py-10 lg:py-25 gap-25 bg-hijaubaru-light">
      <div className="flex flex-col gap-10" id="features-page">
        <div className="flex flex-col w-full">
          <h1 className="flex justify-center text-5xl 2xl:text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">game features</h1>
          <h2 className="flex justify-center text-lg 2xl:text-2xl comic-relief-bold text-white text-shadow-[-2px_4px_0px_#0F1B24]">what makes our game unique</h2>
        </div>

        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          spaceBetween={0}
          className="w-full h-140 2xl:h-180 cursor-grab active:cursor-grabbing"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          {featuresItem.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center px-5">
              <FeaturesCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
