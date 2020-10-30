package io.meyer1994.ntry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.tx.gas.ContractGasProvider;

@Component
public class ContractFactory {
    @Autowired private Web3j web3j;
    @Autowired private Credentials credentials;
    @Autowired private ContractGasProvider contractGasProvider;
}
