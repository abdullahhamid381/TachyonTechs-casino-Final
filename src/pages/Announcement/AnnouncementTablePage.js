import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/Announcement/banner.png";
import TableMain from "../../components/Announcement/TableMain";
const AnnouncementTablePage = () => {

    return (
        <Fragment>
            <Banner image={img} main={""} sub={""} />
            <TableMain />
        </Fragment>
    );
};

export default AnnouncementTablePage;
