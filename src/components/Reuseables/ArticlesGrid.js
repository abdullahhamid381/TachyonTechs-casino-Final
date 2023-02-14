import React from "react";

import "../../scss/Game Information/articlesGrid.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const ArticlesGrid = ({
    articles,
    threeCol,
    style,
    hideDescription,
    shuffle,
    date, border
}) => {
    return (
        <section
            className={`games__articles_grid ${threeCol ? "three__col" : null}`}
        >
            <div className="container">
                <div
                    className="grid"
                    style={
                        style == "two"
                            ? {
                                gridTemplateColumns: "1fr ",
                                gridGap: "0rem",
                            }
                            : null
                    }
                >
                    {articles.map((article) => {
                        return (
                            <div
                                className={`${shuffle ? "item shuffle" : "item"}`}
                                style={
                                    style == "two"
                                        ? {
                                            cursor: "pointer",
                                            display: "grid",
                                            gap: "15px",
                                            gridTemplateColumns: threeCol ? "1fr 2fr" : "1fr 1fr",
                                            borderBottom: "1px solid #4f5c65",
                                            padding: "35px 0",
                                        }
                                        : null
                                }
                            >
                                <figure>
                                    <img src={article.img} alt="" />
                                </figure>
                                <div className="details">
                                    <div className="top">
                                        {" "}
                                        <h3>{article.title}</h3>
                                        {!hideDescription ? <p>{article.description}</p> : null}
                                    </div>
                                    {date && article.date && (
                                        <div className={!border ? "bottom" : "bottom border"} >
                                            <p>
                                                <span>관리자</span> <span>{article.date}</span>
                                            </p>
                                            <p>
                                                <span>Views</span> <span>{article.views}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ArticlesGrid;
