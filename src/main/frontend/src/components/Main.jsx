import '../style/main.css';

export default function Main() {
        return (
            <div className="main-container">
                    <div className="top-section">
                            <div className="available-fields box">
                                    <h2>사용 가능 구장</h2>
                                    {/* 리스트는 나중에 map으로 대체 */}
                                    <ul>
                                            <li>구장 A</li>
                                            <li>구장 B</li>
                                    </ul>
                            </div>
                            <div className="active-teams box">
                                    <h2>경기중인 구단</h2>
                                    <ul>
                                            <li>구단 X</li>
                                            <li>구단 Y</li>
                                    </ul>
                            </div>
                    </div>
                    <div className="bottom-section box">
                            <h2>인기 커뮤니케이션</h2>
                            <ul>
                                    <li>이전 경기 리뷰</li>
                                    <li>전략 공유</li>
                            </ul>
                    </div>
            </div>
        );
}