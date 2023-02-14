import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/Announcement/banner.png";
import Form from "../../components/Announcement/Form";


const AnnouncementForm = () => {

    return (
        <Fragment>
            <Banner
                image={img}
                main={""}
                sub={""}
            />

            <Form />
        </Fragment>
    );
};

export default AnnouncementForm;
