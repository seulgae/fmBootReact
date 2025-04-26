package com.seulgae.fmbootreact.seulgaebuilder.repository;

import com.seulgae.fmbootreact.seulgaebuilder.dto.SeulgaeDTO;
import com.seulgae.fmbootreact.seulgaebuilder.model.Seulgae;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SeulgaeRepository {
    List<Seulgae> selectSeulgaeTable();

    List<SeulgaeDTO> selectAsisSeulgaeTable();
}
