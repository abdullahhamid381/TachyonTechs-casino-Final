import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import ExchangeBanner from '../../assets/images/banner1.PNG'





import CashExchangeDetail from "../../components/Point Mall/CashExchangeDetail";
const CashExhangeDetailPage = () => {

    return (
        <Fragment>
            <Banner image="./images/point mall/header.png" main={"카인사 포인트몰에 오신것을 환영합니다."} sub={"기다렸습니다. 안전하게 모시겠습니다."} />

            
          <CashExchangeDetail/>
        </Fragment>
    );
};

export default CashExhangeDetailPage;