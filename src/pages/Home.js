import React, { Fragment, useState } from "react";
import Banner from "../components/Reuseables/Banner";
import Header from "../components/Reuseables/Header";
import Sidebar from "../components/Reuseables/Sidebar";
import img from "../assets/images/header.PNG";
import { ThreeGrid, TwoGrid } from "../components/Home/SimpleGrids";
import "../scss/home.scss";
import ArticlesGrid from "../components/Home/ArticlesGrid";
import GamesGrid from "../components/Home/GamesGrid";
import SimpleArticles from "../components/Home/SimpleArticles";
import FAQs from "../components/Home/FAQs";
import ArticlesSlider from "../components/Home/ArticlesSlider";
import Accordian from "../components/Reuseables/Faqs";

const Home = () => {
    return (
        <Fragment>
            <Banner image={img} main={""} sub={""} />
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
