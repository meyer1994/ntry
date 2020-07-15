pragma solidity >0.6.4 <0.7.0;

import { Person } from './Person.sol';
import { Record } from './Record.sol';

contract Marriage is Record {
    uint public date;
    Person public first;
    Person public second;

    constructor(uint _date, Person _first, Person _second) public {
        date = _date;
        first = _first;
        second = _second;
    }
}
