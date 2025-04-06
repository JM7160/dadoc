import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hos.css'; 
import { FaChevronLeft } from 'react-icons/fa';
import search from "../image/search.png";
import hos1 from "../image/hos1.png";
import hos2 from "../image/hos2.png";

const Hos = () => {
  const navigate = useNavigate();

  return (
    <div className='med-container'>
      <div className="app-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
        <FaChevronLeft />
        </button>
        <span className="app-bar-title">주변 정신건강의학과 찾기</span>
      </div>
      <section className="search-bar">
        <input type="text" placeholder="정신건강의학과 찾기" />
        <button><img src={search} alt="검색" className="search" /></button>
      </section>
      <section className="hos-section">
        <div className="hos-cards">
          <div className='hos-card'>
            <img src={hos1} alt="hospital" />
            <p>전문의 3명</p>
            <span>마음챙김정신건강의학과의원</span>
          </div>
          <div className='hos-card'>
            <img src={hos2} alt="hospital" />
            <p>전문의 1명</p>
            <span>야호정신건강의학과의원</span>
          </div>
          </div>
      </section>
      <div className="button-container">
        <button className="call-button">전화하기</button>
        <button className="save-button">저장하기</button>
      </div>
    </div>
  );
};

export default Hos;
