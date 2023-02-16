import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/group-8.png";
import "../../scss/Scam Site/casinoCardsMain.scss"
import CasinoGrid from "../../components/Reuseables/CasinoGrid";
import { casinoCards } from "../../assets/data";
import { Stack } from "@mui/system";
import { AiOutlineEdit } from "react-icons/ai";
import { Pagination } from "@mui/material";

const ScamCasinoCards = () => {
    return (
        <section className="casino__main">
            <Banner
                image={img}
                main={"먹튀사이트"}
                sub={"먹튀사이트를 조심하세요!"}
            />
            <div className="heading">
                <h2>먹튀사이트</h2>
                <div className="icons">
                    <span>
                        <AiOutlineEdit />
                    </span>
                </div>
            </div>
            <div className="bar__">
                <ul className="links">
                    <li style={{color:"white"}}>먹튀</li>
                    <li>먹튀</li>
                    <li>먹튀</li>
                </ul>
                <form className="end">
                    <div className="select">
                        <select name="" id="">
                            <option value="검색해">검색해</option>
                        </select>
                    </div>
                    <div className="search">
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="상품평을 검색해보세요"
                        />
                    </div>
                </form>
            </div>
            <CasinoGrid cards={casinoCards} />
            <div className="pagination">
                <Stack spacing={2}>
                    <Pagination count={10} showFirstButton showLastButton />
                </Stack>
            </div>
        </section>
    );
};

export default ScamCasinoCards;
