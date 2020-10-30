package io.meyer1994.ntry.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewBirthDTO {
    private BigInteger date;
    private String name;
}
