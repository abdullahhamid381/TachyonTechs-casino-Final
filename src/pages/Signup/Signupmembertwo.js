import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/header.PNG";


import '../../scss/Signup/Singupmembertwo/Signupmembertwo.scss';


import Signuoformtwo from "../../components/Singup/Signupmembertwo/Signuoformtwo";


const Signupmembertwo = () => {

    return (
        <Fragment>
            <Banner image={img} main={""} sub={""} />



            <Signuoformtwo />
        </Fragment>
    );
};

export default Signupmembertwo;
