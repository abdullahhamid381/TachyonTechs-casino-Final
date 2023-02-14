import React from "react";
import { BiShare } from "react-icons/bi";
import "../../scss/scamForm.scss";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { articles, articles__v2, eventarticlesimg } from "../../assets/data";
import card1 from "../../assets/images/card3.PNG";
import SingleColArticles from "./SingleColArticles";
import { Pagination, Stack } from "@mui/material";
import { AiOutlineEdit } from "react-icons/ai"
const ArticlesMain = () => {
    return (
        <section className="scam__form">
            <div className="heading">
                <h2>먹튀사이트</h2>
                <div className="icons">

                    <span>
                        <AiOutlineEdit />
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="filter">
                    <div className="head">
                        <h3>베스트순 최신순</h3>
                        <div className="date">
                            <select>
                                <option value="">날짜순</option>
                            </select>
                            <input type="text" placeholder="상품평을 검색해보세요" />
                        </div>
                    </div>
                </div>

                <SingleColArticles articles={eventarticlesimg.slice(0, 3)} />
            </div>
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

export default ArticlesMain;
