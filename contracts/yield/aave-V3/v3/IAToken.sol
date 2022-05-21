// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface IAToken {
  function balanceOf(address account) external view returns (uint256);
  function UNDERLYING_ASSET_ADDRESS() external view returns (address);
}
