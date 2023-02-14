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
                        casinocertificationsecondcards.map((map) => {
                            const{img,button,title,buttontwo,titletwo,buttonthree,titlethree,buutonfour,titlefour,buttonfive,titlefive,homeicon,hometitle,homeweb,cellicon,celltitle,cellno,settingicon,settingtitle,settinginfo}=map;
                            return (
                                <div className="card-parent">

                                    <div>
                                    <center><h3>홍길동카지노</h3></center>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="card-first-data-parent">
                                        <div className="card-data">
                                            <button>{button}</button>
                                            <h6>{title}</h6>
                                        </div>
                                        <div className="card-data">
                                            <button>{buttontwo}</button>
                                            <h6>{titletwo}</h6>
                                        </div>
                                        <div className="card-data">
                                            <button>{buttonthree}</button>
                                            <h6>{titlethree}</h6>
                                        </div>
                                        <div className="card-data">
                                            <button>{buutonfour}</button>
                                            <h6>{titlefour}</h6>
                                        </div>
                                        <div className="card-data">
                                            <button>{buttonfive}</button>
                                            <h6>
                                               {titlefive}
                                            </h6>
                                        </div>
                                    </div>

                                    <div className="contact">
                                        <div className="icons-parent">
                                            <span className="icon">
                                                {homeicon}
                                            </span>
                                            <span>{hometitle}</span>
                                            <h6>{homeweb}</h6>
                                        </div>
                                        <div className="icons-parent">
                                            <span className="icon">
                                                {cellicon}
                                            </span>
                                            <span>{celltitle}</span>
                                            <h6>{cellno}</h6>
                                        </div>
                                        <div className="icons-parent">
                                            <span className="icon">
                                                {settingicon}
                                            </span>
                                            <span>{settingtitle}</span>
                                            <h6>{settinginfo}</h6>
                                        </div>
                                    </div>

                                    </div>
                            )
                        })
                    }







                
                <div
                    className="pagination"
                    style={{ display: "flex", justifyContent: "center", paddingBottom: '80px' }}
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
