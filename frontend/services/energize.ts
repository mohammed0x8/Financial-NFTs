import { ethers } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import web3 from 'web3';

import ChargedParticles from '../deployments/hardhat/ChargedParticles.json';
import ERC20 from '../abi/ERC20.json';
import { USDC_ADDRESS } from '../utils/globals'

const CHARGED_PARTICLES_ADDRESS = process.env.NEXT_PUBLIC_CHARGED_PARTICLES_ADDRESS || "";
const PROTON_ADDRESS = process.env.NEXT_PUBLIC_PROTON_ADDRESS || "";

export const approveUSDC = async (provider: any, amount: number) => {
    console.log('approveUSDC ', provider);
    const signer = provider.getSigner();

    const usdcContract = new ethers.Contract(USDC_ADDRESS, ERC20, signer);

    // totalSupply tokenByIndex tokenURI
    const response = await usdcContract.approve(CHARGED_PARTICLES_ADDRESS, web3.utils.toWei('' + amount));
    console.log(`response: ${JSON.stringify(response)}`)
}

export const energizeParticle = async (
        provider: any,
        tokenId: string,
        walletManagerId: string,
        assetToken: string,
        assetAmount: string
    ) => {
        const signer = provider.getSigner();
        console.log(
            "energizeParticle: ",
            provider,
            tokenId,
            walletManagerId,
            assetToken,
            assetAmount
        );
        
    
        const CPContract = new ethers.Contract(CHARGED_PARTICLES_ADDRESS, ChargedParticles.abi, signer);
    
        // totalSupply tokenByIndex tokenURI
        const response = await CPContract.energizeParticle(
            PROTON_ADDRESS,
            tokenId,
            walletManagerId,
            assetToken,
            assetAmount + '000000', // usdc is 6 decimals
            "0x0000000000000000000000000000000000000000"
        );
        console.log(`response: ${JSON.stringify(response)}`)
}


//     Function: energizeParticle(address contractAddress, uint256 tokenId, string walletManagerId, address assetToken, uint256 assetAmount, address referrer)
// #	Name	Type	Data
// 0	contractAddress	address	0x1CeFb0E1EC36c7971bed1D64291fc16a145F35DC
// 1	tokenId	uint256	361
// 2	walletManagerId	string	aave.B
// 3	assetToken	address	0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174
// 4	assetAmount	uint256	10 000000
// 5	referrer	address	0x0000000000000000000000000000000000000000

// energizeParticles = async() =>  {

//     await CPcontracts.methods.energizeParticle
//     (
//       "0x517fEfB53b58Ec8764ca885731Db20Ca2dcac7b7",
//       tokenId.value,
//      "generic",
//      ERC20Token.value,
//      tokenamount.value,
//      "0x0000000000000000000000000000000000000000"
//     ).send({
//             from : accounts[0]
//             // gas:"600000",
//             // value: Web3.utils.toWei('1')
//         }).once("receipt", (reciept) => {
//             console.log(reciept);
//             let data = JSON.stringify(reciept.events.ProtocolFeesCollected.returnValues.assetToken);
//       document.getElementById('112').innerHTML = data;
//         });
//   };
//   ERC20Token = document.getElementById("ERC20Token");
//   const tokenId = document.getElementById("tokenId");
//   const tokenamount = document.getElementById("tokenamount");
//   const energizeParticle1 = document.getElementById("btnenergize");
//   energizeParticle1.onclick = energizeParticles;