import React from "react";
import SmartHeading from "../../components/Reuseables/SmartHeading";
import img from "../../assets/images/group-3.png";
import { games } from "../../assets/data";
import "../../scss/Casino Games/gamesGrid.scss";
const GamesGrid = ({ casinos }) => {
    return (
        <section className="games__grid__">
            <SmartHeading
                main={"ONLINE CASINO GAMES"}
                sub={
                    "카지노 인사이드에서 제공하는 온라인 카지노 & 슬롯 게임리스트 입니다."
                }
            />
            <div className="container">
                <div className="grid">
                    {casinos.map((casino, index) => {
                        return (
                            <div className="item">
                                <figure>
                                    <img src={casino.image} alt="" />
                                    <div className="overflow">
                                        <div className="top">
                                            <h2 className="eng">{casino.title}</h2>
                                            <h2 className="koren">{casino.tag}</h2>
                                        </div>
                                        <div className="bottom">
                                            <button>GAME START</button>
                                        </div>
                                    </div>
                                </figure>
                                <div className="details">
                                    <p>
                                        {casino.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GamesGrid;
