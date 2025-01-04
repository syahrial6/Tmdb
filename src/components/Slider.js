import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const Slider = () => {
  return (
    <Swiper
    className="mt-10 mb-20 shadow-violet-500/25 shadow-2xl" 
    centeredSlides
    loop
    loopAdditionalSlides={3}
    effect="cards"
    cardsEffect={{
      rotate: false,
      perSlideOffset: 15
    }}
    autoplay={{
      delay: 7000,
      disableOnInteraction: false
    }}
    initialSlide={Math.floor(Math.random() * 8)}
    modules={[Autoplay, EffectCards]}
  >
    
      <SwiperSlide >
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 m-auto to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/6qld2YxAO9gdEblo0rsEb8BcYKO.jpg`}
          alt={`backdrop image`}
          loading="lazy"
        />
        <div className="absolute bottom-0 px-6 mb-6 text-white">
          <p className="text-2xl mb-3 font-bold">aaa</p>
          <p className="hidden md:block">aaaa</p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg`}
          alt={`backdrop image`}
          loading="lazy"
        />
        <div className="absolute bottom-0 px-6 mb-6 text-white">
          <p className="text-2xl mb-3 font-bold">aaa</p>
          <p className="hidden md:block">aaaa</p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/6qld2YxAO9gdEblo0rsEb8BcYKO.jpg`}
          alt={`backdrop image`}
          loading="lazy"
        />
        <div className="absolute bottom-0 px-6 mb-6 text-white">
          <p className="text-2xl mb-3 font-bold">aaa</p>
          <p className="hidden md:block">aaaa</p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/6qld2YxAO9gdEblo0rsEb8BcYKO.jpg`}
          alt={`backdrop image`}
          loading="lazy"
        />
        <div className="absolute bottom-0 px-6 mb-6 text-white">
          <p className="text-2xl mb-3 font-bold">aaa</p>
          <p className="hidden md:block">aaaa</p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/6qld2YxAO9gdEblo0rsEb8BcYKO.jpg`}
          alt={`backdrop image`}
          loading="lazy"
        />
        <div className="absolute bottom-0 px-6 mb-6 text-white">
          <p className="text-2xl mb-3 font-bold">aaa</p>
          <p className="hidden md:block">aaaa</p>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/6qld2YxAO9gdEblo0rsEb8BcYKO.jpg`}
          alt={`backdrop image`}
          loading="lazy"
        />
        <div className="absolute bottom-0 px-6 mb-6 text-white">
          <p className="text-2xl mb-3 font-bold">aaa</p>
          <p className="hidden md:block">aaaa</p>
        </div>
      </SwiperSlide>
  </Swiper>
  )
}

export default Slider
