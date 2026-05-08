import FeaturesCard from '../components/FeaturesCard'
import { Swiper, SwiperSlide } from 'swiper/react';
const Features = () => {
  return (
    <div className="flex flex-col w-full py-25 px-10 gap-25 bg-hijaubaru-light">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full">
          <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">game features</h1>
          <h2 className="flex justify-center text-2xl comic-relief-bold text-white text-shadow-[-2px_4px_0px_#0F1B24]">what makes our game unique</h2>
        </div>
        <div className="flex gap-10 justify-center">
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full">
          <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">see it in action</h1>
          <h2 className="flex justify-center text-2xl comic-relief-bold text-white text-shadow-[-2px_4px_0px_#0F1B24]">chaos gameplay</h2>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Features