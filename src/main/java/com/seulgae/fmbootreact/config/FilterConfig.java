package com.seulgae.fmbootreact.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.web.servlet.FilterRegistrationBean;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<ResponseTimeFilter> loggingFilter() {
        FilterRegistrationBean<ResponseTimeFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new ResponseTimeFilter());
        registrationBean.addUrlPatterns("/*"); // 모든 요청에 적용
        return registrationBean;
    }
}
