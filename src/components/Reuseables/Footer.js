import React, { Fragment } from "react";
import { Footerdetail } from "../../assets/data";
import Slider from "./Footerslider/Slider";
import '../../scss/footer.scss'
const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="footer-title">
                        <h1>CASINO INSIDE.COM</h1>
                        <p>
                            Head Office : 16, Pangyoyeok-ro 192beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do Republic of Korea
                            Australia Branch : Corner Pacific Highway and, Bryants Rd, Loganholme QLD 4129 Australia
                            Business information : (c)SLOTBUFF 220-83-75493 | TEAM BUFF | (bc)online service | fater56599@gmail.com
                        </p>
                    </div>

                    <h3 className="footer-title-two">casino-inside.com, Sitemap</h3>
                    <div className="footer-button-parent">
                        {Footerdetail.map((footerbtn) => {
                            return (

                                <button>{footerbtn.btn}</button>

                            );
                        })}
                    </div>
                    <h3 style={{ margin: '20px 0' }}>제휴사</h3>

                    <Slider />
                    <h6 style={{ margin: '20px 0' }}>COPYRIGHT(c)SLOTBUFF. ALL RIGHTS RESERVED.</h6>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
