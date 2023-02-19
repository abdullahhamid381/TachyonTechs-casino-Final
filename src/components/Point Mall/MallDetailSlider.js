import React, { useState, useRef } from "react";
import { ListItem } from "@mui/material";
import "../../scss/Mall Point/slider.scss";
import card1 from "../../assets/images/card2.PNG";
import { articles } from "../../assets/data";
import SmartHeading from "../../components/Reuseables/SmartHeading";
import { articleslider } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// import required modules
import { Pagination } from "swiper";
const sliderData = [
    {
        title: "마카오카지노",
        image: './images/malldetail/1.png',
        link: ""
    },
    {
        title: "마카오카지노",
        image: './images/malldetail/2.png',
        link: ""
    },
    {
        title: "마카오카지노",
        image: './images/malldetail/3.png',
        link: ""
    },
    {
        title: "마카오카지노",
        image: './images/malldetail/1.png',
        link: ""
    },
    {
        title: "마카오카지노",
        image: './images/malldetail/2.png',
        link: ""
    },
]
const MallDetailSlider = () => {
    return (
        <section className="mall__slider">
            <div className="container">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper grid"
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },

                    }}
                >
                    {sliderData.map((item) => (
                        <SwiperSlide>
                            <div className="item">
                                <figure>
                                    <img src={item.image} alt="" />
                                </figure>
                                <div className="details">
                                    <h3>{item.title}</h3>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default MallDetailSlider;
