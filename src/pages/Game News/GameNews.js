import React, { Fragment } from 'react'

import Banner from '../../components/Reuseables/Banner';
import img from "../../assets/images/Game News/banner.png";
import "../../scss/Game Information/gameInformation.scss"
import { AiOutlineEdit } from 'react-icons/ai';
import { articles, articles__v2 } from '../../assets/data';
import ArticlesGrid from '../../components/Reuseables/ArticlesGrid';
import { Pagination, Stack } from '@mui/material';
const GameNews = () => {
    return (
        <section className='game__information'>
            <Banner image={img} main={"게임뉴스"} sub={"카지노 게임뉴스"} />
            <div className="heading">
                <h2>게임뉴스</h2>
                <div className="icons">

                    <span>
                        <AiOutlineEdit />
                    </span>
                </div>
            </div>

            <div className="grid">
                <div className="filter">

                    <div className="head">
                        <span style={{ color: 'white', fontSize: '16px', marginLeft: '20px' }}>베스트순  <span style={{ color: '#868f95', fontSize: '16px' }}> | 최신순</span></span>
                        <div className="date">
                            <select>
                                <option value="">베스트순</option>
                            </select>
                            <input type="text" placeholder="상품평을 검색해보세요" />
                        </div>
                    </div>
                </div>

            </div>
            <ArticlesGrid style={'two'} date={true} articles={articles} threeCol={true} />
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

export default GameNews