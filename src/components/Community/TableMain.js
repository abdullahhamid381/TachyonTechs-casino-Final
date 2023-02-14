import React from "react";
import { BiShare } from "react-icons/bi";
import "../../scss/scamForm.scss";
import "../../scss/table.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { articles__v2, tableData } from "../../assets/data";
import card1 from "../../assets/images/card3.PNG";
import Table from "./Table";
const TableMain = () => {
  return (
    <section className="scam__form">
      <div className="heading">
        <h2>먹튀사이트</h2>
      </div>
      <div className="container">
        <ul className="nav__btns">
          <li className="">자유게시판</li>
          <li className="">자유게시판</li>
          <li className="active">자유게시판</li>
          <li className="">자유게시판</li>
        </ul>
        <div className="filter">
          <div className="head">
            <h3>온라인카지노 먹튀(제목)</h3>
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
