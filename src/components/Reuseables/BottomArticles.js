import React from 'react'
import card1 from "../../assets/images/card3.PNG";
import "../../scss/bottomArticles.scss"
const BottomArticles = ({ articles }) => {
    return (
        <section className={`post__articles__grid  three__col`}>
            <div className="container">
                <div className="grid">
                    {[1, 2, 3].map((article) => {
                        return (
                            <div className="item">
                                <figure>
                                    <img src={card1} alt="" />
                                </figure>
                                <div className="details">
                                    <h3>流水，《漢語大詞典》拾遺之四 詞典》拾十</h3>
                                    <div className="info">
                                        <div className="start">
                                            <span>관리자</span>
                                            <span>2023.01.07</span>
                                        </div>
                                        <div className="end">
                                            <span>View 101</span>
                                        </div>
                                    </div>{" "}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default BottomArticles