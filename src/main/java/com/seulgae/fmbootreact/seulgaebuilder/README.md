# 클라우드 플랫폼 팀 Server Backend API 개발 표준화 적용해보기.
## 적용 디자인 패턴 : Builder Pattern

## 디자인 패턴 적용 전 데이터 1만건 테스트
[Response headers]
HTTP/1.1 200
Vary: Origin
Vary: Access-Control-Request-Method
Vary: Access-Control-Request-Headers
X-Execution-Time: 920
Content-Type: application/json
Transfer-Encoding: chunked
Date: Sun, 27 Apr 2025 15:03:22 GMT
Keep-Alive: timeout=60
Connection: keep-alive

## 디자인 패턴 적용 후 데이터 1만건 테스트
[Response headers]
HTTP/1.1 200
Vary: Origin
Vary: Access-Control-Request-Method
Vary: Access-Control-Request-Headers
X-Execution-Time: 885
Content-Type: application/json
Transfer-Encoding: chunked
Date: Sun, 27 Apr 2025 15:03:44 GMT
Keep-Alive: timeout=60
Connection: keep-alive