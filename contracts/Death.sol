pragma solidity >0.6.4 <0.7.0;

import { Record } from "./Record.sol";

contract Death is Record {
    uint public time;
    Birth public birth;

    constructor(uint _time, Birth _birth) public {
        time = _time;
        birth = _birth;
    }

    function kind() public override view returns(string memory) {
        return "Death";
    }
}
