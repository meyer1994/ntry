pragma solidity >=0.4.21 <0.7.0;

abstract contract Record {
    string ipfs;
    function kind() public virtual view returns(string memory);
}
