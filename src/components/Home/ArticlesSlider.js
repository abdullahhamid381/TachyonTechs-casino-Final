import React, { useState, useRef } from "react";
import { ListItem } from "@mui/material";
import "../../scss/article__slider.scss";
import card1 from "../../assets/images/card2.PNG";
import { articles } from "../../assets/data";
import SmartHeading from "../../components/Reuseables/SmartHeading";
import { articleslider } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// import required modules
import { Pagination } from "swiper";
const ArticlesSlider = () => {
    return (
        <section className="article__slider">
            <div className="container">
                <SmartHeading
                    main={"카지노사이트 인증업체"}
                    sub={
                        "모든 카지노사이트를 검증하고, 카지노게임에 대한 구체적인 베팅 노하우를 공유하는 목적으로 개설된 커뮤니티입니다."
                    }
                />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper grid"
                    breakpoints={{
                        4: {
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
                    {articleslider.map((article) => (
                        <SwiperSlide>
                            <div className="item">
                                <figure>
                                    <img src={article.img} alt="" />
                                </figure>
                                <div className="details">
                                    <h3>{article.title}</h3>
                                    <p>{article.describe}</p>
                                    <button>유니온 상세보기</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="grid"></div>
            </div>
        </section>
    );
};

export default ArticlesSlider;
