import React, { Fragment } from 'react'
import PostFormWithArticles from '../../components/Events/PostFormWithArticles'
import Banner from '../../components/Reuseables/Banner'
import img from "../../assets/images/Event/group-8.png"
const EventForm = () => {
    return (
        <Fragment>
            <Banner image={img} main={"이벤트"} sub={"카인사 이벤트"} />
            <PostFormWithArticles />

        </Fragment>
    )
}

export default EventForm