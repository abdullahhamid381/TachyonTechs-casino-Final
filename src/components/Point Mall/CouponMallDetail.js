import React, { Fragment } from 'react'
import '../../scss/Mall Point/CoupnMallDetail.scss'
import { CoupnMAllDetailReview } from '../../assets/data'
import { Pagination, Stack } from "@mui/material";
import rocket from "../../assets/images/Cash Exchange Details/rocket.png"
import MallDetailSlider from './MallDetailSlider';

const CouponMallDetail = () => {
    return (
        <Fragment>

            <div className='coupn-mall-detail'>
                <div>
                    <h1 className="cash-exchange-title">카인사포인트적립방법 안내</h1>

                    <div className="table-parent">
                        <div className="first-exchange-table">
                            <h1>글쓰기</h1>
                            <div className="first" style={{ paddingTop: "20px" }}>
                                <li>자유게시판
                                </li>
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
                                <li>
                                카지노후기</li>
                                <span>2,000p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px'}}>
                                <li>카지노 노하우

                                </li>
                                <span>2,000p</span>
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
                                <span>3000p</span>
                            </div>
                            <div className="first">
                                <li>2위</li>
                                <span>2000p</span>
                            </div>
                            <div className="first">
                                <li>3위</li>
                                <span>1000p</span>
                            </div>
                            <div className="first">
                                <li>누적 7일
                                </li>
                                <span>3,000p</span>
                            </div>
                            <div className="first">
                                <li>누적 14일

                                </li>
                                <span>6,000p</span>
                            </div>
                            <div className="first">
                                <li>
                                누적 21일
                                

                                </li>
                                <span>12,000p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px'}}>
                                <li>
                                누적 28일
                                

                                </li>
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
                                <li>모든댓글
                                </li>
                                <span>200p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px'}}>
                                <li>업체 댓글(중복X)</li>
                                <span>1000p</span>
                            </div>
                            
                        </div>
                    </div>
                </div>



                <div className="exchange-section-two">
                <div className="exchange-section-two-title">
                    <h1>카인사 포인트몰 정책 안내</h1>
                    <p>
                    카인사는 최소 30,000포인트부터 전환이 가능하며 한달 최대 500,000포인트 사용(쿠폰+현금) 가능합니다.
                    레벨에 상관없이 2차 인증자는 포인트몰을 사용할 수 있습니다.
                    </p>
                </div>

                <div className="exchange-section-two-table">
                    <center>
                        <h1>포인트 - 쿠폰전환</h1>
                    </center>
                    <div className="exchange-section-two-table-parent">
                        <h2>LV1 ~ LV10</h2>
                        <p>한달 이내 10만 충전시 30만 포인트 쿠폰 전환 가능</p>
                    </div>
                    <div className="exchange-section-two-table-parent">
                        <h2>LV11 ~ LV16</h2>
                        <p>한달 이내 30만 충전시 50만 포인트 쿠폰 전환 가능</p>
                    </div>
                    <div className="exchange-section-two-table-parent">
                        <h2>LV17 ~ LV20</h2>
                        <p>한달 이내 50만 충전시 60만 포인트 쿠폰 전환 가능</p>
                    </div>
                    <div className="exchange-section-two-table-parent">
                        <h2>LV21</h2>
                        <p>한달 이내 100만 충전시 80만 포인트 쿠폰 전환 가능</p>
                    </div>
                    <div className="exchange-section-two-table-parent">
                        <h2>LV22</h2>
                        <p>한달 이내 150만 충전시 100만 포인트 쿠폰 전환 가능</p>
                    </div>
                </div>
            </div>

            <div className="exchange-section-three">
                <li>1개월 이내 카지노 인사이드 코드를 사용하여 충전한 회원에게만 해당</li>
                <li>부적절한 방법으로 인해, 얻은 포인트는 전액 몰수 처리
                </li>
                <li>1개원 기준, 전환 횟수 무관</li>

                <div style={{paddingTop:'20px'}}>
        <center><span style={{fontSize:'24px',color:'#a7b6c1'}}>마카오 카지노</span></center>
        <span style={{float:'right',color:'#a7b6c1',marginTop:'-30px'}}>1인당 무제한 구매 가능 | A/S가능</span>
        </div>
            </div>
        
            <div className="exchange-section-four">
                <div className="exchange-four-img">
                    <img src={"./images/coupnmallformimg.PNG"} alt="" />
                </div>
                <div className="exchange-section-four-form">
                    <div className="form-intro">
                        {/* <span className="span-first">마카오 카지노</span>
                        <span className="span-second">
                            1인당 무제한 구매 가능 | 카인사 뱅크
                        </span> */}
                        <p>보유하신 포인트를 쿠폰으로 전환 할 수 있습니다.</p>
                    </div>

                    <div className="form-data">
                    <div style={{display:'flex',alignItems:'center'}}>
                    <img src={rocket} alt="" style={{width:'5%',marginTop:'37px',marginRight:'10px'}} />
                    <h3>Roket Dilivery</h3>
                    </div>
                        <select name="" id="">
                            <option value="">금액선택</option>
                        </select>
                        <br />

                        <span style={{ alignItems: "center", paddingTop: "10px", color: "#A8B7C2" }}>
                            
                            <span style={{ float: "right", marginTop: "-5px", color: "#A8B7C2" }}>

                            총 쿠폰금액 <span style={{ fontSize: "20px",paddingLeft:'10px' }}> 35,000 </span>
                                <span style={{
                                    color: "#A8B7C2"
                                }}> 원 </span>
                            </span>
                        </span>

                        <div className="form-button" style={{display:'flex',width:'100%'}}>
                            <button style={{background:'none',border:'2px solid rgb(124, 134, 140)'}}>선물하기</button>
                            <button className="active">바로구매</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="exchange-section-five">
                <div className="filter">
                    <h1>REVIEW</h1>
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

                {CoupnMAllDetailReview.map((reviewmap) => {
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
                                    <p  style={{paddingTop:'20px'}}>{reviewmap.reviewpara3}</p>

                                    <h6>{reviewmap.reviewdate}</h6>
                                </div>
                            </div>
                    );
                })}

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

            <div className="exchange-section-six">
                <div className="filter">
                    <div className="head">
                        <h3 style={{color:'rgb(83, 93, 100)'}}>베스트순 | 최신순</h3>
                        <div className="date">
                            <button>등록</button>
                        </div>
                    </div>
                </div>


            </div>

            <MallDetailSlider/>

            </div>
        </Fragment>
    )
}

export default CouponMallDetail
