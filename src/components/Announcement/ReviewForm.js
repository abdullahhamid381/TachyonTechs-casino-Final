import React, { Fragment } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoReorderThree } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import "../../scss/scamForm.scss"
import CommentsList from "../Reuseables/CommentsList";
import { comments } from "../../assets/data";
import { BsLink45Deg } from "react-icons/bs"
const ReviewForm = () => {
    return (
        <Fragment>
            <section className="scam__form">
                <div className="heading">
                    <h2>공지사항</h2>
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
                        <div className="head head__grid">
                            <div className="top">
                                <h3>제목이 들어가는 곳 입니다.</h3>
                                <div className="date">
                                <span>최고관리자 | 2022.12.01</span>
                                </div>
                            </div>
                            <div className="bottom"><BsLink45Deg /> 첨부파일 이름이 들어가는 곳 입니다..</div>
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
                            <button>해주세요</button>
                        </div>
                    </form>
                    <div className="records">
                        <div className="record">
                            <div className="start">
                                <div className="first">이전글</div>
                                <div className="second">
                                    상사회사를 설립할때 비용을 알려드립니다.
                                </div>
                            </div>

                            <div className="end">
                                <p>관리자</p>
                                <p>관리자</p>
                                <p>관리자</p>
                            </div>
                        </div>
                        <div className="record">
                            <div className="start">
                                <div className="first">이전글</div>
                                <div className="second">
                                    상사회사를 설립할때 비용을 알려드립니다.
                                </div>
                            </div>

                            <div className="end">
                                <p>관리자</p>
                                <p>관리자</p>
                                <p>관리자</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn__grid">
                        <div className="start">
                            <button>온라인</button>
                        </div>
                        <div className="end">
                            <button>온라인</button>
                            <button>라인온</button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ReviewForm;
