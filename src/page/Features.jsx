import FeaturesCard from '../components/FeaturesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import featuresItem from '../json/features.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Features = () => {
  return (
    <div className="flex flex-col w-full py-25 gap-25 bg-hijaubaru-light">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full">
          <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">game features</h1>
          <h2 className="flex justify-center text-2xl comic-relief-bold text-white text-shadow-[-2px_4px_0px_#0F1B24]">what makes our game unique</h2>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={100}
          centeredSlides={true}
          className="w-full h-180 "
        >
          {featuresItem.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <FeaturesCard
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-10 px-10">
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
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="max-w-300 h-180 flex justify-center"
        >
          <SwiperSlide ><img src="/steam-img-1.jpg" alt="image 1" className="border-blueblack border-5 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-3xl" /></SwiperSlide>
          <SwiperSlide ><img src="/steam-img-2.jpg" alt="image 2" className="border-blueblack border-5 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-3xl" /></SwiperSlide>
          <SwiperSlide ><img src="/steam-img-3.jpg" alt="image 3" className="border-blueblack border-5 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-3xl" /></SwiperSlide>
          <SwiperSlide ><img src="/steam-img-4.jpg" alt="image 4" className="border-blueblack border-5 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-3xl" /></SwiperSlide>
          <SwiperSlide ><img src="/steam-img-5.jpg" alt="image 5" className="border-blueblack border-5 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-3xl" /></SwiperSlide>
          <SwiperSlide ><img src="/steam-img-6.jpg" alt="image 6" className="border-blueblack border-5 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-3xl" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Features