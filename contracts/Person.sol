pragma solidity >0.6.4 <0.7.0;

import { Birth } from "./Birth.sol";
import { Death } from "./Death.sol";
import { Divorce } from "./Divorce.sol";
import { Marriage } from "./Marriage.sol";
import { Record } from "./Record.sol";

contract Person is Record {
    Birth public birth;
    Death public death;
    Marriage[] public marriages;
    Divorce[] public divorces;

    function setBirth(Birth _birth) public {
        birth = _birth;
    }

    function setDeath(Death _death) public {
        death = _death;
    }

    function addMarriage(Marriage _marriage) public {
        marriages.push(_marriage);
    }

    function addDivorce(Divorce _divorce) public {
        divorces.push(_divorce);
    }
}
