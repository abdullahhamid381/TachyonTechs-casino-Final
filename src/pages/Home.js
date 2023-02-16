import React, { Fragment, useState } from "react";
import Banner from "../components/Reuseables/Banner";
import Header from "../components/Reuseables/Header";
import Sidebar from "../components/Reuseables/Sidebar";
import img from "../assets/images/home/main (1).jpg";
import { ThreeGrid, TwoGrid } from "../components/Home/SimpleGrids";
import "../scss/home.scss";
import ArticlesGrid from "../components/Home/ArticlesGrid";
import GamesGrid from "../components/Home/GamesGrid";
import SimpleArticles from "../components/Home/SimpleArticles";
import FAQs from "../components/Home/FAQs";
import ArticlesSlider from "../components/Home/ArticlesSlider";
import Accordian from "../components/Reuseables/Faqs";
// edit
const Home = () => {
    return (
        <Fragment>
            <Banner image={img} textCenter={true} main={"온라인카지노 게임의 모든 것, 카지노 인사이드"} sub={"안전한 온라인 카지노의 선두주자 카지노 인사이드에서 다양한 게임을 경험해보세요!"} />
            <ArticlesSlider />
            <TwoGrid />
            <ArticlesGrid />
            <ThreeGrid />
            <GamesGrid />
            <SimpleArticles />
            <FAQs />
        </Fragment>
    );
};

export default Home;
