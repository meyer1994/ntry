package io.meyer1994.ntry.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.web3j.birth.Birth;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.tx.Contract;
import org.web3j.tx.gas.ContractGasProvider;

public interface BaseService<T> {
    @Autowired private Web3j web3j;
    @Autowired private Credentials credentials;
    @Autowired private ContractGasProvider contractGasProvider;

    public T load(final String addr) {
        return T.
    }
}
