pragma solidity ^0.6.7;

import "./IOracle.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract USDOracle is IOracle{
    using SafeMath for uint;

    uint price;
    uint decShift;

    constructor() public {
        decShift = 2;
        // $250.00
        price = 25000;
    }

    function latestPrice() external override view returns (uint) {
        return price;
    }

    function decimalShift() external override view returns (uint) {
        return decShift;
    }
}