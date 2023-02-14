import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";
import img from "../../assets/images/group-11.png";
import TableMain from "../../components/Customer Care Cener/TableMain";
const TablePage = () => {

    return (
        <Fragment>
            <Banner image={img}  />
            <TableMain />
        </Fragment>
    );
};

export default TablePage;
