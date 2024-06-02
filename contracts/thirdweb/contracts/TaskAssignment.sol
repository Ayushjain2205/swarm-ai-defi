// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./AgentRegistry.sol";

contract TaskAssignment {
    struct Task {
        uint taskId;
        address requester;
        string taskDetails;
        address assignedAgent;
        bool isCompleted;
    }

    AgentRegistry agentRegistry;
    uint public taskCount;
    mapping(uint => Task) public tasks;

    event TaskCreated(uint taskId, address requester, string taskDetails);
    event TaskAssigned(uint taskId, address assignedAgent);
    event TaskCompleted(uint taskId, address assignedAgent);

    constructor(address _agentRegistryAddress) {
        agentRegistry = AgentRegistry(_agentRegistryAddress);
        taskCount = 0;
    }

    function createTask(string memory _taskDetails) public {
        taskCount++;
        tasks[taskCount] = Task({
            taskId: taskCount,
            requester: msg.sender,
            taskDetails: _taskDetails,
            assignedAgent: address(0),
            isCompleted: false
        });

        emit TaskCreated(taskCount, msg.sender, _taskDetails);
    }

    function assignTask(uint _taskId, address _agentAddress) public {
        require(
            tasks[_taskId].requester == msg.sender,
            "Only requester can assign task"
        );
        require(
            agentRegistry.getAgent(_agentAddress).isRegistered,
            "Agent must be registered"
        );

        tasks[_taskId].assignedAgent = _agentAddress;

        emit TaskAssigned(_taskId, _agentAddress);
    }

    function completeTask(uint _taskId) public {
        require(
            tasks[_taskId].assignedAgent == msg.sender,
            "Only assigned agent can complete task"
        );

        tasks[_taskId].isCompleted = true;

        emit TaskCompleted(_taskId, msg.sender);
    }

    function getTask(uint _taskId) public view returns (Task memory) {
        return tasks[_taskId];
    }
}
