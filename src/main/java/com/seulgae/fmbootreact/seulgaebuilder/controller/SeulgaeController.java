package com.seulgae.fmbootreact.seulgaebuilder.controller;

import com.seulgae.fmbootreact.seulgaebuilder.dto.SeulgaeDTO;
import com.seulgae.fmbootreact.seulgaebuilder.service.SeulgaeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
@Tag(name = "Seulgae API", description = "슬개 API 테스트용 컨트롤러")
public class SeulgaeController {

    private final SeulgaeService seulgaeService;

    @Autowired
    public SeulgaeController(SeulgaeService seulgaeService) {
        this.seulgaeService = seulgaeService;
    }

    @GetMapping("/list")
    @Operation(summary = "API 속도 테스트", description = "API 속도 테스트 측정")
    public ResponseEntity<List<SeulgaeDTO>> getSeulgaeList() {
        long startTime = System.currentTimeMillis();  // 요청 시작 시간 기록

        List<SeulgaeDTO> seulgaeList = seulgaeService.getSeulgaeList();

        long endTime = System.currentTimeMillis();  // 요청 종료 시간 기록
        long executionTime = endTime - startTime;  // 실행 시간 계산

        return ResponseEntity.ok()
                .header("X-Execution-Time", String.valueOf(executionTime))  // 헤더에 실행 시간 추가
                .body(seulgaeList);  // 응답 본문에 데이터 설정
    }

    @GetMapping("/asislist")
    @Operation(summary = "API 속도 테스트", description = "디자인 패턴 적용 전 API 속도 테스트 측정")
    public ResponseEntity<List<SeulgaeDTO>> getAsisSeulgaeList() {
        long startTime = System.currentTimeMillis();  // 요청 시작 시간 기록

        List<SeulgaeDTO> seulgaeList = seulgaeService.getAsisSeulgaeList();

        long endTime = System.currentTimeMillis();  // 요청 종료 시간 기록
        long executionTime = endTime - startTime;  // 실행 시간 계산

        return ResponseEntity.ok()
                .header("X-Execution-Time", String.valueOf(executionTime))  // 헤더에 실행 시간 추가
                .body(seulgaeList);  // 응답 본문에 데이터 설정
    }
}