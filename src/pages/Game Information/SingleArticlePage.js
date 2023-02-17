import React, { useState, Fragment } from "react";

import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/Game Information/banner.png";
import { BiShare } from "react-icons/bi";
import "../../scss/Game Information/singleArticle.scss"
import SingleArticle from "../../components/Game Information/SingleArticle";

import ArticlesGrid from "../../components/Reuseables/ArticlesGrid";
import { articles, comments } from "../../assets/data";
import CommentsList from "../../components/Reuseables/CommentsList";
import { IoReorderThree } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
const SingleArticleInfo = () => {
    const [limit, setLimit] = useState(false);
    const data = [{
        name: "john"
    }, { name: 'Anna' }];
    return (
        <section className="single__article__main" >
            <Banner image={img} main={"게임정보"} sub={"카지노게임정보"} />
            <div className="heading">
                <h2>게임정보</h2>
                <div className="icons">
                    <div className="icons">
                        <span>
                            <IoReorderThree />
                        </span>
                        <span>
                            <RiShareForwardLine />
                        </span>
                        <span>
                            <FiEdit3 />
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="filter">
                    <div className="head">

                        <div className="date">
                            <select>
                                <option value="">게임이름</option>
                            </select>
                            <input type="text" placeholder="검색" />
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
            <SingleArticle border={true} />



            <CommentsList comments={comments} />
            <form action="" className="comment__form">
                <textarea
                    name=""
                    id=""
                    placeholder="댓글 내용을 입력해주세요"
                    cols="30"
                    rows="10"
                ></textarea>
                <div className="btn">
                    <button>등록</button>
                </div>
            </form>


            <ArticlesGrid articles={articles.slice(0, 3)} threeCol={true} />

        </section >
    );
};

export default SingleArticleInfo;
