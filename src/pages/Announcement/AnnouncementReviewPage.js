import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/Announcement/banner.png";
import ReviewForm from "../../components/Announcement/ReviewForm";



const AnnouncementReviewPage = () => {

    return (
        <Fragment>
            <Banner image={img} main={""} sub={""} />
            <ReviewForm />

        </Fragment>
    );
};

export default AnnouncementReviewPage;
