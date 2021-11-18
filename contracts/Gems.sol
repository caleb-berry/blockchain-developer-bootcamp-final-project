// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title Gems contract for space miners

contract Gems is ERC20 {
    constructor() ERC20('GEMS', 'GEM') {
        _mint(msg.sender, 100000000*10**18);
    }
}