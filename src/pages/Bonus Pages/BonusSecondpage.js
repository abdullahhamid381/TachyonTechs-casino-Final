import React, { Fragment, useState } from "react";





import BonusSecond from "../../components/Attendece Bonus Check/BonusSecond";
import Banner from "../../components/Reuseables/Banner";
const BonusSecondpage = () => {

    return (
        <Fragment>
           <Banner  image={'./images/attendence check/1.png'} sub={""} main={""}/>
            <BonusSecond/>
        </Fragment>
    );
};

export default BonusSecondpage;
