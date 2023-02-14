import React from "react";
import "../../scss/scamForm.scss";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { comments, eventform } from "../../assets/data";
import { IoReorderThree } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import CommentsList from "../Reuseables/CommentsList";
import ArticlesGrid from "../Reuseables/ArticlesGrid";
import { BsLink45Deg } from "react-icons/bs"
const PostFormWithArticles = () => {
    return (
        <section className="scam__form">
            <div className="heading">
                <h2>이벤트</h2>
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
                <section className="review__from">
                    <div className="top__form">
                        <div className="head head__grid">
                            <div className="top">
                                <h3>온라인카지노 먹튀(제목)</h3>
                                <div className="date">
                                    최고관리자 <span>2022.12.01</span>
                                </div>
                            </div>
                            <div className="bottom"><BsLink45Deg /> 첨부파일 이름이 들어가는 곳 입니다.</div>
                        </div>
                        <form className="body">

                            <textarea
                                name=""
                                placeholder="내용이 들어가는 곳 입니다."
                                id=""
                                cols="30"
                                rows="15"
                            ></textarea>
                            <div className="like__btn">
                                <button>
                                    <AiFillLike />
                                    349
                                </button>
                                <button>
                                    <AiFillDislike />0
                                </button>
                            </div>
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
                    <ArticlesGrid articles={eventform.slice(0, 3)} threeCol={true} border={true} hideDescription={true} date />
                </section>
            </div>
        </section>
    );
};

export default PostFormWithArticles;
