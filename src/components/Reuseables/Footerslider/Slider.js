import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../Footerslider/Slider.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <Fragment>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={5}
                /*   autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }} */
              /*   pagination={{
                    clickable: true,
                }} */

                breakpoints={{
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    900: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                   
                }}

                navigation={true}
                loop = {true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

            <SwiperSlide><img src={'./images/footerfirst.png'} alt="" /></SwiperSlide>
            <SwiperSlide><img src={'./images/footersecond.png'} alt="" /></SwiperSlide>
            <SwiperSlide><img src={'./images/footerthird.png'} alt="" /></SwiperSlide>
            <SwiperSlide><img src={'./images/footerfourth.png'} alt="" /></SwiperSlide>
            <SwiperSlide><img src={'./images/footerfifth.png'} alt="" /></SwiperSlide>
            <SwiperSlide><img src={'./images/footersixth.png'} alt="" /></SwiperSlide>
            <SwiperSlide><img src={'./images/footerseventh.png'} alt="" /></SwiperSlide>

            </Swiper>
        </Fragment>
    );
}
