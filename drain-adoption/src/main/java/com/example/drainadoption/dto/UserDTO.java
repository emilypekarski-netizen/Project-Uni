package com.example.drainadoption.dto;

import com.example.drainadoption.model.User;
import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String name;
    private Long adoptedDrainId;

    public static UserDTO fromEntity(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setName(user.getName());
        if (user.getAdoptedDrain() != null) {
            dto.setAdoptedDrainId(user.getAdoptedDrain().getId());
        }
        return dto;
    }
}