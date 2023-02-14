import React, { Fragment, useState } from "react";
import "./scss/reset.css";

import "./index.css";
import Home from "./pages/Home";
import Scam from "./pages/scam/Scam";
import ScamCasinoCards from "./pages/scam/ScamCasinoCards";
import ScamFormV1 from "./pages/scam/ScamFormV1";
import ScamFormV2 from "./pages/scam/ScamFormV2";

import CommunityPost from "./pages/Community/CommunityPost";
import Signupmember from "./pages/Signup/Signupmember";

import Signupmembertwo from "./pages/Signup/Signupmembertwo";
import CommunityPostV2 from "./pages/Community/CommunityPostV2";
import Comuntiycasinoreview from "./pages/Community/Comuntiycasinoreview";

import Footer from "./components/Reuseables/Footer";

import KnowHowTable from "./pages/Community/KnowHowTable";
import Games from "./pages/Games";
import Grid from "./components/Reuseables/Grid";
import Sidebar from "./components/Reuseables/Sidebar";
import Header from "./components/Reuseables/Header";
import { Route, Routes } from "react-router-dom";

import BonusFirstpage from "./pages/Bonus Pages/BonusFirstpage";
import BonusSecondpage from "./pages/Bonus Pages/BonusSecondpage";

import GameInformation from "./pages/Game Information/GameInformation";

import BonusFirst from "./components/Attendece Bonus Check/BonusFirst";

import EventForm from "./pages/Events/EventForm";
import EventArticles from "./pages/Events/EventArticles";
import CashExhangeDetailPage from "./pages/Point Mall Pages/CashExangeDetailPage";
import CouponMallDetailPage from "./pages/Point Mall Pages/CouponMallDetailPage";
import CouponPageLastPage from "./pages/Point Mall Pages/CouponPageLastPage";
import SingleArticleInfo from "./pages/Game Information/SingleArticlePage";

import MallPointHomePage from "./pages/Point Mall Pages/MallPointHiomePage";
import CouponPageTwoPage from "./pages/Point Mall Pages/CouponPageTwoPage";

import CustomerCareForm from "./pages/Customer Care Cener/CustomerCareForm";
import ReviewPage from "./pages/Customer Care Cener/ReviewPage";
import TablePage from "./pages/Customer Care Cener/TablePage";
import SingleArticleNews from "./pages/Game News/SingleArticlePage";
import GameNews from "./pages/Game News/GameNews";
import GameNewsV2 from "./pages/Game News/GameNewsV2";
import SingleArticleNewsV2 from "./pages/Game News/SingleArticleNewsV2";
import AnnouncementForm from "./pages/Announcement/AnnouncementForm";
import AnnouncementReviewPage from "./pages/Announcement/AnnouncementReviewPage";
import AnnouncementTablePage from "./pages/Announcement/AnnouncementTablePage";

/* CERTIFIED COMPANY SECTION  */
import CasinoCertificationFirstPage from "./pages/Casino Certification/CasinoCertificationFirstPage";

import CasinoCertificationTwoPage from "./pages/Casino Certification/CasinoCertificationTwoPage";
import CasinoCertificationThirdPage from "./pages/Casino Certification/CasinoCertificationThirdPage";
import CommunityArticles from "./pages/Community/CommunityArticles";
import PeopleWhoJoined from "./pages/Person who joined/PeopleWhoJoined";
import PeopleWhoJoinedTable from "./pages/Person who joined/PeopleWhoJoinedTable";
import CasinoCertificationForm from "./pages/Casino Certification/CasinoCertificationForm";

