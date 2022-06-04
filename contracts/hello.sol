// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Hello {
	uint256 totalWaves;

	constructor() {
	    console.log("Hello world");
	}

	function wave() public {
		totalWaves += 1;
		console.log("%s has just waved!", msg.sender);
	}

	function totalWaves() public view returns (uint256) {
		console.log("We have %d total waves", totalWaves);
		return totalWaves;
	}

}