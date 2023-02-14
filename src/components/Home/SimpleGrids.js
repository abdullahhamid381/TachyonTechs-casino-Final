import React, { Fragment } from 'react'
import "../../scss/twogrid.scss"
import banner1 from "../../assets/images/banner1.PNG"
import banner2 from "../../assets/images/banner3.PNG"
import { Link } from 'react-router-dom'
const TwoGrid = () => {
    return (
        <Fragment>
            <div className="two__col">
                <div className="item">
                    <Link to={'/customer-care-table'}>

                        <img src='./images/home/fifth.png' alt="" />
                    </Link>
                </div>
                <div className="item">
                    <img src='./images/home/sixth.png' alt="" />
                </div>
            </div>


        </Fragment>
    )
}
const ThreeGrid = () => {
    return (
        <Fragment>
            <div className="three__col__">
                <div className="item">


                    <img src="./images/home/fifteen.png" alt="" />

                </div>
                <div className="item">
                    <img src="./images/home/sixtheen.png" alt="" />
                </div>
                <div className="item">
                <img src="./images/home/sevetheen.png" alt="" />
                </div>
            </div>


        </Fragment>
    )
}

export { TwoGrid, ThreeGrid }
