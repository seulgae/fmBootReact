import React, { useState } from "react";
import Hello from "./components/Hello";  // Hello 컴포넌트 import

const App = () => {
    const [loading, setLoading] = useState(true);  // 로딩 상태 관리

    const handleLoadComplete = () => {
        setLoading(false);  // API 데이터 로딩 완료 시 호출되어 로딩 상태 변경
    };

    return (
        <div className="App">
            <h1>Welcome to React!</h1>

            {/* 로딩 상태에 따라 다르게 표시 */}
            {loading ? <p>Loading...</p> : <Hello onLoadComplete={handleLoadComplete} />}
        </div>
    );
};

export default App;