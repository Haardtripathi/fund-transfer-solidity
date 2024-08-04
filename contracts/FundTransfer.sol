//SPDX-License-Identifier:MIT
pragma solidity ^0.8.24;

import "../contracts/PriceConvet1.sol";

contract FundTransfer {
    using PriceConvert1 for uint256;

    uint256 public minimumUsd = 50 * 1e18;

    function fund() public payable {
        require(
            msg.value.getConversionRate() >= minimumUsd,
            "Insufficient funding"
        );
    }

    address[] public peopleList;

    function addToPeopleList(address[] memory _peopleList) public {
        peopleList = _peopleList;
    }

    function currentBalance() public view returns (uint) {
        return address(this).balance; // Example implementation
    }

    function divideFund() public payable {
        uint256 divideValue = (address(this).balance / peopleList.length);
        for (uint256 x; x < peopleList.length; x++) {
            (bool callSuccess, ) = payable(peopleList[x]).call{
                value: divideValue
            }("");
            require(callSuccess == true, "Correct");
        }
    }
}
