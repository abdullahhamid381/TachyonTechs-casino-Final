import React, { Fragment, useState } from "react";

import firstpageheader from '../../assets/images/Attendence bonus check/first page/header.png'



import BonusFirst from "../../components/Attendece Bonus Check/BonusFirst";
import Banner from "../../components/Reuseables/Banner";
const BonusFirstpage = () => {

    return (
        <Fragment>
           <Banner  image={firstpageheader} sub={"2차 인증하고, 보너스 받자!"} main={"보너스 포인트 신청"}/>


           
            <BonusFirst/>
        </Fragment>
    );
};

export default BonusFirstpage;
