import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import CasinoCertificationThird from "../../components/Certified company/CasinoCertificationThird";
import img from "../../assets/images/group-11.png";


const CasinoCertificationThirdPage = () => {

    return (
        <Fragment>
            <Banner image={img} main={"카지노인사이드 인증업체"} sub={"인사이드 인증업체에서 안전하게 게임하세요!"} />
            <CasinoCertificationThird />
        </Fragment>
    );
};

export default CasinoCertificationThirdPage;
