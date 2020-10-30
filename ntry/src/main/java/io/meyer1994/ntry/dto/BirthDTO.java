package io.meyer1994.ntry.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.web3j.birth.Birth;

import java.math.BigInteger;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BirthDTO {
    private String addr;
    private BigInteger date;
    private String name;
    
    public static BirthDTO fromBirth(final Birth birth) throws Exception {
        return BirthDTO.builder()
                .addr(birth.getContractAddress())
                .date(birth.date().send())
                .name(birth.name().send())
                .build();
    }
}
