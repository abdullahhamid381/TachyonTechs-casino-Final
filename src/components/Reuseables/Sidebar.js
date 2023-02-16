import React from "react";
import logo from "../../assets/images/home/logo02.png";
import "../../scss/sidebar.scss";

import { list } from "../../assets/data";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ toggle, setToggle, setToggleLg, toggleLg }) => {
    const navigate = useNavigate();
    return (
        <aside
            style={{ marginTop: toggle ? "0" : "-500%" }}
            className={toggleLg ? "hide" : ""}
        >
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>{" "}
            </div>
            <div className="bottom">
                <ul>
                    {list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => navigate(item.path)}>
                                <div className="top">
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </div>
                                {
                                    item.menu && <ul className="sub">
                                        {
                                            item.menu.map((elm, ind) => {
                                                return <li onClick={() => navigate(elm.link)}>
                                                    {elm.name}
                                                </li>
                                            })
                                        }
                                    </ul>
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="btns">
                <button className="first">@CASINA</button>
                <button className="second">Casino-inside.com</button>
            </div>
        </aside>
    );
};

export default Sidebar;
