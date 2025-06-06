import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/notices.css";

export default function NoticesWrite() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/notices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content, author: "관리자" }),
        })
            .then((res) => {
                if (res.ok) {
                    alert("공지사항이 등록되었습니다.");
                    navigate("/notices");
                } else {
                    throw new Error("등록 실패");
                }
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="notice-wrapper">
            <div className="notice-container">
                <h2>공지사항 등록</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="제목"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="form-input"
                    />
                    <textarea
                        placeholder="내용"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="form-textarea"
                    />
                    <button type="submit" className="write-button">등록</button>
                </form>
            </div>
        </div>
    );
}