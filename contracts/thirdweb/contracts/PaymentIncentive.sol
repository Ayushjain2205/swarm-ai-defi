// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TaskAssignment.sol";

contract PaymentIncentive {
    TaskAssignment taskAssignment;
    address public owner;

    event PaymentSent(address recipient, uint amount);
    event IncentiveAdded(address agent, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor(address _taskAssignmentAddress) {
        taskAssignment = TaskAssignment(_taskAssignmentAddress);
        owner = msg.sender;
    }

    function sendPayment(
        address payable _recipient,
        uint _amount
    ) public onlyOwner {
        _recipient.transfer(_amount);
        emit PaymentSent(_recipient, _amount);
    }

    function addIncentive(uint _taskId, uint _amount) public onlyOwner {
        address agent = taskAssignment.getTask(_taskId).assignedAgent;
        payable(agent).transfer(_amount);
        emit IncentiveAdded(agent, _amount);
    }

    receive() external payable {}
}
