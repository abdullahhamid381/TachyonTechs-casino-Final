import React from "react";
import "../../scss/Scam Site/cardGrid.scss";
import { BsHouseDoor } from "react-icons/bs"
import { RxCrossCircled } from "react-icons/rx"
import { useNavigate } from "react-router-dom";
const CasinoGrid = ({ cards }) => {
    const navigate = useNavigate()
    return (
        <section className="casino__cards">
            <div className="container">
                <div className="grid">
                    {cards.map((card, index) => {
                        return (
                            <div className="card" >
                                <figure>
                                    <img src={card.image} alt="" />
                                    <div className="overflow">
                                        <div>{card.price}만원</div>
                                        <span className={card.isCheck ? "white" : "red"}>{card.isCheck ? "확인중" : "확인"}</span>
                                    </div>
                                </figure>
                                <div className="details">
                                    <h3>{card.title}</h3>
                                    <h5>{card.date}</h5>
                                    <p>
                                        <div className="ico"><RxCrossCircled />먹튀사이트</div>
                                        <div>{card.value}</div>
                                    </p>
                                    <p>
                                        <div className="ico"><BsHouseDoor />먹튀사이트 주소</div>
                                        <div>{card.date}</div>
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

export default CasinoGrid;
