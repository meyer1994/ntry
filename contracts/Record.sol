// SPDX-License-Identifier: MIT
pragma solidity >0.7.0;

abstract contract Record {
    string ipfs;

    function setIpfs(string memory _ipfs) public {
        ipfs = _ipfs;
    }
}
