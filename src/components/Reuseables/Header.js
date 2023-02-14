import React, { Fragment, useState, useEffect } from "react";
import { Menu } from "@mui/material";
import "../../scss/header.scss";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.PNG";
import { RxPerson } from "react-icons/rx";
import { VscBell } from "react-icons/vsc";
import WidgetsBar from "./WidgetsBar";
import bars from "../../assets/images/icons/menu.png";
import cross from "../../assets/images/icons/cross.png";
import { BsChevronUp } from "react-icons/bs";
const Header = ({
    toggle,
    setToggle,
    setToggleLg,
    toggleLg,
    show,
    setShow,
    activeWidget,
    setActiveWidget,
}) => {
    const [scroll, setScroll] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setScroll(true);
        } else {
            setScroll(false);
        }

    });
    return (
        <Fragment>
            <header>
                <div className="container">
                    <div className="grid">
                        <div className="start">
                            <div className="menu">
                                <HiBars3 onClick={() => setToggleLg(!toggleLg)} />
                            </div>
                            <p>코리안 스피드 바카라는 온라인카지노 에볼루션 게이밍의 </p>
                        </div>
                        <div className="end">
                            <div className="links">
                                <Link to={""}>
                                    <div className="icon">🥇</div>
                                    <p>5000 누적포인트</p>
                                </Link>
                                <Link to={""}>
                                    <div className="icon">🥇</div>
                                    <p>5000 누적포인트</p>
                                </Link>

                                <Link to={""}>
                                    <div className="icon">🥇</div>
                                    <p>회원가입_로그추가페이지</p>
                                </Link>
                            </div>
                            <Link className="btn" to={""}>
                                출석체크
                            </Link>
                        </div>
                    </div>
                </div>
                <WidgetsBar
                    show={show}
                    setShow={setShow}
                    setActiveWidget={setActiveWidget}
                    activeWidget={activeWidget}
                />
            </header>
            <div className="bottom__nav">
                <div className="menu">
                    <img
                        src={show ? cross : bars}
                        onClick={() => {
                            setShow(!show);
                        }}
                        alt=""
                    />
                    {/* <HiMenu /> */}
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="icons">
                    <RxPerson
                        onClick={() => {
                            setShow(true);
                            setActiveWidget(2);
                        }}
                    />
                    <VscBell
                        onClick={() => {
                            setShow(true);
                            setActiveWidget(1);
                        }}
                    />
                </div>
            </div>
            <div
                onClick={() => window.scroll(0, 0)}
                className="auto_scroll"
                style={scroll ? { transform: "scale(1)" } : {}}
            >
                <BsChevronUp />
            </div>
        </Fragment>
    );
};

export default Header;
