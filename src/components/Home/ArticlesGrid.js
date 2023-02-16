import React from 'react'
import { articles, articlesgrid, articles__v2 } from '../../assets/data';
import SmartHeading from "../../components/Reuseables/SmartHeading"
import card1 from "../../assets/images/card2.PNG"
import "../../scss/HomeArticlesGrid.scss"
const ArticlesGrid = () => {
    return (
        <section className='articles__grid'>
            <SmartHeading
                main={"온라인카지노 게임하기"}
                sub={
                    "카지노 인사이드에서 제공하는 온라인카지노 & 슬롯 게임리스트입니다."
                }
            />
            <div className="container">
                <div className="grid">
                    {articlesgrid.map((article) => {
                        return <div className="item">

                            <figure>
                                <img src={article.img} alt="" />
                            </figure>
                            <div className="details">
                                <h3>{article.title}</h3>
                                <p>{article.describe}</p>
                            </div>
                        </div>;
                    })}
                </div>
                <div className="btn__grid">
                    <button>
                    + 게임 더보기
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ArticlesGrid
