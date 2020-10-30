// SPDX-License-Identifier: MIT
pragma solidity >0.7.0;

import { Record } from './Record.sol';
import { Marriage } from './Marriage.sol';

contract Divorce is Record {
    uint public date;
    Marriage public marriage;

    constructor(uint _date, Marriage _marriage) {
        date = _date;
        marriage = _marriage;
    }
}
