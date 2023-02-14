import React, { Fragment } from 'react'
import Banner from '../../components/Reuseables/Banner'
import img from "../../assets/images/Event/group-8.png"

import ArticlesMain from '../../components/Events/ArticlesMain'
const EventArticles = () => {
    return (
        <Fragment>
            <Banner image={img} main={"이벤트"} sub={"카인사 이벤트"} />
            <ArticlesMain />

        </Fragment>
    )
}

export default EventArticles