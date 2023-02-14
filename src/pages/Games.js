import React, { Fragment, useState } from "react";
import Banner from "../components/Reuseables/Banner";

import img from "../assets/images/group-20.png";

import { TwoGrid } from "../components/Home/SimpleGrids";

import "../scss/home.scss";

import GamesGrid from "../components/Casino Games/GamesGrid";

import { casinos } from "../assets/data";
const Games = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleLg, setToggleLg] = useState(false);
    return (
        <Fragment>
            <Banner
                image={img}
                main={"온라인카지노 게임의 모든것, 카지노 인사이드"}
                sub={
                    "안전한 온라인 카지노의 선두주자카지노 인사이드에서 다양한 게임을 경험해보세요!"
                }
            />
            <GamesGrid casinos={casinos} />
        </Fragment>
    );
};

export default Games;
