pragma solidity >0.6.4 <0.7.0;

import { Record } from './Record.sol';
import { Marriage } from './Marriage.sol';

contract Divorce is Record {
    uint public time;
    Marriage public marriage;

    constructor(uint _time, Marriage _marriage) public {
        time = _time;
        marriage = _marriage;
    }

    function kind() public override view returns(string memory) {
        return "Divorce";
    }

}
