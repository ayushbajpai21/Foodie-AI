import React, { useRef, useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../App.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Swipercard = () => {
  return (
 <>
 <div>
  <hr />
    <h2 className='text-center mt-10  text-4xl font-serif font-bold tracking-wider text-red-500 underline '>Delicious Food Gallery </h2>
 </div>
    <div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/6e/10/c7/6e10c7c0c11d6e2a28d6c51c3877774a.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/1200x/67/1c/d3/671cd30d7445eccad0c6ebe10ef2239a.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/d6/60/25/d660255e0ac13e20bc3c674ee3d11ac4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/11/31/b9/1131b9a3d5ff8aa5e276a6e134d1d081.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/1200x/db/8d/d6/db8dd62a95a08e10dff18db6d85fe1be.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src= "https://i.pinimg.com/1200x/04/44/31/044431c8343b5801ff75f4b493fd6a24.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default Swipercard;
