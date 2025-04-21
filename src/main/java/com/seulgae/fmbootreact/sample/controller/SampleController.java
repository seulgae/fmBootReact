package com.seulgae.fmbootreact.sample.controller;

import com.seulgae.fmbootreact.sample.model.Sample;
import com.seulgae.fmbootreact.sample.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SampleController {

    @Autowired
    private SampleService sampleService;

    @GetMapping("/example")
    public Sample getExample(@RequestParam int id) {
        return sampleService.getExample(id);
    }
}