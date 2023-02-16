import React from "react";
import "../../scss/scamForm.scss";
import { IoReorderThree } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import CommentsList from "../Reuseables/CommentsList";
import { comments } from "../../assets/data";

const Form = () => {

    return (
        <section className="scam__form">
            <div className="heading">
                <h2>먹튀사이트</h2>
                <div className="icons">
                    <span>
                        <IoReorderThree />
                    </span>
                    <span>
                        <RiShareForwardLine />
                    </span>
                    <span>
                        <FiEdit3 />
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="top__form">
                    <div className="head">
                        <h3>온라인카지노 먹튀(제목)</h3>
                        <div className="date">
                            최고관리자 | <span>2022.12.01</span>
                        </div>
                    </div>
                    <form className="body">
                        <textarea
                            name=""
                            placeholder="내용이 들어가는 곳 입니다."
                            id=""
                            cols="20"
                            rows="20"
                        ></textarea>
                    </form>
                </div>
                <div className="bottom__form">

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
                </div>
            </div>
        </section>
    );
};

export default Form;
