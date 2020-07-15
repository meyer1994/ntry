pragma solidity >0.6.4 <0.7.0;

abstract contract Record {
    string ipfs;

    function setIpfs(string memory _ipfs) public {
        ipfs = _ipfs;
    }
}
