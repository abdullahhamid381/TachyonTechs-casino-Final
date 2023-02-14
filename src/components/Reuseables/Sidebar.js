import React from "react";
import logo from "../../assets/images/logo.PNG";
import "../../scss/sidebar.scss";

import { list } from "../../assets/data";
const Sidebar = ({ toggle, setToggle, setToggleLg, toggleLg }) => {
    return (
        <aside style={{ marginTop: toggle ? "0" : "-500%" }} className={toggleLg ? "hide" : ""}>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>{" "}
            </div>
            <div className="bottom">
                <ul>
                    {list.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.icon}
                                <p>{item.text}</p>
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
