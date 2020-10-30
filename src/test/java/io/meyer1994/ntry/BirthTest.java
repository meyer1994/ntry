package io.meyer1994.ntry;

import io.meyer1994.ntry.configs.Web3JConfigs;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.web3j.birth.Birth;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.tx.gas.ContractGasProvider;

import java.math.BigInteger;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class BirthTest {
    @Autowired private Web3j web3j;
    @Autowired private Credentials credentials;
    @Autowired private ContractGasProvider contractGasProvider;
    
    private final String NAME = "John";
    private final BigInteger DATE = BigInteger.TEN;
    
    @Test
    public void deployBirth() throws Exception {
        final Birth birth = Birth.deploy(web3j, credentials, contractGasProvider, DATE, NAME).send();

        final String name = birth.name().send();
        assertThat(name).isEqualTo("John");

        final BigInteger date = birth.date().send();
        assertThat(date).isEqualTo(BigInteger.TEN);
    }
}
