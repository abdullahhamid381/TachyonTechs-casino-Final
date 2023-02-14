import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/group-8.png";


import FormV1 from "../../components/scam/FormV1";
const ScamFormV1 = () => {

    return (
        <Fragment>
            <Banner
                image={img}
                main={"먹튀사이트"}
                sub={"먹튀사이트를 조심하세요!"}
            />

            <FormV1 />
        </Fragment>
    );
};

export default ScamFormV1;
