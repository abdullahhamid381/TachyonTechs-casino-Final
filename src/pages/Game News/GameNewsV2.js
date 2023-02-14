import React, { Fragment } from 'react'

import Banner from '../../components/Reuseables/Banner';
import img from "../../assets/images/Game News/banner.png";
import "../../scss/Game Information/gameInformation.scss"
import { AiOutlineEdit } from 'react-icons/ai';
import { articles, articles__v2 } from '../../assets/data';
import ArticlesGrid from '../../components/Reuseables/ArticlesGrid';
import { Pagination, Stack } from '@mui/material';
const GameNewsV2 = () => {
    return (
        <section className='game__information'>
            <Banner image={img} main={"게임뉴스"} sub={"카지노 게임뉴스"} />
            <div className="heading">
                <h2>먹튀사이트</h2>
                <div className="icons">

                    <span>
                        <AiOutlineEdit />
                    </span>
                </div>
            </div>

            <div className="grid">
                <div className="filter">
                    <div className="head">

                        <div className="date">
                            <select>
                                <option value="">날짜순</option>
                            </select>
                            <input type="text" placeholder="상품평을 검색해보세요" />
                        </div>
                    </div>
                </div>

            </div>
            <ArticlesGrid style={'two'} date={true} shuffle={true} articles={articles} threeCol={false} />
            <div
                className="pagination"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Stack spacing={2}>
                    <Pagination count={10} showFirstButton showLastButton />
                </Stack>
            </div>
        </section>
    )
}

export default GameNewsV2