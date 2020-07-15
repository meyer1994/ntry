pragma solidity ^0.7.0;

import { Person } from './Person.sol';
import { Record } from './Record.sol';

contract Marriage is Record {
    uint public time;
    Person[] public people;

    function setTime(uint _time) public {
        time = _time;
    }

    function addPerson(Person _person) public {
        people.push(_person);
    }
}
