package com.seulgae.fmbootreact.seulgaebuilder.controller;

import com.seulgae.fmbootreact.seulgaebuilder.dto.SeulgaeDTO;
import com.seulgae.fmbootreact.seulgaebuilder.service.SeulgaeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<SeulgaeDTO> getSeulgaeList() {
        return seulgaeService.getSeulgaeList();
    }

    @GetMapping("/asislist")
    @Operation(summary = "API 속도 테스트", description = "디자인 패턴 적용 전 API 속도 테스트 측정")
    public List<SeulgaeDTO> getAsisSeulgaeList() {
        return seulgaeService.getAsisSeulgaeList();
    }
}
