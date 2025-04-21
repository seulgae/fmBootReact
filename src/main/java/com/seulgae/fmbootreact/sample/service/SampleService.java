package com.seulgae.fmbootreact.sample.service;

import com.seulgae.fmbootreact.sample.mapper.SampleMapper;
import com.seulgae.fmbootreact.sample.model.Sample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SampleService {

    @Autowired
    private SampleMapper sampleMapper;

    public Sample getExample(int id) {
        return sampleMapper.selectSampleById(id);
    }
}