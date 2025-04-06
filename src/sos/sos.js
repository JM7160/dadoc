import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sos.css';
import { FaChevronLeft} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import call from "../image/call.png"
import info from "../image/info.png"

const Sos = () => {
  const navigate = useNavigate();

  return (
    <div className="sos-container">
      <div className="app-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaChevronLeft />
        </button>
        <span className="app-bar-title">긴급 도움</span>
      </div>
      <div className="map-box">
        <MdLocationOn className="map-pin" />
        <p className="map-label">주변 응급실</p>
      </div>

      <button className="emergency-call-button">생명의 전화로 도움 청하기</button>

      <h3 className="section-title">응급 정보</h3>
      <div className="procedure-card">
        <h4>흉터가 남지 않는 상처 치료하는 방법</h4>
        <p>흉터 없이 치료하는 방법 배우기</p>
      </div>
      <div className="procedure-card">
        <h4>자해를 멈추는 방법</h4>
        <p>자해 말고 "자애"하기</p>
      </div>

      <h3 className="section-title">바로가기</h3>
      <div className="quick-links">
        <button className="quick-button"><img src={call} alt="119" className="sos-icon" />119</button>
        <button className="quick-button"><img src={info} alt="응급처치" className="sos-icon" />응급처치</button>
      </div>
    </div>
  );
};

export default Sos;
