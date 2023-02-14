import React from "react";
import { BiShare } from "react-icons/bi";
import "../../scss/scamForm.scss";
import { AiFillDislike, AiFillLike } from "react-icons/ai"
import ReviewForm from "./ReviewForm";
const PostForm = () => {
    return (
        <section className="scam__form">
            <div className="heading">
                <h2>가입인사</h2>

            </div>
            <div className="container">
                <ul className="nav__btns">
                    <li className="">자유게시판</li>
                    <li className="active">카지노노하우</li>
                    <li className="">카지노 후기</li>
                    <li className="">갤러리</li>

                </ul>

                <ReviewForm />
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
                            <p>2022.12.20</p>
                            <p>91</p>
                        </div>
                    </div>
                    <div className="record">
                        <div className="start">
                            <div className="first">이전글</div>
                            <div className="second">
                                합병비율 수정에 따른 등기와 채무초과회사의 합병가부
                            </div>
                        </div>

                        <div className="end">
                            <p>관리자</p>
                            <p>2022.12.20</p>
                            <p>91</p>
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
    );
};

export default PostForm;
