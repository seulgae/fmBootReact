import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/notices.css";

export default function Notices() {
    const [notices, setNotices] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const sampleNotices = [
            {
                id: 1,
                title: "서버 점검 안내",
                views: 150,
                author: "관리자",
                createdAt: "2025-06-01",
            },
            {
                id: 2,
                title: "신규 기능 업데이트",
                views: 230,
                author: "개발팀",
                createdAt: "2025-06-03",
            },
            {
                id: 3,
                title: "휴가 일정 공지",
                views: 85,
                author: "인사팀",
                createdAt: "2025-06-04",
            },
        ];

        setNotices(sampleNotices);

        // 백엔드에서 공지사항 목록을 가져오는 fetch 요청
        // fetch("/api/notices")
        //     .then((res) => res.json())
        //     .then((data) => setNotices(data))
        //     .catch((err) => console.error("공지사항 불러오기 실패:", err));
    }, []);

    const handleWrite = () => {
        navigate("/notices/write");
    };

    const handleView = (id) => {
        navigate(`/notices/${id}`);
    };

    return (
        <div className="notice-wrapper">
            <div className="notice-container">
                <h1>공지사항</h1>
                <button className="write-button" onClick={handleWrite}>글쓰기</button>
                <table className="notice-table">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>작성자</th>
                        <th>작성일자</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notices.map((notice, index) => (
                        <tr key={notice.id} onClick={() => handleView(notice.id)}>
                            <td>{index + 1}</td>
                            <td>{notice.title}</td>
                            <td>{notice.views}</td>
                            <td>{notice.author}</td>
                            <td>{notice.createdAt}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}