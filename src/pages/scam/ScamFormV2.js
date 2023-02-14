import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/group-8.png";


import FormV2 from "../../components/scam/FormV2";
const ScamFormV2 = () => {

    return (
        <Fragment>
            <Banner
                image={img}
                main={"먹튀사이트"}
                sub={"먹튀사이트를 조심하세요!"}
            />

            <FormV2 />
        </Fragment>
    );
};

export default ScamFormV2;
