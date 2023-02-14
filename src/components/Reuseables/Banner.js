import React, { Fragment } from "react";
import "../../scss/banner.scss";
const Banner = ({ image, main, sub }) => {
    return (
        <Fragment>
            <div className="banner">
                <div className="img">
                    <img src={image} alt="" />
                    <div className="details">
                        <h2>{main}</h2>
                        <h3>{sub}</h3>
                    </div>
                </div>

            </div>
            </Fragment>
    );
};

export default Banner;
