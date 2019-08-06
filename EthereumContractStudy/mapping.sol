pragma solidity ^0.5.0;

contract Test {
    mapping( address => uint256 ) public balances;
    
    function setBalance( uint256 _value ) public {
        balances[msg.sender] = _value;
    }
}