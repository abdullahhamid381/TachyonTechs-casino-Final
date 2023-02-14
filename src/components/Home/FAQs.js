import React from 'react'
import img from "../../assets/images/slider1.PNG"
import "../../scss/faq.scss"
import Accordian from '../Reuseables/Faqs'
const FAQs = () => {
    return (
        <section className='faqs'>
            <div className="container">
                <div className="grid">
                    <div className="start">
                        <h1>FAQs</h1>
                        <Accordian />
                    </div>
                    <div className="end">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs
