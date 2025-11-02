package com.example.drainadoption.dto;

import com.example.drainadoption.model.Drain;
import lombok.Data;

@Data
public class DrainDTO {
    private Long id;
    private String name;
    private String imageUrl;
    private Double latitude;
    private Double longitude;
    private Long adoptedByUserId;

    public static DrainDTO fromEntity(Drain drain) {
        DrainDTO dto = new DrainDTO();
        dto.setId(drain.getId());
        dto.setName(drain.getName());
        dto.setImageUrl(drain.getImageUrl());
        dto.setLatitude(drain.getLatitude());
        dto.setLongitude(drain.getLongitude());
        if (drain.getAdoptedByUser() != null) {
            dto.setAdoptedByUserId(drain.getAdoptedByUser().getId());
        }
        return dto;
    }
}