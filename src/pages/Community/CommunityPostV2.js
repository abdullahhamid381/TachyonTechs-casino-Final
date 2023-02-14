import React, { Fragment, useState } from "react";
import Banner from "../../components/Reuseables/Banner";

import img from "../../assets/images/group-11.png";

import PostFormWithArticles from "../../components/Community/PostFormWithArticles";
const CommunityPostV2 = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleLg, setToggleLg] = useState(false);
    return (
        <Fragment>
            <Banner image={img} main={"카인사 카지노노하우"} sub={"게시글 자유롭게 작성하고 자유롭게 소통하며포인트 받자!"} />
            <PostFormWithArticles />

        </Fragment>
    );
};

export default CommunityPostV2;
