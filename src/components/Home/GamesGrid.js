import React from "react";
import SmartHeading from "../../components/Reuseables/SmartHeading"
import game from "../../assets/images/card7.PNG";
import { gamegrid, games } from "../../assets/data";
import "../../scss/gamesGrid.scss"
const GamesGrid = () => {
    return (
        <section className="games__grid">
            <SmartHeading
                main={"에볼루션 코리안 스피드 바카라"}
                sub={
                    "코리안 스피드 바카라는 온라인카지노 에볼루션 게이밍의 게임이며 딜러는 한국인 이며 13초"
                }
            />
            <div className="container">
                <div className="grid">
                    {gamegrid.map((game) => {
                        return (
                            <div className="item">
                                <figure>
                                    <img
                                        src={game.img}
                                        alt=""
                                    />
                                </figure>
                                <div className="details">
                                    <h3>{game.title}</h3>
                                    <h4>{game.describe}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="bottom__btns">
                    <button className="active">가페이지</button>
                    <button className="">가페이지</button>
                    <button className="">가페이지</button>
                    <button className="">가페이지</button>
                    <button className="">가페이지</button>
                </div>
            </div>
        </section>
    );
};

export default GamesGrid;
