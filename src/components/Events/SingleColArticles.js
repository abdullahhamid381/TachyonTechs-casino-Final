import React from "react";
import "../../scss/singleColArticles.scss";
const SingleColArticles = ({ articles }) => {
    return (
        <section className={`articles__single__grid`}>
            <div className="container">
                <div className="grid">
                    {articles.map((article) => {
                        return (
                            <div className="item">
                                <figure>
                                    <img src={article.img} alt="" />
                                </figure>
                                <div className="details">
                                    <div className="info">
                                        <div className="start">
                                            <span>관리자</span>
                                            <span>2023.01.07</span>
                                        </div>
                                        <div className="end">
                                            <span>View 101</span>
                                        </div>
                                    </div>{" "}
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SingleColArticles;
