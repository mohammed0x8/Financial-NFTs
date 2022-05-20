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
    debugger;

    const usdcContract = new ethers.Contract("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", ERC20, signer);

    // totalSupply tokenByIndex tokenURI
    const response = await usdcContract.approve(ChargedParticles.address, 1000000);
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
        
    
        const CPContract = new ethers.Contract(ChargedParticles.address, ChargedParticles.abi, signer);
    
        // totalSupply tokenByIndex tokenURI
        debugger;
        const response = await CPContract.energizeParticle(
            ProtonB.address,
            tokenId,
            walletManagerId,
            assetToken,
            assetAmount + '000000', // usdc is 6 decimals
            "0x0000000000000000000000000000000000000000"
        );
        console.log(`response: ${JSON.stringify(response)}`)
}
