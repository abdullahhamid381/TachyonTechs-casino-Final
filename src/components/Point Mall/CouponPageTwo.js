import React, { Fragment } from 'react'
import '../../scss/Mall Point/CoupnPageTwo.scss'
import { CouponExchangeSection } from '../../assets/data';
import { Pagination, Stack } from "@mui/material";
import CouponSlider from './CouponSlider';
const CouponPageTwo = () => {
    return (
        <Fragment>

            <div className='coupn-page-two'>
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
                                <li>카지노후기
                                </li>
                                <span>2,000p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px'}}>
                                <li>
                                    카지노 노하우</li>
                                <span>2,000p</span>
                            </div>
                        </div>

                        <div className="first-exchange-table">
                            <h1>출석체크</h1>
                            <div className="first" style={{ paddingTop: "20px" }}>
                                <li>당일출석체크</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>
                                    1위</li>
                                <span>3000p</span>
                            </div>
                            <div className="first">
                                <li>2위</li>
                                <span>2000p</span>
                            </div>
                            <div className="first">
                                <li>3위</li>
                                <span>1000</span>
                            </div>
                            <div className="first">
                                <li>
                                    누적 7일</li>
                                <span>3,000p</span>
                            </div>
                            <div className="first">
                                <li>
                                    누적 14일</li>
                                <span>6,000p</span>
                            </div>
                            <div className="first">
                                <li>
                                    누적 21일</li>
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
                                <li>가입인사(1회성)
                                </li>
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
                    <li>1개월 이내 카지노 인사이드 코드를 사용하여 충전한 회원에게만 해당
                    </li>
                    <li>부적절한 방법으로 인해, 얻은 포인트는 전액 몰수 처리</li>
                    <li>1개원 기준, 전환 횟수 무관</li>



                </div>




                <div className="exchange-section-five">
                    <div className="filter">
                        <div className='exchang-title'>
                            <h1>EXCHANGE</h1>
                            <h6>* 쿠폰. 인증업체 순위 항상 랜덤 배정됩니다.</h6>
                        </div>

                        <div className="head">
                            <button style={{color:'#868f95'}}>쿠폰전환</button>
                            <button className='active'>현금전환</button>
                        </div>
                    </div>

                    {
                        CouponExchangeSection.map((exchange) => {
                            const { img, parafirst, coupon, parasecond, parathird, rocketimg, rockettext,span } = exchange;
                            return (

                                <div className='coupon-exchange-section'>
                                    <div className='coupon-exchange-note'>
                                        <img src={img} alt="" />
                                        <div className='coupon-exchange-note-detail'>
                                            <p className='para-first'>{parafirst}</p>
                                            <h1>{coupon} <span>{span}</span> </h1>
                                            <p className='para-second' style={{padding:'10px 0',color:'#a7b6c1'}}>{parasecond}</p>
                                            <p className='para-third'>{parathird}.</p>
                                        </div>
                                    </div>
                                    <div className='coupn-exchange-rocket'>
                                        <img src={rocketimg} alt="" />
                                        <h6> {rockettext}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

                <div className='coupon-page-two'>
                    <h1>필독사항</h1>
                    <input type="textarea" />
                </div>
                {/* <CouponSlider /> */}
            </div>
        </Fragment>
    )
}

export default CouponPageTwo
