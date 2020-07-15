pragma solidity >0.6.4 <0.7.0;

import { Record } from './Record.sol';
import { Marriage } from './Marriage.sol';

contract Divorce is Record {
    uint public date;
    Marriage public marriage;

    constructor(uint _date, Marriage _marriage) public {
        date = _date;
        marriage = _marriage;
    }
}
