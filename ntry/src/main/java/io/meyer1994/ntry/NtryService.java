package io.meyer1994.ntry;

import io.meyer1994.ntry.dto.BirthDTO;
import io.meyer1994.ntry.dto.NewBirthDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web3j.birth.Birth;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.tx.gas.ContractGasProvider;

import java.math.BigInteger;

@Service
public class NtryService {
    @Autowired private Web3j web3j;
    @Autowired private Credentials credentials;
    @Autowired private ContractGasProvider contractGasProvider;

    protected RemoteCall<Birth> deploy(final BigInteger date, final String name) {
        return Birth.deploy(this.web3j, this.credentials, this.contractGasProvider, date, name);
    }
    
    protected Birth load(final String addr) {
        return Birth.load(addr, this.web3j, this.credentials, this.contractGasProvider);
    }
    
    public BirthDTO deployBirth(final NewBirthDTO newBirthDTO) throws Exception {
        final Birth birth = this.deploy(newBirthDTO.getDate(), newBirthDTO.getName()).send();
        return BirthDTO.fromBirth(birth);
    }
    
    public BirthDTO fetchBirth(final String addr) throws Exception {
        final Birth birth = this.load(addr);
        return BirthDTO.fromBirth(birth);
    }
}
