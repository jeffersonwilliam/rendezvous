import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import './imagecarousel.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { IoChevronBackCircleOutline } from 'react-icons/io';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { Navigation } from 'swiper';

const ImageCarousel = () => {
  return (
    <div className='encapsulating-carousel'>
      <div className='swiper-button image-swiper-button-prev'>
        <MdOutlineArrowBackIosNew />
      </div>
      <div className='menu-img-carousel'>
        {/* <div className='swiper-button image-swiper-button-next'>
        <MdOutlineArrowForwardIos />
      </div>

      <div className='swiper-button image-swiper-button-prev'>
        <MdOutlineArrowBackIosNew />
      </div> */}

        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          // freeMode={true}
          // navigation={true}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

      <div className='swiper-button image-swiper-button-next'>
        <MdOutlineArrowForwardIos />
      </div>
    </div>
  );
};

export default ImageCarousel;
