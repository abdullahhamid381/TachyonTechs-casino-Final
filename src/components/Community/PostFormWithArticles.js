import React from "react";
import { BiShare } from "react-icons/bi";
import "../../scss/scamForm.scss";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { articles, articles__v2, eventform } from "../../assets/data";
import card1 from "../../assets/images/card3.PNG";
import ReviewForm from "./ReviewForm";
import ArticlesGrid from "../Reuseables/ArticlesGrid";
const PostFormWithArticles = () => {
    return (
        <section className="scam__form">
            <div className="heading">
                <h2>먹튀사이트</h2>
            </div>
            <div className="container">
                <ul className="nav__btns">
                    <li className="">자유게시판</li>
                    <li className="active">자유게시판</li>
                    <li className="">자유게시판</li>
                    <li className="">자유게시판</li>
                </ul>


                <ReviewForm />
                <ArticlesGrid articles={eventform.slice(0, 3)} hideDescription={true} threeCol={true} date={true} border={true} />

            </div>
        </section>
    );
};

export default PostFormWithArticles;
