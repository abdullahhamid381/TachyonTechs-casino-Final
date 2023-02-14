import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import ExchangeBanner from '../../assets/images/banner1.PNG'





import CoupnPageTwo from "../../components/Point Mall/CouponPageTwo";
const CouponPageTwoPage = () => {

    return (
        <Fragment>
             <Banner image="./images/point mall/header.png" main={"카인사 포인트몰에 오신것을 환영합니다."} sub={"기다렸습니다. 안전하게 모시겠습니다."} />

            
          <CoupnPageTwo/>
        </Fragment>
    );
};

export default CouponPageTwoPage;