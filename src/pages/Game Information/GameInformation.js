import React, { Fragment } from "react";
import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/Game Information/banner.png";
import "../../scss/Game Information/gameInformation.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { articles } from "../../assets/data";
import ArticlesGrid from "../../components/Reuseables/ArticlesGrid";
import { Pagination, Stack } from "@mui/material";
const GameInformation = () => {
    return (
        <section className="game__information">
            <Banner image={img} main={"게임정보"} sub={"카지노게임정보"} />
            <div className="heading">
                <h2>게임정보</h2>
                <div className="icons">
                    <span>
                        <AiOutlineEdit />
                    </span>
                </div>
            </div>

            <div className="grid">
                <div className="filter">
                    <div className="head">
                        <div className="date">
                            <select>
                                <option value="">게임이름</option>
                            </select>
                            <input type="text" placeholder="검색어를 입력하세요" />
                        </div>
                    </div>
                </div>
                <ul className="nav__btns">
                    <li className="">전체</li>
                    <li className="active">카지노</li>
                    <li className="">슬롯</li>
                    <li className="">인기게임</li>
                </ul>
            </div>
            <ArticlesGrid articles={articles} date={false} threeCol={true} />
            <div
                className="pagination"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Stack spacing={2}>
                    <Pagination count={10} showFirstButton showLastButton />
                </Stack>
            </div>
        </section>
    );
};

export default GameInformation;
