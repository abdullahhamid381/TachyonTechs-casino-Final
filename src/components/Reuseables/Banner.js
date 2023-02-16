import React, { Fragment } from "react";
import "../../scss/banner.scss";
const Banner = ({ image, main, sub, textCenter }) => {
    // write a filter products function
    return (
        <Fragment>
            <div className="banner">
                <div className="img">
                    <img src={image} alt="" />
                    <div
                        className="details"
                        style={
                            textCenter
                                ? {
                                    left: "50%",
                                    transform: "translate(-50%,-50%)",
                                    textAlign: "center",
                                }
                                : null
                        }
                    >
                        <h2>{main}</h2>
                        <h3>{sub}</h3>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Banner;
