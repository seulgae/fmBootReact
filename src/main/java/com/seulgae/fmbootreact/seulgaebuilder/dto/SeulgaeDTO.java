package com.seulgae.fmbootreact.seulgaebuilder.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SeulgaeDTO {
    private Long id;
    private String apiName;

}
