import React, { Fragment } from "react";
import "../../scss/smartHeading.scss";
const SmartHeading = ({ main, sub }) => {
    return (
        <Fragment>
            <div className="smart__heading">
                <h2>{main}</h2>
                <h3>{sub}</h3>
            </div>
        </Fragment>
    );
};

export default SmartHeading;
