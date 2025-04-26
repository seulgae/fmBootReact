package com.seulgae.fmbootreact.seulgaebuilder.service;

import com.seulgae.fmbootreact.seulgaebuilder.dto.SeulgaeDTO;
import com.seulgae.fmbootreact.seulgaebuilder.model.Seulgae;
import com.seulgae.fmbootreact.seulgaebuilder.repository.SeulgaeRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SeulgaeServiceImpl implements SeulgaeService {

    private final SeulgaeRepository seulgaeRepository;

    public SeulgaeServiceImpl(SeulgaeRepository seulgaeRepository) {
        this.seulgaeRepository = seulgaeRepository;
    }

    public List<SeulgaeDTO> getSeulgaeList() {
        // DB에서 데이터를 Model(Seulgae)로 가져오기
        List<Seulgae> seulgaes = seulgaeRepository.selectSeulgaeTable();

        // Model 데이터를 DTO로 변환하여 반환
        return seulgaes.stream()  // 스트림을 생성
                .parallel()  // 스트림을 병렬로 전환
                .map(Seulgae::seulgaeDTO)  // Model을 DTO로 변환
                .collect(Collectors.toList());  // 결과를 리스트로 수집
    }

    public List<SeulgaeDTO> getAsisSeulgaeList() {
        return seulgaeRepository.selectAsisSeulgaeTable();
    }


}
