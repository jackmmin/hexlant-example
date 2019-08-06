pragma solidity ^0.5.0;

contract BBB {  // fallback, payable 을 이용해서 컨트랙트를 받을 수 있도록.
    address owner;
    constructor() public {
        owner = msg.sender;
    }
    
    function () external payable {
    }
    
    function refund() external {
        msg.sender.transfer( address( this ).balance );
    }
}