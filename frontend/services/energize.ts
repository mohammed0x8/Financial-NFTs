import { ethers } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import web3 from 'web3';

import ERC20 from '../abi/ERC20.json';
import { USDC_ADDRESS } from '../utils/globals'
import ChargedParticles from '../deployments/polygon/ChargedParticles.json'
import ProtonB from '../deployments/polygon/ProtonB.json'

export const approveUSDC = async (provider: any, amount: number) => {
    console.log('approveUSDC ', amount);
    const signer = provider.getSigner();

    const usdcContract = new ethers.Contract(USDC_ADDRESS, ERC20, signer);

    const response = await usdcContract.approve(ChargedParticles.address, web3.utils.toWei('' + amount));
    console.log(`approveUSDC response: ${JSON.stringify(response)}`)
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
    
        const CPContract = new ethers.Contract(ChargedParticles.address, ChargedParticles.abi, signer);
    
        // totalSupply tokenByIndex tokenURI
        debugger;
        const response = await CPContract.energizeParticle(
            ProtonB.address,
            tokenId,
            walletManagerId,
            USDC_ADDRESS,
            assetAmount + '000000', // usdc is 6 decimals
            "0x0000000000000000000000000000000000000000"
        );
        console.log(`energizeParticle response: ${JSON.stringify(response)}`)
}
