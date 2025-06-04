import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './style/app.css';

import bg1 from "./assets/banner1.jpg";
import bg2 from "./assets/banner2.jpg";
import bg3 from "./assets/banner3.jpg";

export default function App() {
    return (
        <div className="app-container">

            {/*<div className="background-fader">*/}
            {/*    <img src={bg1} alt="bg1" />*/}
            {/*    <img src={bg2} alt="bg2" />*/}
            {/*    <img src={bg3} alt="bg3" />*/}
            {/*</div>*/}

            {/*<div className="background-overlay" />*/}

            <Header />
                <Main />
            <Footer />

        </div>
    );
}