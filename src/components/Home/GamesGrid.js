import React from "react";
import SmartHeading from "../../components/Reuseables/SmartHeading"
import game from "../../assets/images/card7.PNG";
import { gamegrid, games } from "../../assets/data";
import "../../scss/gamesGrid.scss"
const GamesGrid = () => {
    return (
        <section className="games__grid">
            <SmartHeading
                main={"슬롯 무료체험"}
                sub={
                    "카지노 인사이드에서 제공하는 무료 슬롯 게임리스트입니다."
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
                    <button className="active">카지노 후기</button>
                    <button className="">카지노 노하우</button>
                    <button className="">갤러리</button>
                    <button className="">자유게시판</button>
               
                </div>
            </div>
        </section>
    );
};

export default GamesGrid;
