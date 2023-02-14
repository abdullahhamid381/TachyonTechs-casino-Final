import React, { Fragment } from "react";
import "../../scss/Casino Certification/CasinoCertificationthird.scss";
import firstimg from "../../assets/images/Casino Certification/first.png";
import second from "../../assets/images/Casino Certification/second.png";
import third from "../../assets/images/Casino Certification/third.png";
import fourth from "../../assets/images/Casino Certification/fourth.png";
import fifth from "../../assets/images/Casino Certification/fifth.png";
import sixth from "../../assets/images/Casino Certification/sixth.png";
import { casinocertificationthirdcards } from "../../assets/data";
import { Pagination, Stack } from "@mui/material";
import {
    AiOutlineHome,
    AiFillDollarCircle,
    AiFillGoogleCircle,
    IoCallOutlin,
    AiOutlineSetting,
    IoMdCall,
} from "react-icons/ai";
import { CommentThird } from "../../assets/data";
const CasinoCertificationThird = () => {
    return (
        <Fragment>
            <div className="casino-certification-third">
                <div className="title">
                    <h1>카지노 사이트 인증업체</h1>
                </div>

                {/* CARDS SECTION START FROM HERE */}

                <div className="card-parent">

                
                    {/* FIRST SECTION START HERE */}

                    <div className="img-card">
                    <center><h3>홍길동카지노</h3></center>
                        <img src={firstimg} alt="" />
                    </div>
                    <div className="card-first-data-parent">
                        <div className="card-data">
                            <button>이벤트1.</button>
                            <h6>이벤트 내용 혹은 제목이 들어가는 곳 입니다.</h6>
                        </div>
                        <div className="card-data">
                            <button>이벤트2.</button>
                            <h6>이벤트 내용 혹은 제목이 들어가는 곳 입니다.</h6>
                        </div>
                        <div className="card-data">
                            <button>이벤트3.</button>
                            <h6>이벤트 내용 혹은 제목이 들어가는 곳 입니다.</h6>
                        </div>
                        <div className="card-data">
                            <button>이벤트4.</button>
                            <h6>이벤트 내용 혹은 제목이 들어가는 곳 입니다.</h6>
                        </div>
                        <div className="card-data">
                            <button>이벤트5.</button>
                            <h6>
                                이벤트 내용 혹은 제목이 들어가는 곳 입니다.이벤트 내용 혹은
                                제목이 들어가는 곳
                            </h6>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="icons-parent">
                            <span className="icon">
                                {" "}
                                <AiOutlineHome />{" "}
                            </span>
                            <span>사이트주소</span>
                            <h6>www.naver.com</h6>
                        </div>
                        <div className="icons-parent">
                            <span className="icon">
                                {" "}
                                <AiOutlineHome />{" "}
                            </span>
                            <span>연락처</span>
                            <h6>010.0123.4567</h6>
                        </div>
                        <div className="icons-parent">
                            <span className="icon">
                                {" "}
                                <AiOutlineSetting />{" "}
                            </span>
                            <span>사이트정보</span>
                            <h6>정보가 들어가는 곳 입니다.</h6>
                        </div>
                    </div>
                </div>

                <div className="images-parent">
                    <img src={second} alt="" />
                    <img src={third} alt="" />
                    <img src={fourth} alt="" />
                    <img src={fifth} alt="" />
                    <img src={sixth} alt="" />
                </div>

                <div className="button-parent">
                    <button>홍길동카지노 바로가기</button>
                    <button>인증업체 쿠폰 구매하러가기</button>
                </div>

                {/* COMMENT SECTION START HERE */}

                <div className="comment-parent-section">
                    <div>
                        <span style={{ fontSize: '24px' }}>댓글댓글</span>
                        <span style={{ color: '#5f6b75', paddingLeft: '5px' }}> 172개</span>
                    </div>

                    {
                        CommentThird.map((comment) => {
                            const { btn, level, name, date, describe, img } = comment;
                            return (
                                <div className="comment-parent">
                                    <div>
                                        <button></button>
                                        <span className="level">{level}</span> <br />
                                        <div className="detail">
                                            <span className="name"> {name}</span>
                                            <span className="date">{date}</span>
                                            <p className="describe">{describe}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="comment-typing">
                        <div className="title">
                            <img src="./images/locked.png" alt="" />
                            <span>댓글내용확인</span>
                        </div>
                        <div className="input-type">
                            <input type="textarea" placeholder="댓글 내용을 입력해주세요" className="text"/> <br />
                            <input type="checkbox" className="checkbox"/>
                            <span className="accept"> 비밀글작성</span>
                            <button className="submit">댓글등록</button>
                        </div>
                    </div>

                </div>



{/* CARDS SECTION START HERE */}


{
    casinocertificationthirdcards.map((map)=>{
        return(
            <div className="card-parent">

                
                    {/* FIRST SECTION START HERE */}

                    <div className="img-card">
                    <center><h3>{map.h3}</h3></center>
                        <img src={map.img} alt="" />
                    </div>
                    <div className="card-first-data-parent">
                        <div className="card-data">
                            <button>{map.button}</button>
                            <h6>{map.title}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buttontwo}</button>
                            <h6>{map.titletwo}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buttonthree}</button>
                            <h6>{map.titlethree}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buutonfour}</button>
                            <h6>{map.buutonfour}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buttonfive}</button>
                            <h6>
                                {map.titlefive}
                            </h6>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="icons-parent">
                            <span className="icon">
                                {map.homeicon}
                            </span>
                            <span>{map.hometitle}</span>
                            <h6>{map.homeweb}</h6>
                        </div>
                        <div className="icons-parent">
                            <span className="icon">
                                {map.cellicon}
                            </span>
                            <span>{map.celltitle}</span>
                            <h6>{map.cellno}</h6>
                        </div>
                        <div className="icons-parent">
                            <span className="icon">
                                {map.settingicons}
                            </span>
                            <span>{map.settingtitle}</span>
                            <h6>{map.settinginfo}</h6>
                        </div>
                    </div>
                </div>
        )
    })
}


                <div
                    className="pagination"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "80px 0",
                    }}
                >
                    <Stack spacing={2}>
                        <Pagination count={10} showFirstButton showLastButton />
                    </Stack>
                </div>
            </div>
        </Fragment>
    );
};

export default CasinoCertificationThird;
