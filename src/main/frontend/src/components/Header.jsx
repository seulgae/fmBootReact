import '../style/header.css';
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="FM MagerLog" />
                    </a>
                </div>
                <nav className="header-nav">
                    <a href="#">팀 커뮤니티</a>
                    <a href="#">구장 예약</a>
                    <a href="#">공지사항</a>
                    <a href="#">로그인</a>
                </nav>
            </div>
        </header>
    );
}
