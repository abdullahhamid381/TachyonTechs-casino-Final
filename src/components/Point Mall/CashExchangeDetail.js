import React, { Fragment } from "react";

/* IMPORTING CSS SATRT FROM HERE */

import "../../scss/Mall Point/CashExchangeDetail.scss";
import "../../scss/scamForm.scss";

/* IMPORTING DATA FROM THE DATA FILE ARRAY HERE */

import { Cashexchangereview, ExchangDetaileSecondTable } from "../../assets/data";

/* BOTTOM NUMBERING PAGINATION IMPORTING HERE */
import { Pagination, Stack } from "@mui/material";

/* IMPORTING IMAGES FROM THE FOLDER */
import formimg from '../../assets/images/Cash Exchange Details/formimg.png'
import rocket from '../../assets/images/Cash Exchange Details/rocket.png'
import CouponSlider from "./CouponSlider";

const CashExchangeDetail = () => {
    return (
        <Fragment>

            {/* <--------------------CASH EXCHANGE CONTAINER START FROM HERE-------------------> */}

            <div className="cash-exchange-container">
                <div>

                    { /* PAGE TITLE START FROM HERE */}


                    <h1 className="cash-exchange-title">카인사포인트적립방법 안내</h1>

                    {/*  TABLE START FROM HERE */}

                    <div className="table-parent">
                        <div className="first-exchange-table">
                            <h1>글쓰기</h1>
                            <div className="first" style={{ paddingTop: "20px" }}>
                                <li>자유게시판</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>갤러리</li>
                                <span>300p</span>
                            </div>
                            <div className="first">
                                <li>먹튀신고</li>
                                <span>2,000p</span>
                            </div>
                            <div className="first">
                                <li>카지노후기</li>
                                <span>2,000p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px'}}>
                                <li>카지노 노하우</li>
                                <span>2,00p</span>
                            </div>
                        </div>

                        <div className="first-exchange-table">
                            <h1>출석체크</h1>
                            <div className="first" style={{ paddingTop: "20px" }}>
                                <li>당일출석체크</li>
                                <span>1,500p</span>
                            </div>
                            <div className="first">
                                <li>1위</li>
                                <span>3,000p</span>
                            </div>
                            <div className="first">
                                <li>2위</li>
                                <span>2000p</span>
                            </div>
                            <div className="first">
                                <li>3위</li>
                                <span>3100p</span>
                            </div>
                            <div className="first">
                                <li>누적 7일</li>
                                <span>3,000p</span>
                            </div>
                            <div className="first">
                                <li>
                                    누적 14일</li>
                                <span>6,000p</span>
                            </div>
                            <div className="first">
                                <li>누적 21일
                                </li>
                                <span>12,000p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px'}} >
                                <li>누적 28일</li>
                                <span>25,000p</span>
                            </div>
                        </div>

                        <div className="first-exchange-table">
                            <h1>기타</h1>
                            <div className="first" style={{ paddingTop: "20px" }}>
                                <li>가입인사(1회성)</li>
                                <span>3,500p</span>
                            </div>
                            <div className="first">
                                <li>모든댓글</li>
                                <span>200p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px'}}>
                                <li>인증업체 댓글(중복X)
                                </li>
                                <span>1000p</span>
                            </div>

                        </div>
                    </div>
                </div>



                {/* TABLE SECOND START FROM HERE */}

                <div className="exchange-section-two">

                    {/* SECOND TABLE TITLE AND INTRO START FROM HERE */}

                    <div className="exchange-section-two-title">
                        <h1>카인사 포인트몰 정책 안내</h1>
                        <p>
                            카인사는 최소 30,000포인트부터 전환이 가능하며 한달 최대 500,000포인트 사용(쿠폰+현금) 가능합니다.
                            레벨에 상관없이 2차 인증자는 포인트몰을 사용할 수 있습니다.
                        </p>
                    </div>

                    {/* SECOND TABLE DATA SECTION START FROM HERE WE GETTING ALL THE DATA FROM THE DATA FILE ARRAY AND RUNING THE MAP FOR GETING MULTIPLE DATA*/}

                    <div className="exchange-section-two-table">
                        <center>
                            <h1>포인트 - 쿠폰전환</h1>
                        </center>

                        {
                            ExchangDetaileSecondTable.map((detail) => {
                                const { title, para } = detail;
                                return (
                                    <div className="exchange-section-two-table-parent">
                                        <h2>{title}</h2>
                                        <p>{para}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                {/* BULLETS POINT SECTION START HERE */}

                <div className="exchange-section-three">
                    <li>1개월 이내 카지노 인사이드 코드를 사용하여 충전한 회원에게만 해당</li>
                    <li>부적절한 방법으로 인해, 얻은 포인트는 전액 몰수 처리
                    </li>
                    <li>1개원 기준, 전환 횟수 무관</li>
                </div>

                { /* FORM SECTION START HERE */}

                <div className="exchange-section-four">
                    {/* FORM IMAGE SECTION */}

                    <div className="exchange-four-img">
                        <img src={formimg} alt="" />
                    </div>

                    { /*  FORM INPUT SECTION */}
                    <div className="exchange-section-four-form">
                        <div className="form-intro">
                            <span className="span-first">마카오 카지노</span>
                            <span className="span-second">
                                1인당 무제한 구매 가능 | 카인사 뱅크
                            </span>
                            <p>보유하신 포인트를 쿠폰으로 전환 할 수 있습니다.</p>
                        </div>

                        <div className="form-data">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={rocket} alt="" style={{ width: '5%', marginTop: '37px', marginRight: '10px' }} />
                                <h3>Roket Dilivery</h3>
                            </div>
                            <select name="" id="">
                                <option value="">금액선택</option>
                            </select>
                            <br />

                            <span style={{ alignItems: "center", paddingTop: "10px", color: "#A8B7C2" }}>
                                총 현금 금액
                                <span style={{ float: "right", marginTop: "-5px", color: "#A8B7C2" }}>

                                    총 수량 1개 <span style={{ fontSize: "20px",paddingLeft:'10px' }}> 10,000 </span>
                                    <span style={{
                                        color: "#A8B7C2"
                                    }}> 원 </span>
                                </span>
                            </span>

                            <div className="form-button" style={{display:'flex'}}>
                                <button style={{background:'none',border:'2px solid #7C868C'}}>선물하기</button>
                                <button className="active">바로구매</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* REVIEW SECTION START FROM HERE */}

                <div className="exchange-section-five">
                    <div className="filter">
                        <h1>Review</h1>
                        <div className="head">
                            <span>베스트순 | <span style={{color:'#5E6B73'}}>최신순</span></span>
                            <div className="date">
                                <select>
                                    <option value="">별점순</option>
                                </select>
                                <input type="text" placeholder="상품평을 검색해보세요" />
                            </div>
                        </div>
                    </div>


                    { /* REVIEW DETAIL WE GETTING ALL THE DATA FROM THE DATA FILE ARRAY AND RUNNING MAP FOR GETTING MULTIPLE DATA */}

                    {Cashexchangereview.map((reviewmap) => {
                        return (
                            <div className="review-excahnage-section-five">
                                <div className="review-title-parent">
                                    <span>{reviewmap.reviewtitle}</span>
                                    <span className="review-star">
                                        <img src={reviewmap.reviewstar} alt="" />
                                        <img src={reviewmap.reviewstar} alt="" />
                                        <img src={reviewmap.reviewstar} alt="" />
                                        <img src={reviewmap.reviewstar} alt="" />
                                        (5.0)
                                    </span>
                                </div>

                                <div className="review-para" style={{lineHeight:'22px'}}>
                                    <p>{reviewmap.reviewpara}</p>
                                    <p>{reviewmap.reviewpara1}</p>
                                    <p>{reviewmap.reviewpara2}</p>
                                    <p style={{paddingTop:'20px'}}>{reviewmap.reviewpara3}</p>

                                    <h6>{reviewmap.reviewdate}</h6>
                                </div>
                            </div>
                        );
                    })}

                    {/* NUMBER PAGINATION START FROM HERE */}

                    <div style={{ padding: '50px 0' }}>
                        <div
                            className="pagination"
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <Stack spacing={2}>
                                <Pagination count={10} showFirstButton showLastButton />
                            </Stack>
                        </div>

                        <div style={{ display: 'flex', float: 'right', alignItems: 'center',marginTop:'-25px',}}>
                            <h6 style={{color:'#535d64' }}>목록보기</h6>
                            <img src="./images/home/ham.svg" alt="" style={{ width: '25%', marginLeft: '10px' }} />
                        </div>
                    </div>
                </div>


                {/* SECOND LAST SECTION SATRT HERE */}

                <div className="exchange-section-six">
                    <div className="filter">
                        <div className="head">
                            <h3 style={{color:"#535d64"}}>후기를 작성해주세요</h3>
                            <div className="date">
                                <button>등록</button>
                            </div>
                        </div>
                    </div>


                </div>



                {/* <Slider/> */}

                <div style={{padding:'40px 0 80px 0'}}>
                    <CouponSlider/>
                </div>
            </div>
        </Fragment>
    );
};

export default CashExchangeDetail;
