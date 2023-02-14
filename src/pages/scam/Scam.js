import React, { Fragment } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/group-8.png";



import Form from "../../components/scam/Form";
import CasinoGrid from "../../components/Reuseables/CasinoGrid";
import { casinoCards } from "../../assets/data";
const Scam = () => {

    return (
        <Fragment>
            <Banner image={img} main={"먹튀사이트"} sub={"먹튀사이트를 조심하세요!"} />
            <Form />
            <CasinoGrid cards={casinoCards.slice(0, 3)} />
        </Fragment>
    );
};

export default Scam;
