package com.seulgae.fmbootreact.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ResponseTimeFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        long startTime = System.currentTimeMillis();

        // 필터 체인 진행
        chain.doFilter(request, response);

        // 응답 후, 시간 계산
        long duration = System.currentTimeMillis() - startTime;

        // 로그 출력
        System.out.println("Adding response header 'X-Response-Time': " + duration + "ms");

        // 응답 헤더에 "X-Response-Time" 추가
        if (response instanceof HttpServletResponse) {
            HttpServletResponse httpResponse = (HttpServletResponse) response;
            httpResponse.addHeader("X-Response-Time", duration + "ms");
        }
    }
}
