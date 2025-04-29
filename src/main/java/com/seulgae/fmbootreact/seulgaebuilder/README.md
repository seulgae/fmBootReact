# 클라우드 플랫폼 팀 Server Backend API 개발 표준화 적용해보기.
## 적용 디자인 패턴 : Builder Pattern

## 디자인 패턴 적용 전 데이터 1만건 테스트
[Response headers] </br>
HTTP/1.1 200 </br>
Vary: Origin </br>
Vary: Access-Control-Request-Method </br>
Vary: Access-Control-Request-Headers </br>
X-Execution-Time: 920 </br>
Content-Type: application/json </br>
Transfer-Encoding: chunked </br>
Date: Sun, 27 Apr 2025 15:03:22 GMT </br>
Keep-Alive: timeout=60 </br>
Connection: keep-alive </br>

## 디자인 패턴 적용 후 데이터 1만건 테스트
[Response headers] </br>
HTTP/1.1 200 </br>
Vary: Origin </br>
Vary: Access-Control-Request-Method </br>
Vary: Access-Control-Request-Headers </br>
X-Execution-Time: 885 </br>
Content-Type: application/json </br>
Transfer-Encoding: chunked </br>
Date: Sun, 27 Apr 2025 15:03:44 GMT </br>
Keep-Alive: timeout=60 </br>
Connection: keep-alive </br>
