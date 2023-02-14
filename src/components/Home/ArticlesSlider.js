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
                    main={"에볼루션 코리안 스피드 바카라"}
                    sub={
                        "코리안 스피드 바카라는 온라인카지노 에볼루션 게이밍의 게임이며 딜러는 한국인 이며 13초"
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
                                    <button>"회원가입_로</button>
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
