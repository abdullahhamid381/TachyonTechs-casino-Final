import React, { Fragment } from 'react'
import '../../scss/Casino Certification/CasinoCertificationFirst.scss'
import { CasinoCertificationFirstSection } from '../../assets/data'
import { Pagination , Stack } from '@mui/material'
const CasinoCertificationFirst = () => {
    return (
        <Fragment>
            <div className='casino-certification-first'>

                <div className='title'>
                    <h1>카지노 사이트 인증업체</h1>
                </div>

                {
                    CasinoCertificationFirstSection.map((firts) => {
                        const { img, title, para, lifirst, lisecond, lithird } = firts;
                        return (
                            <div className='casino-certification-first-section'>

                                <img src={img} alt="" />
                                <div className='casino-certification-first-section-data'>

                                    <h1>
                                        {title}
                                    </h1>
                                    <p>
                                        {para}
                                    </p>
                                    <li style={{ paddingTop: '20px' }}>
                                        {lifirst}
                                    </li>
                                    <li>
                                       {lisecond}
                                    </li>
                                    <li>
                                        {lithird}

                                    </li>
                                </div>
                            </div>
                        )
                    })
                }


                
                <div
                className="pagination"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Stack spacing={2}>
                    <Pagination count={10} showFirstButton showLastButton />
                </Stack>
            </div>
                
                
            </div>
        </Fragment>
    )
}

export default CasinoCertificationFirst