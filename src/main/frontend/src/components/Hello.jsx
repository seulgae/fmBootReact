import React, { useEffect, useState } from "react";

const Hello = () => {
    const [data, setData] = useState(null);
    const [responseTime, setResponseTime] = useState(null);

    useEffect(() => {
        // API 호출
        fetch('http://localhost:8085/api/list')
            .then(response => {
                // X-Response-Time 헤더를 가져옴
                const responseTimeHeader = response.headers.get('X-Response-Time');
                setResponseTime(responseTimeHeader); // 헤더 값 저장

                // 콘솔에 출력
                console.log("Response Time from header:", responseTimeHeader);

                return response.json();  // 응답 데이터를 JSON으로 변환
            })
            .then(data => {
                setData(data);  // 데이터 저장
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);  // 빈 배열을 넣어 처음 렌더링될 때만 호출되게 설정

    return (
        <div>
            <h1>API Data</h1>
            {!data ? (  // 데이터가 없으면 "Loading..."을 보여줌
                <p>Loading...</p>
            ) : (
                <>
                    {responseTime && <p>Response Time: {responseTime}</p>}
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </>
            )}
        </div>
    );
};

export default Hello;