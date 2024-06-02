// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AgentRegistry {
    struct Agent {
        address agentAddress;
        string agentType;
        bool isRegistered;
    }

    mapping(address => Agent) public agents;
    address[] public agentList;
    address public owner;

    event AgentRegistered(address agentAddress, string agentType);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerAgent(string memory _agentType) public {
        require(!agents[msg.sender].isRegistered, "Agent already registered");

        agents[msg.sender] = Agent({
            agentAddress: msg.sender,
            agentType: _agentType,
            isRegistered: true
        });

        agentList.push(msg.sender);

        emit AgentRegistered(msg.sender, _agentType);
    }

    function getAgent(
        address _agentAddress
    ) public view returns (Agent memory) {
        return agents[_agentAddress];
    }

    function getAllAgents() public view returns (address[] memory) {
        return agentList;
    }
}
