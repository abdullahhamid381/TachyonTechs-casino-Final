import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import CasinoCertificationFirst from "../../components/Certified company/CasinoCertificationFirst";
import img from "../../assets/images/group-11.png";


const CasinoCertificationFirstPage = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleLg, setToggleLg] = useState(false);
    return (
        <Fragment>
            <Banner image={img} main={"카지노인사이드 인증업체"} sub={"인사이드 인증업체에서 안전하게 게임하세요!"} />
            <CasinoCertificationFirst />
        </Fragment>
    );
};

export default CasinoCertificationFirstPage;
