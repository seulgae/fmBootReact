package com.seulgae.fmbootreact.sample.mapper;

import com.seulgae.fmbootreact.sample.model.Sample;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SampleMapper {
    Sample selectSampleById(int id);
}