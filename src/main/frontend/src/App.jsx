import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import TeamManagement from './pages/TeamManagement';
import TeamCommunication from './pages/TeamCommunication';
import FieldReservation from './pages/FieldReservation';
import Notices from './pages/Notices';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login';
import './style/app.css';

import bg1 from "./assets/banner1.jpg";
import bg2 from "./assets/banner2.jpg";
import bg3 from "./assets/banner3.jpg";

const App = () => {
    return (
        <Router>

            <div className="background-fader">
                <img src={bg1} alt="bg1" />
                <img src={bg2} alt="bg2" />
                <img src={bg3} alt="bg3" />
            </div>

            <div className="background-overlay" />

            <div className="app-container">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/TeamManagement" element={<TeamManagement />} />
                        <Route path="/TeamCommunication" element={<TeamCommunication />} />
                        <Route path="/FieldReservation" element={<FieldReservation />} />
                        <Route path="/Notices" element={<Notices />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/SignUpPage" element={<SignUpPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;