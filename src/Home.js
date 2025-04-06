import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import profileImg from "./image/profile.jpg";
import med from "./image/med.png";
import hos from "./image/hos.png";
import sos from "./image/sos.png";
import alarm from "./image/alarm.png";
import stretch from "./image/stretch.png";
import running from "./image/running.png";
import pin from "./image/pin.png";
import search from "./image/search.png"
import deinfo1 from "./image/deinfo1.jpg"
import deinfo2 from "./image/deinfo2.jpg"
import deinfo3 from "./image/deinfo3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">DADOC</h1>
      </header>

      <section className="profile-section">
        <div className="profile-info">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <div>
            <h3>심정민</h3>
            <p>19세(만 17세)</p>
          </div>
        </div>
        <div className="quick-actions">
         <button onClick={() => navigate("/med/med")}>
          <img src={med} alt="약 정보" className="button-icon" />
          우울증 약 정보
        </button>
        <button>
          <img src={hos} alt="정신과 찾기" className="button-icon" />
          주변 정신과 찾기
        </button>
        <button>
          <img src={sos} alt="긴급 도움" className="button-icon" />
          긴급 도움 서비스
        </button>
        <button>
          <img src={alarm} alt="약 복용 알림" className="button-icon" />
          약 복용 알림
        </button>
      </div>
      </section>

      <section className="exercise-section">
        <h2>가벼운 운동 추천</h2>
        <div className="exercise-cards">
          <div className="exercise-card">
          <div className="exercise-tag">운동</div>
            <img src={stretch} alt="Stretching" />
            <p>스트레칭</p>
            <span>15분</span>
          </div>
          <div className="exercise-card">
          <div className="exercise-tag">운동</div>
            <img src={running} alt="Running" />
            <p>산책</p>
            <span>30분</span>
          </div>
        </div>
      </section>

      <section className="nearby-clinics">
  <h2>주변 정신과 안내</h2>

  <div className="clinic">
    <div className="clinic-left">
      <img src={pin} alt="위치 아이콘" className="pin-icon" />
      <div className="clinic-info">
        <p>마음챙김정신건강의학과의원</p>
        <span className="phone-number">0507-1488-8856</span>
      </div>
    </div>
    <span className="distance"><b>거리:</b> 1.2km</span>
  </div>

  <div className="clinic">
    <div className="clinic-left">
      <img src={pin} alt="위치 아이콘" className="pin-icon" />
      <div className="clinic-info">
        <p>야호정신건강의학과의원</p>
        <span className="phone-number">02-1234-5678</span>
      </div>
    </div>
    <span className="distance"><b>거리:</b> 2.5km</span>
  </div>

  <button className="more-btn">더보기</button>
</section>



      <section className="search-bar">
        <input type="text" placeholder="주변 운동시설 검색" />
        <button><img src={search} alt="검색" className="search" /></button>
      </section>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
      <img src={deinfo1} alt="우울증 정보1" className="deinfo" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={deinfo2} alt="우울증 정보2" className="deinfo" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={deinfo3} alt="우울증 정보3" className="deinfo" />
      </SwiperSlide>
    </Swiper>

      <section className="activity-summary">
        <h2>이번 달 활동량</h2>
        <div className="activity-boxs">
          <div className="activity-box">
            <p>걸음 수</p>
            <h3>12000</h3>
            <span>+5%</span>
          </div>
          <div className="activity-box">
            <p>운동 시간</p>
            <h3>25시간</h3>
            <span>-10%</span>
          </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
