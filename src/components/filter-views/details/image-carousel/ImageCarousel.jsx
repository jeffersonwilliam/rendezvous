import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import './imagecarousel.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import r1 from '../../../../assets/r1.jpg';
import r2 from '../../../../assets/r2.jpg';
import r3 from '../../../../assets/r3.jpg';
import r4 from '../../../../assets/r4.jpg';
import r5 from '../../../../assets/r5.jpg';
import r6 from '../../../../assets/r6.jpg';
import r7 from '../../../../assets/r7.jpg';
import r8 from '../../../../assets/r8.jpg';
import r9 from '../../../../assets/r9.jpg';
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
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src={r1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r4} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r3} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r5} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r6} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r7} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r8} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={r9} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='swiper-button image-swiper-button-next'>
        <MdOutlineArrowForwardIos />
      </div>
    </div>
  );
};

export default ImageCarousel;
