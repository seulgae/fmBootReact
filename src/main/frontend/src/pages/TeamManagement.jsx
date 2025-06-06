import "../style/teamManagement.css";

export default function TeamManagement() {
    return (
        <div className="team-wrapper">
            <div className="team-container">
                <h1>구단 관리 컨텐츠 영역</h1>
                <button className="team-button">예시 버튼</button>

                {/* 필요하면 테이블 등 목록 추가 가능 */}
                {/* <table className="team-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>팀명</th>
                            <th>감독</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>서울 FC</td>
                            <td>홍길동</td>
                            <td>2025-06-01</td>
                        </tr>
                    </tbody>
                </table> */}

            </div>
        </div>
    );
}
