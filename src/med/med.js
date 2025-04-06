import React from 'react';
import { useNavigate } from 'react-router-dom';
import './med.css'; 
import med1 from "../image/med1.png"
import med2 from "../image/med2.png"
import { FaChevronLeft } from 'react-icons/fa';

const Med = () => {
  const navigate = useNavigate();

  return (
    <div className='med-container'>
      <div className="app-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
        <FaChevronLeft />
        </button>
        <span className="app-bar-title">우울증 약 정보</span>
      </div>

      <h2 className="section-title">우울증 약<button className="more-button">더보기 ›</button></h2>

      <div className="medicine-card">
        <img src={med1} alt="아빌리파이정" className="med-image" />
        <div className="med-info">
          <h3>아빌리파이정 (아리피프라졸)</h3>
          <p className="tag">정신신경용제</p>
          <p>아빌리파이정은 정신질환 치료에 사용되는 전문의약품으로, 우울우울장애, 불안, 조증, 강박장애, 불면증 등의 증상에 효과가 있습니다.</p>
        </div>
      </div>

      <div className="medicine-card">
        <img src={med2} alt="프로작" className="med-image" />
        <div className="med-info">
          <h3>프로작</h3>
          <p className="tag">정신신경용제</p>
          <p>리튬은 조증, 조울증, 양극성 장애 등의 정신질환 치료에 사용되는 약물로, 탄산리튬 형태로 처방됩니다.</p>
        </div>
      </div>

      <h3 className="section-title">약 리뷰</h3>
      <div className="review-container">
        <div className="review-card">
          <p className="review-user">An71</p>
          <p className="review-content">아빌리파이정 먹으면 살 너무 많이 쪄요ㅜ</p>
        </div>
        <div className="review-card">
          <p className="review-user">JM7160</p>
          <p className="review-content">프로작 너무 부작용 많아요..</p>
        </div>
        <div className="review-card">
          <p className="review-user">Dadoc</p>
          <p className="review-content">약보다는 의사가 누군지가 중요한 듯..</p>
        </div>
      </div>

      <div className="button-container">
        <button className="faq-button">자주 묻는 질문</button>
        <button className="consult-button">의사에게 문의하기</button>
      </div>
    </div>
  );
};

export default Med;
