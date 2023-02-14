import React, { useState } from "react";
import { BiAbacus } from "react-icons/bi";
import { RxCross1, RxPerson } from "react-icons/rx";
import "../../scss/widget.scss";
import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineBell,
    AiOutlineFolderOpen,
} from "react-icons/ai";
import person from "../../assets/images/1card.PNG";
import { ChevronLeft, ChevronRight, Dashboard } from "@mui/icons-material";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { SiSpreadshirt } from "react-icons/si";
import { BsLaptop } from "react-icons/bs";
import { GiStabbedNote } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
import { TbBellRinging } from "react-icons/tb";
import icon from "../../assets/images/icons/group-5.png";
const WidgetsBar = ({ setShow, show, activeWidget, setActiveWidget }) => {
    const [tab, setTab] = useState(1);
    const [subMenu, setSubMenu] = useState(1);
    const Menu = (e) => {
        let menu = e.target.nextElementSibling;
        let svg = e.target.lastElementChild;

        if (menu) {
            menu.classList.toggle("menu__active");
            svg.classList.toggle("svg");
        }
    };
    console.log(activeWidget);
    const list = [
        {
            name: "쪽지함",
            icon: <SiSpreadshirt />,
            link: "",
            sub: [
                {
                    link: "",
                    name: "쪽지",
                },
                {
                    link: "",
                    name: "쪽지",
                },
                {
                    link: "",
                    name: "쪽지",
                },
            ],
        },
        {
            name: "마이페이지",
            icon: <BsLaptop />,
            link: "",
            sub: false,
        },
        {
            name: "내 글 관리",
            icon: <GiStabbedNote />,
            link: "",
            sub: false,
        },
        {
            name: "정보수정",
            icon: <FaPencilAlt />,
            link: "",
            sub: false,
        },
        {
            name: "알림",
            icon: <TbBellRinging />,
            link: "",
            sub: false,
        },
        {
            name: "스크랩",
            icon: <AiOutlineFolderOpen />,
            link: "",
            sub: false,
        },
    ];
    const tabs = [
        {
            title: "전체",
            tab: 1,
        },
        {
            title: "내소식(20)",
            tab: 2,
        },
    ];
    const notifications = [
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
    ];
    const notificationsTwo = [
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
        {
            title: "staccatovivace(닉네임)",
            msg: "@닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla dbsldhsdmfh 10만쿠폰전환",
            link: "",
        },
    ];
    return (
        <section className={show ? "widget show" : "widget"}>
            <div className="icons">
                <span
                    id="1"
                    onClick={(e) => {
                        setShow(!show);
                    }}
                >
                    {show ? <RxCross1 /> : <AiOutlineArrowLeft />}
                </span>
                <span>
                    <HiBars3CenterLeft />
                </span>
                <span onClick={(e) => {
                    setShow(true);
                    setActiveWidget(2)
                }}>
                    <RxPerson />
                </span>
                <span onClick={(e) => {
                    setShow(true);
                    setActiveWidget(1)
                }}>
                    <AiOutlineBell />
                </span>
                <span>
                    <CgSearch />
                </span>
            </div>
            <div className="main">
                {activeWidget == 1 ? (
                    <div className="widget__one">
                        <div className="tab">
                            <div className="grid">
                                {/* <div className="item active">전체</div>
                                <div className="item">전체</div> */}
                                {tabs.map((item, index) => {
                                    return (
                                        <div
                                            className={tab == item.tab ? "item active" : "item"}
                                            onClick={() => setTab(item.tab)}
                                        >
                                            {item.title}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {tab == 1 ? (
                            <div className="notifications">
                                {notifications.map((notification) => {
                                    return (
                                        <div className="notification">
                                            <div className="top">
                                                <div className="start">
                                                    <img src={icon} alt="" />
                                                    <p>{notification.title}</p>
                                                </div>
                                                <div className="end">
                                                    <button>쿠폰전환</button>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <p>{notification.msg}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="notifications">
                                {notificationsTwo.map((notification) => {
                                    return (
                                        <div className="notification">
                                            <div className="top">
                                                <div className="start">
                                                    <img src={icon} alt="" />
                                                    <p>staccatovivace(닉네임)</p>
                                                </div>
                                                <div className="end">
                                                    <button>쿠폰전환</button>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <p>
                                                    @닉네임님 10,000포인트 - 100,000쿠폰 전환 @slrspdlasla
                                                    dbsldhsdmfh 10만쿠폰전환
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="widget__two">
                        <div className="admin">
                            <div className="grid">
                                <div className="start">
                                    <img src={person} alt="" />
                                </div>
                                <div className="end">
                                    <p>staccatovivace(닉네임)</p>
                                    <ul>
                                        <li>Lv.1</li>
                                        <li>5000 P</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="start">
                                    <span>누적포인트</span> <span>15,000P</span>
                                </div>
                                <div className="end">
                                    <span>25,000P</span>
                                </div>
                            </div>
                            <div className="line">
                                <div className="golden"></div>
                            </div>
                            <div className="flex">
                                <div className="start">
                                    <span>Lv.1</span>{" "}
                                </div>
                                <div className="end">
                                    <span>Lv.2</span>
                                </div>
                            </div>
                        </div>

                        <ul className="list">
                            {list.map((item) => {
                                return (
                                    <li className="item">
                                        <div className="top" onClick={Menu}>
                                            {" "}
                                            <div className="start">
                                                <span className="icon">{item.icon}</span>
                                                <p>{item.name}</p>
                                            </div>
                                            {item.sub && (
                                                <span>
                                                    <ChevronRight />
                                                </span>
                                            )}
                                        </div>
                                        {item.sub && (
                                            <ul className="sub">
                                                {item.sub.map((subItem, ind) => (
                                                    <li>{subItem.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WidgetsBar;
