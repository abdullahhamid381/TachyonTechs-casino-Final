import React from "react";
import "../../scss/simpleArticles.scss"
const SimpleArticles = () => {
    const articles = [
        {
            title: "슬롯 무료체험 카지노 후기",
            description: "내용을 넣어주세요~! 경기침체와 코로나19 위기 ···기업회생제도로 부활[나눔경제뉴스 창간 1주년 기획-Restart2021][그래픽=최유나기자]  기업은 꽃길만 걷지 못한다. 건실한 기업들도 코로나19같…",
            date: "아이디 : kim4919in ㅣ 2020.09.29"
        },
        {
            title: "슬롯 무료체험 카지노 후기 제목입니다!",
            description: "경기침체와 코로나19 위기 ···기업회생제도로 부활[나눔경제뉴스 창간 1주년 기획-Restart2021][그래픽=최유나기자] 기업은 꽃길만 걷지 못한다. 건실한 기업들도 코로나19같…",
            date: "아이디 : kim4919in ㅣ 2020.09.29"
        },
        {
            title: "슬롯 무료체험 카지노 후기",
            description: "내용을 넣어주세요~! 경기침체와 코로나19 위기 ···기업회생제도로 부활[나눔경제뉴스 창간 1주년 기획-Restart2021][그래픽=최유나기자] 기업은 꽃길만 걷지 못한다. 건실한 기업들도 코로나19같…",
            date: "아이디 : kim4919in ㅣ 2020.09.29"
        },
        {
            title: "슬롯 무료체험 카지노 후기",
            description: "경기침체와 코로나19 위기 ···기업회생제도로 부활[나눔경제뉴스 창간 1주년 기획-Restart2021][그래픽=최유나기자] 기업은 꽃길만 걷지 못한다. 건실한 기업들도 코로나19같…",
            date: "아이디 : kim4919in ㅣ 2020.09.29"
        },
    ]
    return (
        <section className="simple__articles">
            <div className="container">
                <div className="grid">
                    {articles.map((article) => {
                        return (
                            <div className="item">
                                <div className="details">
                                    <h3>{article.title}</h3>
                                    <p>
                                        {article.description}
                                    </p>
                                    <div className="date">
                                        <p>{article.date}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SimpleArticles;
