const DaiABI = require("../abisKeep/Dai.json")
const ERC20ABI = require("../abis/ERC20.json")
const { ethers } = require("hardhat");
const hre = require("hardhat");

const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f"
const usdcAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"

async function main() {
    // dai
//   const accountToInpersonate = "0x7923ef1b53eb2cbbf8643f835aadd32f9f1dd240" 
  // usdc
//   const accountToInpersonate = "0x500a746c9a44f68fe6aa86a92e7b3af4f322ae66" whale 1
  const accountToInpersonate = "0x500a746c9a44f68fe6aa86a92e7b3af4f322ae66"
  
  const accountToFund = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [accountToInpersonate],
  });
  const signer = await ethers.getSigner(accountToInpersonate)

//   const daiContract = new ethers.Contract(daiAddress, DaiABI, signer)
  const usdcContract = new ethers.Contract(usdcAddress, ERC20ABI, signer)
  const usdcBalance = await usdcContract.balanceOf(accountToInpersonate)
  console.log("whale usdc balance", usdcBalance / 1e18)

  console.log("transfering to", accountToFund)

  
  await usdcContract.connect(signer).transfer(accountToFund, usdcBalance)
  const accountBalance = await usdcContract.balanceOf(accountToFund)

  console.log("transfer complete")
  console.log("funded account balance", accountBalance / 1e18)

  const whaleBalanceAfter = await usdcContract.balanceOf(accountToInpersonate)
  console.log("whale dai balance after", whaleBalanceAfter / 1e18)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });