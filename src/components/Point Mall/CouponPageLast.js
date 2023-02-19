import React, { Fragment } from 'react'
import '../../scss/Mall Point/CouponPageLast.scss'
import { CoupnProductImg, CoupnProductImgtwo } from '../../assets/data';
import { CouponExchangeSection } from '../../assets/data';

const CouponPageLast = () => {
    return (
        <Fragment>

            <div className='mall-point-home'>
                <div>
                    <h1 className="cash-exchange-title">카인사포인트적립방법 안내</h1>

                    <div className="table-parent">
                        <div className="first-exchange-table">
                            <h1>글쓰기</h1>
                            <div className="first" style={{ paddingTop: "20px !important" }}>
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
                            <div className="first" style={{paddingBottom:'20px !important'}}>
                                <li>카지노 노하우</li>
                                <span>2,00p</span>
                            </div>
                        </div>

                        <div className="first-exchange-table">
                            <h1>출석체크</h1>
                            <div className="first" style={{ paddingTop: "20px !important" }}>
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
                            <div className="first" style={{paddingBottom:'20px !important'}} >
                                <li>누적 28일</li>
                                <span>25,000p</span>
                            </div>
                        </div>

                        <div className="first-exchange-table">
                            <h1>기타</h1>
                            <div className="first" style={{ paddingTop: "20px !important" }}>
                                <li>가입인사(1회성)</li>
                                <span>3,500p</span>
                            </div>
                            <div className="first">
                                <li>모든댓글</li>
                                <span>200p</span>
                            </div>
                            <div className="first" style={{paddingBottom:'20px !important'}}>
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
                            카인사는 최소 30,000포인트부터 전환이 가능하며 한달 최대
                            500,000포인트 사용(쿠폰+현금) 가능합니다. 레벨에 상관없이 2차
                            인증자는 포인트몰을 사용할 수 있습니다.
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
                            <h2>LV1 ~ LV10</h2>
                            <p>한달 이내 10만 충전시 30만 포인트 쿠폰 전환 가능</p>
                        </div>
                        <div className="exchange-section-two-table-parent">
                            <h2>LV1 ~ LV10</h2>
                            <p>한달 이내 10만 충전시 30만 포인트 쿠폰 전환 가능</p>
                        </div>
                        <div className="exchange-section-two-table-parent">
                            <h2>LV1 ~ LV10</h2>
                            <p>한달 이내 10만 충전시 30만 포인트 쿠폰 전환 가능</p>
                        </div>
                        <div className="exchange-section-two-table-parent">
                            <h2>LV1 ~ LV10</h2>
                            <p>한달 이내 10만 충전시 30만 포인트 쿠폰 전환 가능</p>
                        </div>
                    </div>
                </div>

                <div className="exchange-section-three">
                    <li>개월 이내 카지노 인사이드 코드를 사</li>
                    <li>용하여 충전한 회원에게만 해당 부적절</li>
                    <li>몰수 처리 1개원 기준, 전환 횟수 무관</li>
                </div>




                <div className="exchange-section-five">
                    <div className="filter">
                        <div className='exchang-title'>
                            <h1>EXCHANGE</h1>
                            <h6>포인트몰_쿠폰페이지</h6>
                        </div>

                        <div className="head">
                            <button>쿠폰전환</button>
                            <button className='active'>현금전환</button>
                        </div>




                        <div className='coupon-product-image-parent'>
                            {
                                CoupnProductImgtwo.map((map) => {
                                    const { img, title, subtitle, para } = map;
                                    return (
                                        <div className='coupn-product-img'>
                                            <img src={img} alt="" />
                                            <h1>{title}</h1>
                                            <h6>{subtitle}</h6>
                                            <p>{para}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>

                 


                </div>



            </div>
        </Fragment>
    )
}

export default CouponPageLast;
