import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./index.css";

const images = [
  "../../images/avatar-anisha.png",
  "../../images/avatar-ali.png",
  "../../images/avatar-richard.png",
  "../../images/avatar-shanai.png",
];

const Carousel = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={25}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <article className="bg-VeryLightGray w-full h-64 max-h-64 flex flex-col items-center justify-center p-6 relative">
            <img
              className="w-[75px] h-[75px] object-cover rounded-full absolute -top-8"
              src={slide.avatar}
              alt={slide.avatar}
            />
            <div className="mt-10 text-center">
              <p className="font-bold text-lg">{slide.name}</p>
              <p className="text-GrayishBlue">{slide.description}</p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { Carousel };
