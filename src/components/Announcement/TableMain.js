import React from "react";
import { BiShare } from "react-icons/bi";
import "../../scss/scamForm.scss";
import "../../scss/table.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { articles__v2, tableData } from "../../assets/data";
import Table from "../Community/Table";
const TableMain = () => {
    return (
        <section className="scam__form">
            <div className="heading">
                <h2>1:1 문의 고객센터</h2>
            </div>
            <div className="container">

                <div className="filter">
                    <div className="head">
                        <h3>베스트순 | 최신순</h3>
                        <div className="date">
                            <select>
                                <option value="">날짜순</option>
                            </select>
                            <input type="text" placeholder="상품평을 검색해보세요" />
                        </div>
                    </div>
                </div>

                <Table tableData={tableData} />

                <div
                    className="pagination"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Stack spacing={2}>
                        <Pagination count={10} showFirstButton showLastButton />
                    </Stack>
                </div>
            </div>
        </section>
    );
};

export default TableMain;
