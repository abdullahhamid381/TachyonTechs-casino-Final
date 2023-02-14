import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/Customer Care Cener/banner.png";

import Form from "../../components/Customer Care Cener/Form"
const CustomerCareForm = () => {

    return (
        <Fragment>
            <Banner
                image={img}
              
            />

            <Form />
        </Fragment>
    );
};

export default CustomerCareForm;
