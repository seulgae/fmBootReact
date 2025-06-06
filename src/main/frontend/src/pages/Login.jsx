import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/login.css"; // CSS 따로 분리해서 관리

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("로그인 정보:", { email, password });
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2 className="login-title">로그인</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div>
                        <label className="login-label">이메일</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                            required
                        />
                    </div>
                    <div>
                        <label className="login-label">비밀번호</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">로그인</button>
                </form>

                <div className="login-footer">
                    <p>
                        아직 회원이 아니신가요?{" "}
                        <Link to="/SignUpPage" className="login-link">
                            회원가입
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
