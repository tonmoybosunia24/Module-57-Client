import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../../assets/main-banner-1_1903x650.webp'
import banner2 from '../../../assets/main-banner-2_1903x650.webp'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Slider = () => {
       return (
              <div>
                     <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                   delay: 2500,
                            }}
                            navigation
                            pagination={{ clickable: true }}
                     >
                            <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                     </Swiper>
              </div >
       );
};

export default Slider;