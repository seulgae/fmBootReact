package com.seulgae.fmbootreact.seulgaebuilder.repository;

import com.seulgae.fmbootreact.seulgaebuilder.model.Seulgae;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SeulgaeRepository {
    List<Seulgae> selectSeulgaeTable();
}
