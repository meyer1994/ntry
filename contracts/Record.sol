pragma solidity >0.6.4 <0.7.0;

abstract contract Record {
    string ipfs;
    function kind() public virtual view returns(string memory);
}
