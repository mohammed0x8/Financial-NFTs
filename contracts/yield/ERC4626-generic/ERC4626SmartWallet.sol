// SPDX-License-Identifier: MIT

// AaveSmartWallet.sol -- Part of the Charged Particles Protocol
// Copyright (c) 2021 Firma Lux, Inc. <https://charged.fi>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "./interfaces/IERC4626.sol";
import "../../lib/SmartWalletBaseB.sol";

/**
 * @notice ERC20-Token Smart-Wallet for Aave Assets
 * @dev Non-upgradeable Contract
 */
contract ERC4626SmartWallet is SmartWalletBaseB {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  mapping (address => address) internal _assetYieldTokens;

  uint256 public ZERO;
  address public ZERO_ADDRESS; 


  /***********************************|
  |          Initialization           |
  |__________________________________*/

  function initialize()
    public
  {
    SmartWalletBaseB.initializeBase();
  }


  /***********************************|
  |              Public               |
  |__________________________________*/

  function isReserveActive(address assetToken) external view override returns (bool) {
    return _getPrincipal(assetToken) == 0;
  }

  function getReserveInterestToken(address assetToken) external view override returns (address) {
    return assetToken;
  }

  function getPrincipal(address assetToken) external override returns (uint256) {
    return _getPrincipal(assetToken);
  }

  function getInterest(address assetToken, uint256 /**creatorPct*/) external override returns (uint256 creatorInterest, uint256 ownerInterest) {
    return _getInterest(assetToken, ZERO);
  }

  function getTotal(address assetToken) external override returns (uint256) {
    return _getTotal(assetToken);
  }

  function getRewards(address rewardToken) external override returns (uint256) {
    return IERC20(rewardToken).balanceOf(address(this));
  }

  function deposit(
    address assetToken,
    uint256 assetAmount,
    uint256 /**referralCode*/
  )
    external
    override
    onlyWalletManager
    returns (uint256)
  {
    return _deposit(assetToken, assetAmount, ZERO);
  }


  function withdraw(
    address receiver,
    address /**creator*/,
    uint256 /**creatorPct*/,
    address assetToken
  )
    external
    override
    onlyWalletManager
    returns (uint256 creatorAmount, uint256 receiverAmount)
  {
    return _withdraw(receiver, ZERO_ADDRESS, ZERO, assetToken, IERC20(assetToken).balanceOf(address(this)));
  }

  function withdrawAmount(
    address receiver,
    address /**creator*/,
    uint256 /**creatorPct*/,
    address assetToken,
    uint256 assetAmount
  )
    external
    override
    onlyWalletManager
    returns (uint256 creatorAmount, uint256 receiverAmount)
  {
    return _withdraw(receiver, ZERO_ADDRESS, ZERO, assetToken, assetAmount);
  }
  function withdrawAmountForCreator(
    address /* receiver */,
    uint256 /* creatorPct */,
    address /* assetToken */,
    uint256 /* assetID */
  )
    external
    override
    onlyWalletManager
    returns (uint256 receiverAmount)
  {
    return 0;
  }


  function withdrawRewards(
      address receiver, 
      address rewardsTokenAddress, 
      uint256 rewardsAmount
      )
    external
    override
    onlyWalletManager
    returns (uint256)
  {
    address self = address(this);
    IERC20 rewardsToken = IERC20(rewardsTokenAddress);

    uint256 walletBalance = rewardsToken.balanceOf(self);
    require(walletBalance >= rewardsAmount, "GSW:E-411");

    // Transfer Rewards to Receiver
    rewardsToken.safeTransfer(receiver, rewardsAmount);
    return rewardsAmount;
  }

  function refreshPrincipal(address assetToken) external virtual override onlyWalletManager {
    _assetPrincipalBalance[assetToken] = _getTotal(assetToken);

  }

  /***********************************|
  |         Private Functions         |
  |__________________________________*/

  function _deposit(
    address assetToken,
    uint256 assetAmount,
    uint256 /**referralCode*/
  )
    internal
    returns (uint256)
  {
    IERC4626 yieldAssetToken = IERC4626(assetToken);
    _trackAssetToken(assetToken);
    uint256 underlyingAssetAmount = yieldAssetToken.convertToAssets(assetAmount);

    // Track Principal
    _assetPrincipalBalance[assetToken] = _assetPrincipalBalance[assetToken].add(underlyingAssetAmount);

    // Deposit Assets (reverts on fail)
    _sendToken(address(this), assetToken, assetAmount);

    // Return amount of aTokens transfered
    return assetAmount;
  }

  function _withdraw(
    address receiver,
    address /**creator*/,
    uint256 /**creatorPct*/,
    address assetToken,
    uint256 assetAmount
  )
    internal
    returns (uint256 creatorAmount, uint256 receiverAmount)
  {
    IERC4626 yieldAssetToken = IERC4626(assetToken);
    uint assetBalance = IERC20(assetToken).balanceOf(address(this));

    uint256 walletUnderlyingPrincipal = _getPrincipal(assetToken);
    (, uint256 ownerInterest) = _getInterest(assetToken, ZERO);

    if(assetAmount > assetBalance){
        assetAmount = assetBalance;
        _assetPrincipalBalance[assetToken] = 0;
    }
    else {
        uint256 underlyingAssetAmount  = yieldAssetToken.convertToAssets(assetAmount);
        underlyingAssetAmount = underlyingAssetAmount.sub(ownerInterest);
        _assetPrincipalBalance[assetToken] = _assetPrincipalBalance[assetToken].sub(underlyingAssetAmount);

    }
    IERC4626(assetToken).withdraw(assetAmount, receiver, address(this));

  }


// total is calculated in underlying
  function _getTotal(address assetToken) internal view returns (uint256) {
    uint256 total = IERC20(assetToken).balanceOf(assetToken);
    return IERC4626(assetToken).convertToAssets(total);
  }

    function _getInterest(address assetToken, uint256 /**creatorPct*/) internal view returns (uint256, uint256 ) {
    uint256 principal = _getPrincipal(assetToken);
    uint256 total = _getTotal(assetToken);
    uint256 ownerInterest = total.sub(principal);

  }

  function _trackAssetToken(address assetToken) internal override {
    if (!_assetTokens.contains(assetToken)) {
      _assetTokens.add(assetToken);
      address underlyingTokenAddress = IERC4626(assetToken).asset();
      _assetYieldTokens[assetToken] = underlyingTokenAddress;
    }
  }

  function _sendToken(address to, address token, uint256 amount) internal {
    IERC20(token).safeTransfer(to, amount);
  }
}
