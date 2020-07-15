pragma solidity >0.6.4 <0.7.0;

import { Person } from './Person.sol';
import { Record } from './Record.sol';

contract Marriage is Record {
    uint public time;
    Person public first;
    Person public second;

    constructor(uint _time, Person _first, Person _second) public {
        time = _time;
        first = _first;
        second = _second;
    }
}
