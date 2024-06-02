// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TaskAssignment.sol";

contract ActivityLog {
    struct Activity {
        uint activityId;
        uint taskId;
        address agent;
        string activityDetails;
        uint timestamp;
    }

    TaskAssignment taskAssignment;
    uint public activityCount;
    mapping(uint => Activity) public activities;

    event ActivityLogged(
        uint activityId,
        uint taskId,
        address agent,
        string activityDetails,
        uint timestamp
    );

    constructor(address _taskAssignmentAddress) {
        taskAssignment = TaskAssignment(_taskAssignmentAddress);
        activityCount = 0;
    }

    function logActivity(uint _taskId, string memory _activityDetails) public {
        require(
            taskAssignment.getTask(_taskId).assignedAgent == msg.sender,
            "Only assigned agent can log activity"
        );

        activityCount++;
        activities[activityCount] = Activity({
            activityId: activityCount,
            taskId: _taskId,
            agent: msg.sender,
            activityDetails: _activityDetails,
            timestamp: block.timestamp
        });

        emit ActivityLogged(
            activityCount,
            _taskId,
            msg.sender,
            _activityDetails,
            block.timestamp
        );
    }

    function getActivity(
        uint _activityId
    ) public view returns (Activity memory) {
        return activities[_activityId];
    }

    function getAllActivities() public view returns (Activity[] memory) {
        Activity[] memory allActivities = new Activity[](activityCount);
        for (uint i = 1; i <= activityCount; i++) {
            allActivities[i - 1] = activities[i];
        }
        return allActivities;
    }
}
