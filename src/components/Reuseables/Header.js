import React, { Fragment, useState, useEffect } from "react";
import { Menu } from "@mui/material";
import "../../scss/header.scss";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/home/logo02.png";
import { RxPerson } from "react-icons/rx";
import { VscBell } from "react-icons/vsc";
import WidgetsBar from "./WidgetsBar";
import bars from "../../assets/images/icons/menu.png";
import cross from "../../assets/images/icons/cross.png";
import { BsChevronUp } from "react-icons/bs";
import userLogo from "../../assets/images/icons/profle_30@3x.png";
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
                            <p className="sm">
                                게임 노하우를 공유하는 목적으로 개설된 카인사
                            </p>
                            <p className="lg">
                                모든 카지노사이트를 검증하고, 카지노게임에 대한{" "}
                                <span style={{ color: "#ebebeb" }}>
                                    구체적인 베팅 노하우를 공유하는 목적으로 개설된 커뮤니티입니다
                                </span>
                                .{" "}
                            </p>
                        </div>
                        <div className="end">
                            {/* <div className="links">
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
                            </div> */}
                            <div className="user">
                                <div className="img">
                                    <img src={userLogo} alt="" />
                                </div>
                                <ul>
                                    <li>로그인</li>
                                    <li>회원가입</li>
                                </ul>
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
                    {toggle ? (
                        <img
                            src={cross}
                            onClick={() => {
                                setToggle(!toggle);
                                setShow(false);
                            }}
                            alt=""
                        />
                    ) : (
                        <img
                            src={bars}
                            onClick={() => {
                                setToggle(!toggle);
                                setShow(false);
                            }}
                            alt=""
                        />
                    )}
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
