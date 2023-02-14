
import React from "react";
import "../../scss/scamForm.scss";
import SmartHeading from "../Reuseables/SmartHeading";
import Checkbox from '@mui/material/Checkbox';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const Form = () => {
    return (
        <section className="scam__from__v2">
            <SmartHeading
                main={"공지사항"}
                sub={
                    "공지사항 | 카인사 | 관리자"
                }
            />

            <div className="container">

                <form action="">
                    <div className="first">
                        <p>제목</p>
                        <input type="text" placeholder="제목을 입력해주세요" />
                    </div>


                    <div className="fourth">
                        <p>상세내용</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="fifth">
                        <div className="top">
                            <div className="start">관련링크</div>
                            <input type="text" />
                        </div>
                        <div className="bottom">
                            <div className="start">첨부파일</div>
                            <div className="grid">
                                <input type="text" />
                                <input type="submit" placeholder="첨부파일 선택" />
                            </div>
                        </div>
                        <div className="rest">

                            <div className="grid">
                                <span>
                                첨부사진 위치
                                </span>
                                <div className="checkboxes">

                                    <div className="checkbox">
                                        <Checkbox
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon />}
                                        />
                                        상단위치
                                    </div>
                                    <div className="checkbox">
                                        <Checkbox
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon />}
                                        />
                                        하단위치
                                    </div>
                                    <div className="checkbox">
                                        <Checkbox
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon />}
                                        />
                                        본문삽입
                                    </div>

                                </div>
                                <p>{"본문 삽압시 {이미지0}, {이미지1} 형대로 글 내용에 입력시 지정 첨부사진이 출력됩니다."}</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn__grid__">

                        <div className="end">
                            <button>온라인</button>
                            <button>라인온</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;
