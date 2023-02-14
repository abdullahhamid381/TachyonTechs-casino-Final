import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import ExchangeBanner from '../../assets/images/banner1.PNG'





import CouponMallDetail from "../../components/Point Mall/CouponMallDetail";
const CouponMallDetailPage = () => {

    return (
        <Fragment>
             <Banner image="./images/point mall/header.png" main={"카인사 포인트몰에 오신것을 환영합니다."} sub={"기다렸습니다. 안전하게 모시겠습니다."} />

            
          <CouponMallDetail/>
        </Fragment>
    );
};

export default CouponMallDetailPage;