function App() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [activeWidget, setActiveWidget] = useState(1);

  const [toggleLg, setToggleLg] = useState(false);
  return (
    <Fragment>
      <Header
        toggle={toggle}
        setToggle={setToggle}
        setToggleLg={setToggleLg}
        toggleLg={toggleLg}
        show={show}
        setShow={setShow}
        setActiveWidget={setActiveWidget}
        activeWidget={activeWidget}
      />
      <section
        className="home"
        style={{ gridTemplateColumns: toggleLg ? "1fr" : "" }}
      ></section>
      <Grid toggleLg={toggleLg}>
        <Sidebar
          toggle={toggle}
          setToggle={setToggle}
          setToggleLg={setToggleLg}
          toggleLg={toggleLg}
        />

        <main>
          <Routes>
            {/* Home links 메인 홈 */}
            <Route path="/" element={<Home />} />
            {/* scam site  먹튀사이트*/}
            <Route path="/scam" element={<Scam />} />
            <Route path="/scam-casino-cards" element={<ScamCasinoCards />} />
            <Route path="/scam-form-one" element={<ScamFormV1 />} />
            <Route path="/scam-form-two" element={<ScamFormV2 />} />



            {/* game information 게임정보  */}

            <Route path="/game-information" element={<GameInformation />} />
            <Route
              path="/game-information/:id"
              element={<SingleArticleInfo />}
            />
            {/* game news 게임정보  */}
            <Route path="/game-news" element={<GameNews />} />
            <Route path="/game-news-two" element={<GameNewsV2 />} />
            <Route path="/game-news/:id" element={<SingleArticleNews />} />
            <Route
              path="/game-news-two/:id"
              element={<SingleArticleNewsV2 />}
            />

            {/* Community 커뮤니티 */}
            <Route path="/community-post" element={<CommunityPost />} />
            <Route path="/community-post-two" element={<CommunityPostV2 />} />
            <Route
              path="/community-reviews"
              element={<Comuntiycasinoreview />}
            />
            <Route path="/community-articles" element={<CommunityArticles />} />
            <Route path="/how-know-table" element={<KnowHowTable />} />
            <Route path="/sign-up-one" element={<Signupmembertwo />} />
            <Route path="/sign-up-two" element={<Signupmember />} />
            {/* casino games  카지노게임*/}
            <Route path="/games" element={<Games />} />
            {/* bonus attendance check 보너스,출석체크  */}
            <Route path="/bonus-request-form" element={<BonusFirstpage />} />
            <Route path="/attendence-check" element={<BonusSecondpage />} />
            <Route path="/bonus-request-form2" element={<BonusFirst />} />
            {/* events 이벤트 */}
            <Route path="/event-form" element={<EventForm />} />
            <Route path="/event-articles" element={<EventArticles />} />

            {/* POINT MALL 포인트몰*/}

            <Route
              path="/cash-exchange-detail"
              element={<CashExhangeDetailPage />}
            />

            <Route
              path="/point-mall-coupon-page"
              element={<CouponPageTwoPage />}
            />

            <Route
              path="/coupon-mall-detail"
              element={<CouponMallDetailPage />}
            />
            <Route path="/point-mall-home" element={<MallPointHomePage />} />

            <Route
              path="/point-mall-coupon-page-last"
              element={<CouponPageLastPage />}
            />
            {/* person who joined 공지사항 */}
            <Route path="/people-who-joined" element={<PeopleWhoJoined />} />
            <Route
              path="/people-who-joined-table"
              element={<PeopleWhoJoinedTable />}
            />
            {/* customer care center 고객센터 */}
            <Route path="/customer-care-review" element={<ReviewPage />} />
            <Route path="/customer-care-table" element={<TablePage />} />
            <Route path="/customer-care-form" element={<CustomerCareForm />} />
            {/* announcement 공지사항 */}
            <Route path="/announcement-form" element={<AnnouncementForm />} />
            <Route
              path="/announcement-review"
              element={<AnnouncementReviewPage />}
            />
            <Route
              path="/announcement-table"
              element={<AnnouncementTablePage />}
            />

            {/* CASINO CERTIFIED COMPANY SECTION */}

            <Route
              path="/casino-certification-first"
              element={<CasinoCertificationFirstPage />}
            />

            <Route
              path="/casino-certification-form"
              element={<CasinoCertificationForm />}
            />
            <Route
              path="/casino-certification-second"
              element={<CasinoCertificationTwoPage />}
            />
            <Route
              path="/"
              element={<CasinoCertificationThirdPage />}
            />
          </Routes>
        </main>
      </Grid>
      <Footer />
    </Fragment>
  );
}

export default App;
