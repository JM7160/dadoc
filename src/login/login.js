import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (nickname === "jm" && password === "jm") {
      setIsLoggedIn(true);       // 로그인 상태 true로 변경
      navigate("/");             // 홈으로 이동
    } else {
      alert("닉네임 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">로그인</div>

      <div className="login-form">
        <label>닉네임</label>
        <input
          type="text"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <label>비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleLogin}>로그인</button>

        <div className="login-extra-buttons">
          <button>비밀번호를 잊어버림</button>
          <button onClick={() => navigate("/signup")}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
