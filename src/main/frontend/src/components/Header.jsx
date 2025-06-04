import { Link } from "react-router-dom";
import '../style/header.css';
import logo from '../assets/logo.png';
import TeamManagement from "../pages/TeamManagement";
import TeamCommunication from "../pages/TeamCommunication";
import FieldReservation from "../pages/FieldReservation";
import Notices from "../pages/Notices";

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
                    <Link to="/TeamManagement">구단 관리</Link>
                    <Link to="/TeamCommunication">구단 커뮤니케이션</Link>
                    <Link to="/FieldReservation">구장 예약</Link>
                    <Link to="/Notices">공지사항</Link>
                    <Link to="/Login">로그인</Link>
                </nav>
            </div>
        </header>
    );
}
