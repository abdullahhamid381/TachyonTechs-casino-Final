import React, { Fragment } from "react";

import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/Game News/banner.png";
import "../../scss/Game Information/gameInformation.scss";
import SingleArticle from "../../components/Game Information/SingleArticle";

import ArticlesGrid from "../../components/Reuseables/ArticlesGrid";
import { articles, comments } from "../../assets/data";
import CommentsList from "../../components/Reuseables/CommentsList";
const SingleArticleNewsV2 = () => {
    return (
        <section className="single__article__main">
            <Banner image={img} main={"게임뉴스"} sub={"카지노 게임뉴스"} />



            <SingleArticle />
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
            <ArticlesGrid style={'one'} articles={articles.slice(0, 2)} date={true} threeCol={false} />
        </section>
    );
};

export default SingleArticleNewsV2;
