import React, { Fragment } from 'react'

/* IMPORT CSS HERE */

import '../../scss/Attendence Bonus Check/BonusFirst.scss'
const BonusFirst = () => {
    return (
        <section className='bonus-first'>


            {        /* <------------------------BONUS FORM CONTAINER START FROM HERE--------------------> */
            }


            <div className='container'>
                <div>

                    { /* FORM TITLE */}

                    <h1 className='bonus-first-title'>보너스포인트 신청</h1>

                    {/* FIRST INPUT START FROM HERE OF THE FORM */}

                    <div className='bonus-form-first'>
                        <p>이메일</p>
                        <input type="text" placeholder='이메일을 입력하세요' />
                        <br />
                        <span>올바른 이메일 형태가 아닙니다.</span>
                    </div>





                    {/* SECOND SELECT THE OPTION SECTION START FROM HERE OF THE FORM */}

                    <div className='bonus-form-second'>
                        <p>생년월일</p>
                        <select name="" id="" className='select-first'>
                            <option value="">1989</option>
                        </select>
                        <select name="" id="" className='select-second'>
                            <option value="">09</option>
                        </select>
                        <select name="" id="" className='select-third'>
                            <option value="">02</option>
                        </select>
                    </div>



                    {/* THIRD INPUT  START FROM HERE OF THE FORM */}

                    <div className='bonus-form-third'>
                        <p>휴대전화번호</p>
                        <input type="text" placeholder='010-0000-0000' className='first-input' />
                        <input type="text" placeholder='인증번호받기' className='second-input' />
                    </div>


                    {/* FOURTH INPUT  START FROM HERE OF THE FORM */}

                    <div className='form-fourth'>
                        <input type="text" placeholder='인증번호를 입력하세요' />
                    </div>



                    {/* FIFTH INPUT  START FROM HERE OF THE FORM */}

                    <div className='form-fifth'>
                        <p>계좌정보</p>
                        <input type="text" placeholder='계좌번호를 작성해주세요.' />
                        <br />
                        <input type="text" placeholder='예금주명을 입력하세요' />
                    </div>


                    {/* SUBMIT BUTTON  START FROM HERE OF THE FORM */}

                    <button>20,000포인트 바로 받기</button>
                </div>




            </div>


            { /* <------------------------BONUS FORM CONTAINER START FROM HERE--------------------> */}


        </section>
    )
}

export default BonusFirst
