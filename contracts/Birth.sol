pragma solidity >0.6.4 <0.7.0;

import { Record } from "./Record.sol";

contract Birth is Record {
    uint public date;
    string public name;

    constructor(uint _date, string memory _name) public {
        date = _date;
        name = _name;
    }
}
