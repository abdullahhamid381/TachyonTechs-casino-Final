import React, { Fragment, useState } from "react";

import Headerimg from '../../assets/images/header.PNG'



import BonusSecond from "../../components/Attendece Bonus Check/BonusSecond";
import Banner from "../../components/Reuseables/Banner";
const BonusSecondpage = () => {

    return (
        <Fragment>
           <Banner  image={Headerimg} sub={""} main={""}/>
            <BonusSecond/>
        </Fragment>
    );
};

export default BonusSecondpage;
