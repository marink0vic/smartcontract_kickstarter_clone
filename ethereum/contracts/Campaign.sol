pragma solidity ^0.4.17;

contract Campaign {

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvers;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public contributers;
    Request[] public requests;
    uint public contributersCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum) public{
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        contributers[msg.sender] = true;
        contributersCount ++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        }); 
       
        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(contributers[msg.sender]);
        require(!request.approvers[msg.sender]);
        
        request.approvers[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > contributersCount / 2);
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

}