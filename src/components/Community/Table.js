import React from "react";

import "../../scss/table.scss";


const Table = ({ tableData }) => {

    return (
        <section className="know__how__table">
            <div className="container">
                <table>
                    <thead>
                        <tr className="grid">
                            <div className="col__one">번호</div>
                            <div className="col__two">번호</div>
                            <div className="col__three">번호</div>
                            <div className="col__four">번호</div>
                            <div className="col__five">번호</div>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((tr, index) => {
                            return (
                                <tr key={index} className="grid">
                                    <div className="col__one">{tr.id}</div>
                                    <div className="col__two">
                                        {tr.description}
                                    </div>
                                    <div className="col__three">{tr.info}</div>
                                    <div className="col__four">{tr.date}</div>
                                    <div className="col__five">{tr.number}</div>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Table;
