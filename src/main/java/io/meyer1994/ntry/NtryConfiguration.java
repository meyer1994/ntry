package io.meyer1994.ntry;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.gas.ContractGasProvider;
import org.web3j.tx.gas.StaticGasProvider;

import java.math.BigInteger;

@Configuration
public class NtryConfiguration {
    @Value("${application.web3j.private-key}")
    private String privateKey;

    @Value("${application.web3j.gas-limit}")
    private String gasLimit;

    @Value("${application.web3j.gas-price}")
    private String gasPrice;
    
    @Bean
    public Web3j web3j() {
        return Web3j.build(new HttpService());
    }

    @Bean
    public Credentials credentials() {
        return Credentials.create(this.privateKey);
    }
        
    @Bean
    public ContractGasProvider contractGasProvider() {
        final BigInteger GAS_PRICE = new BigInteger(this.gasPrice);
        final BigInteger GAS_LIMIT = new BigInteger(this.gasLimit);
        return new StaticGasProvider(GAS_PRICE, GAS_LIMIT);
    }
}
