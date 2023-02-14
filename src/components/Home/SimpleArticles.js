import React from "react";
import "../../scss/simpleArticles.scss"
const SimpleArticles = () => {
    const articles = [
        {
            title: "가페이지원가입_로그추가페이지회원가입",
            description: " 원가입_로그추가페이지회원가입_로그추가페이지회원가입_로그추가페이지원가입_로그추가페이지회원가가페이지원가입_로그추가페이지회원가입입_로그추가페이지회원가입_로그추가페이지",
            date: "2020-12-19"
        },
        {
            title: "가페이지원가입_로그추가페이지회원가입",
            description: " 원가입_로그추가페이지회원가입_로그추가페이지회원가입_로그추가페이지원가입_로그추가페이지회원가가페이지원가입_로그추가페이지회원가입입_로그추가페이지회원가입_로그추가페이지",
            date: "2020-12-19"
        },
        {
            title: "가페이지원가입_로그추가페이지회원가입",
            description: " 원가입_로그추가페이지회원가입_로그추가페이지회원가입_로그추가페이지원가입_로그추가페이지회원가가페이지원가입_로그추가페이지회원가입입_로그추가페이지회원가입_로그추가페이지",
            date: "2020-12-19"
        },
    ]
    return (
        <section className="simple__articles">
            <div className="container">
                <div className="grid">
                    {articles.map((article) => {
                        return (
                            <div className="item">
                                <div className="details">
                                    <h3>{article.title}</h3>
                                    <p>
                                        {article.description}
                                    </p>
                                    <div className="date">
                                        <p>{article.date}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SimpleArticles;
