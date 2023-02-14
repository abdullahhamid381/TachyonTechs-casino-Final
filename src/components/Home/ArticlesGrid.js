import React from 'react'
import { articles, articlesgrid, articles__v2 } from '../../assets/data';
import SmartHeading from "../../components/Reuseables/SmartHeading"
import card1 from "../../assets/images/card2.PNG"
import "../../scss/HomeArticlesGrid.scss"
const ArticlesGrid = () => {
    return (
        <section className='articles__grid'>
            <SmartHeading
                main={"에볼루션 코리안 스피드 바카라"}
                sub={
                    "코리안 스피드 바카라는 온라인카지노 에볼루션 게이밍의 게임이며 딜러는 한국인 이며 13초"
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
                        "회원가입_로
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ArticlesGrid
