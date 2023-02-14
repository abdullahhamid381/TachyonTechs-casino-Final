import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/Customer Care Cener/banner.png";

import ReviewForm from "../../components/Customer Care Cener/ReviewForm";


const ReviewPage = () => {

    return (
        <Fragment>
            <Banner image={img} />
            <ReviewForm />

        </Fragment>
    );
};

export default ReviewPage;
