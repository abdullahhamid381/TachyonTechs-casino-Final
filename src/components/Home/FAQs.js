import React from 'react'
import img from "../../assets/images/slider1.PNG"
import "../../scss/faq.scss"
import Accordian from '../Reuseables/Faqs'
const FAQs = () => {
    return (
        <section className='faqs'>
            <div className="container">
                <h1>자주 묻는 질문 Q&A</h1>
                <div className="grid">
                    <div className="start">
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
