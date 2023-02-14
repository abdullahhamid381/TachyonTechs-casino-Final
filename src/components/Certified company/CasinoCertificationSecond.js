import React, { Fragment } from "react";
import "../../scss/Casino Certification/CasinoCertificationTwo.scss";
import firstimg from "../../assets/images/Casino Certification/first.png";
import second from "../../assets/images/Casino Certification/second.png";
import third from "../../assets/images/Casino Certification/third.png";
import fourth from "../../assets/images/Casino Certification/fourth.png";
import fifth from "../../assets/images/Casino Certification/fifth.png";
import sixth from "../../assets/images/Casino Certification/sixth.png";
import { casinocertificationsecondcards } from "../../assets/data";
import { Pagination, Stack } from '@mui/material'
import {
    AiOutlineHome,
    AiFillDollarCircle,
    AiFillGoogleCircle,
    IoCallOutlin,
    AiOutlineSetting,
    IoMdCall,
} from "react-icons/ai";
import { thirdimg } from "../../assets/data";
const CasinoCertificationSecond = () => {
    return (
        <Fragment>
            <div className="casino-certification-second">
                <div className="title">
                    <h1>카지노 사이트 인증업체</h1>
                </div>

                {/* CARDS SECTION START FROM HERE */}

                



                    {/* FIRST SECTION START HERE */}


                    {
    casinocertificationsecondcards.map((map)=>{
        return(
            <div className="card-parent">

                
                    {/* FIRST SECTION START HERE */}

                    <div className="img-card">
                    <center><h3>{map.h3}</h3></center>
                        <img src={map.img} alt="" />
                    </div>
                    <div className="card-first-data-parent">
                        <div className="card-data">
                            <button>{map.button}</button>
                            <h6>{map.title}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buttontwo}</button>
                            <h6>{map.titletwo}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buttonthree}</button>
                            <h6>{map.titlethree}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buutonfour}</button>
                            <h6>{map.titlefour}</h6>
                        </div>
                        <div className="card-data">
                            <button>{map.buttonfive}</button>
                            <h6>
                                {map.titlefive}
                            </h6>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="icons-parent">
                            <span className="icon">
                                {map.homeicon}
                            </span>
                            <span>{map.hometitle}</span>
                            <h6>{map.homeweb}</h6>
                        </div>
                        <div className="icons-parent">
                            <span className="icon">
                                {map.cellicon}
                            </span>
                            <span>{map.celltitle}</span>
                            <h6>{map.cellno}</h6>
                        </div>
                        <div className="icons-parent">
                            <span className="icon">
                                {map.settingicon}
                            </span>
                            <span>{map.settingtitle}</span>
                            <h6>{map.settinginfo}</h6>
                        </div>
                    </div>
                </div>
        )
    })
}







                
                <div
                    className="pagination"
                    style={{ display: "flex", justifyContent: "center", padding: '80px 0' }}
                >
                    <Stack spacing={2}>
                        <Pagination count={10} showFirstButton showLastButton />
                    </Stack>
                </div>
            </div>
        </Fragment>
    );
};

export default CasinoCertificationSecond;
