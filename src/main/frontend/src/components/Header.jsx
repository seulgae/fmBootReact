import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // 메뉴 클릭 시 자동으로 닫히게
    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="FM MagerLog" />
                    </a>
                </div>

                {/* 모바일용 햄버거 버튼 */}
                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="메뉴 열기"
                >
                    ☰
                </button>

                {/* 메뉴 (토글 상태에 따라 보임/숨김) */}
                <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                    <Link to="/TeamManagement" onClick={handleMenuClick}>구단 관리</Link>
                    <Link to="/TeamCommunication" onClick={handleMenuClick}>구단 커뮤니케이션</Link>
                    <Link to="/FieldReservation" onClick={handleMenuClick}>구장 예약</Link>
                    <Link to="/Notices" onClick={handleMenuClick}>공지사항</Link>
                    <Link to="/Login" onClick={handleMenuClick}>로그인</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;