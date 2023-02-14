import React, { Fragment } from 'react'
import Banner from '../Reuseables/Banner'


/* IMPORTING CSS FILE HERE */
import '../../scss/Attendence Bonus Check/BonusSecond.scss'

/* IMPORTING DATA FROM THE DATA FILE ARRAY HERE */
import { BonusSecondData, BonusSecondTable, calendershedule, Leveldetail } from '../../assets/data'

const BonusSecond = ({ img }) => {
    return (
        <section className='bonus-second'>

            {/* <-------------------BONUS SECOND CONTAINER START FROM HERE---------------------> */
            }
            <div className='container'>

                {/* PAGE TITLE START FROM HERE */}


                <div>
                    <h1 className='bonus-second-title'>출석체크</h1>

                </div>


                {/* TABLE TITLE START FROM HERE */}

                <div className='table-title'>
                    <h1>촐석체크 포인트지급</h1>
                </div>



                {/* TABLE START FROM HERE WE GETTING ALL THE DATA LIKE TEXT IMAGES ETC FROM DATA FILE IN THE ARRAY AND RUN THE MAP FOR GETTING MULTIPLE DATA */}

                <div className='table'>

                    {
                        BonusSecondTable.map((element) => {
                            const { btn, describe } = element;
                            return (
                                <div className='table-data'>
                                    <button>{btn}</button>
                                    <span>{describe}</span>
                                </div>
                            )
                        })
                    }

                    <p>*누적 30일 출석 시 출석 1일로 초기화 됩니다.</p>

                </div>


                {/* CALENDER START FROM HERE  */}


                <div className='calender'>

                    {/* CALENDER YEAR TITLE START FROM HERE */}

                    <div>
                        <h1 className='year'>2023 MAY</h1>
                    </div>



                    {/*  WE GETTING ALL THE CALENDER DATA LIKE TEXT IMAGES ETC FROM DATA FILE IN THE ARRAY AND RUN THE MAP FOR GETTING MULTIPLE  DATA */}

                    <div className='calender-shedule'>
                        {
                            calendershedule.map((calender) => {
                                const { day, img, id } = calender;
                                return (
                                    <div>
                                        <h3>{day}</h3>
                                        <div className='img-box'>

                                            <img src={img} alt="" />
                                            <h6>{id}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>



                {/* LEVEL INTRO SECTION START FROM HERE */}


                <div className='level-intro'>

                    <div>
                        <span>2022년 12월 01 출석체크까지 </span>
                        <span style={{ color: '#ff808b' }}> 00시간 00분 00초 </span>
                        <span>  남았습니다. </span>
                    </div>
                    <button>출석체크하기</button>
                </div>



                {/* LEVEL DETAIL SECTION START FROM HERE */}


                <div className='level-parent'>

                    {/*  WE GETTING ALL THE LEVEL DATA LIKE TEXT IMAGES ETC FROM DATA FILE IN THE ARRAY AND RUN THE MAP FOR GETTING MULTIPLE  DATA */}

                    {
                        Leveldetail.map((levelmap) => {
                            const { id, img, name, para, day } = levelmap;
                            return (
                                <div className='level'>
                                    <div className='level-number'>
                                        <h3>{id}</h3>
                                        <img src={img} alt="" className='level-icon' />
                                        <h6>{name}</h6>
                                        <p>{para}</p>
                                    </div>
                                    <div className="day">
                                        <h6>{day}</h6>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default BonusSecond
