import React from "react";
import "./Home.css";
import profileImg from "./image/profile.jpg";

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
            <h2>심정민</h2>
            <p>19세(만 17세)</p>
          </div>
        </div>
        <div className="quick-actions">
          <button>우울증 약 정보</button>
          <button>주변 정신과 찾기</button>
          <button>긴급 도움 서비스</button>
          <button>약 복용 알림</button>
        </div>
      </section>

      {/* 가벼운 운동 추천 */}
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

      {/* 주변 정신과 안내 */}
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

      {/* 우울증 정보 배너 */}
      <section className="info-banner">
        <img src="path_to_banner_image" alt="우울증 정보" />
      </section>

      {/* 검색 바 */}
      <section className="search-bar">
        <input type="text" placeholder="주변 운동시설 검색" />
        <button>🔍</button>
      </section>

      {/* 이번 달 활동량 */}
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
