// SPDX-License-Identifier: MIT
pragma solidity >0.7.0;

import { Birth } from "./Birth.sol";
import { Record } from "./Record.sol";

contract Death is Record {
    uint public date;
    Birth public birth;

    constructor(uint _date, Birth _birth) {
        date = _date;
        birth = _birth;
    }
}
