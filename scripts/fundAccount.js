const DaiABI = require("../abisKeep/Dai.json")
const { ethers } = require("hardhat");
const hre = require("hardhat");

const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f"

async function main() {
  const accountToInpersonate = "0x7923ef1b53eb2cbbf8643f835aadd32f9f1dd240"
  const accountToFund = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [accountToInpersonate],
  });
  const signer = await ethers.getSigner(accountToInpersonate)

  const daiContract = new ethers.Contract(daiAddress, DaiABI, signer)
  const daiBalance = await daiContract.balanceOf(accountToInpersonate)
  console.log("whale dai balance", daiBalance / 1e18)

  console.log("transfering to", accountToFund)

  
  await daiContract.connect(signer).transfer(accountToFund, daiBalance)
  const accountBalance = await daiContract.balanceOf(accountToFund)

  console.log("transfer complete")
  console.log("funded account balance", accountBalance / 1e18)

  const whaleBalanceAfter = await daiContract.balanceOf(accountToInpersonate)
  console.log("whale dai balance after", whaleBalanceAfter / 1e18)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });