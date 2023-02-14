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
                            Head Office: 16, Pangyoyeok-ro 192beon-gil, Bundang-gu, Seongnam-si,Gyeonggi-do Republic Of Korea Australia Branch : Corner Pacific Highway and, Bryants Rd, Loganhomle QLD 4139 Australia Business Information : (c)SLOTBUFF 220-83-75493 | TEAM BUFF | (BC) ONLINE SERVICE | fater56599@gmail.com 
                        </p>
                    </div>

                    <h3 className="footer-title-two">Csino-inside-com,Sitemap</h3>
                    <div className="footer-button-parent">
                        {Footerdetail.map((footerbtn) => {
                            return (
                               
                                    <button>{footerbtn.btn}</button>
                              
                            );
                        })}
                    </div>
<h3 style={{margin:'20px 0'}}>프라마틱 Best 슬롯</h3>

                    <Slider/>
                    <h6 style={{margin:'20px 0'}}>COPYRIGHT SLOTBUFF(c).ALL RIGHTS RESERVED</h6>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
