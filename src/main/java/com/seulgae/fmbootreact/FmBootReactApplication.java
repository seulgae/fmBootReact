package com.seulgae.fmbootreact;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.seulgae.fmbootreact.sample.mapper") // Mapper 인터페이스가 있는 패키지 경로
public class FmBootReactApplication {

    public static void main(String[] args) {
        SpringApplication.run(FmBootReactApplication.class, args);
    }

}
