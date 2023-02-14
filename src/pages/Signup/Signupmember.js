import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/header.PNG";
import MemberForm from "../../components/Singup/Signupmember/MemberForm";


const Signupmember = () => {

    return (
        <Fragment>
            <Banner image={img} main={""} sub={""} />

            <MemberForm />
        </Fragment>
    );
};

export default Signupmember;
