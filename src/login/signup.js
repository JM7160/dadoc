import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { FaChevronLeft } from 'react-icons/fa';
import profile from "../image/profile.jpg";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-header">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaChevronLeft />
        </button>
        <h1 className="signup-title">회원가입</h1>
      </div>

      <div className="profile-image-wrapper">
      <img src={profile} alt="기본 프로필" className="profile" />
      </div>

      <div className="form-group">
        <label>닉네임</label>
        <input type="text" placeholder="닉네임을 입력하세요" />
      </div>

      <div className="form-group">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </div>

      <div className="form-group">
        <label>생년월일</label>
        <input type="text" placeholder="생년월일을 입력하세요" />
      </div>

      <button className="complete-button">완료</button>
    </div>
  );
};

export default Signup;
