pragma solidity >0.6.4 <0.7.0;

import { Birth } from "./Birth.sol";
import { Record } from "./Record.sol";

contract Death is Record {
    uint public time;
    Birth public birth;

    constructor(uint _time, Birth _birth) public {
        time = _time;
        birth = _birth;
    }
}
