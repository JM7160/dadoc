import React from "react";
import "./Home.css";
import profileImg from "./image/profile.jpg";
import med from "./image/med.png";
import hos from "./image/hos.png";
import sos from "./image/sos.png";
import alarm from "./image/alarm.png";

const Home = () => {
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
        <button>
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
            <img src="path_to_stretching_image" alt="Stretching" />
            <p>스트레칭</p>
            <span>15분</span>
          </div>
          <div className="exercise-card">
            <img src="path_to_running_image" alt="Running" />
            <p>산책</p>
            <span>30분</span>
          </div>
        </div>
      </section>

      <section className="nearby-clinics">
        <h2>주변 정신과 안내</h2>
        <div className="clinic">
          <p>마음샘정신건강의학과의원</p>
          <span>거리: 1.2km</span>
        </div>
        <div className="clinic">
          <p>야호정신건강의학과의원</p>
          <span>거리: 2.5km</span>
        </div>
        <button className="more-btn">더보기</button>
      </section>

      <section className="info-banner">
        <img src="path_to_banner_image" alt="우울증 정보" />
      </section>

      <section className="search-bar">
        <input type="text" placeholder="주변 운동시설 검색" />
        <button>🔍</button>
      </section>

      <section className="activity-summary">
        <h2>이번 달 활동량</h2>
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
      </section>
    </div>
  );
};

export default Home;
