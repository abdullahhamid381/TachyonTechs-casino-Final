import React, { Fragment } from 'react'
import '../../scss/Mall Point/MallPointHome.scss'
import { CoupnProductImg } from '../../assets/data';
import { CouponExchangeSection } from '../../assets/data';

const MallPointHome = () => {
    return (
        <Fragment>

            <div className='mall-point-home'>
                <div>
                    <h1 className="cash-exchange-title">카인사포인트적립방법 안내</h1>

                    <div className="table-parent">
                        <div className="first-exchange-table">
                            <h1>카인사포인트</h1>
                            <div className="first" style={{ paddingTop: "40px" }}>
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                        </div>

                        <div className="first-exchange-table">
                            <h1>카인사포인트</h1>
                            <div className="first" style={{ paddingTop: "40px" }}>
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                        </div>

                        <div className="first-exchange-table">
                            <h1>카인사포인트</h1>
                            <div className="first" style={{ paddingTop: "40px" }}>
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
                            </div>
                            <div className="first">
                                <li>카인사포인트</li>
                                <span>500p</span>
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
                            <h1>Coupon Product</h1>
                            <img src="./images/togle.png" alt="" />
                        </div>

                        <div className='coupon-product-image-parent'>
                            {
                                CoupnProductImg.map((map) => {
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

                    {
                        CouponExchangeSection.map((exchange) => {
                            const { img, parafirst, coupon, parasecond, parathird, rocketimg, rockettext } = exchange;
                            return (

                                <div className='coupon-exchange-section'>
                                    <div className='coupon-exchange-note'>
                                        <img src={img} alt="" />
                                        <div className='coupon-exchange-note-detail'>
                                            <p className='para-first'>{parafirst}</p>
                                            <h1>{coupon}</h1>
                                            <p className='para-second'>{parasecond}</p>
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



            </div>
        </Fragment>
    )
}

export default MallPointHome;
