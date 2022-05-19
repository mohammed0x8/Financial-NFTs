import Proton from '../deployments/hardhat/Proton.json';
import { ethers } from 'ethers';

const PROTON_ADDRESS = process.env.NEXT_PUBLIC_PROTON_ADDRESS || "";

export const getProtonTokens = async (provider: any) => {
    console.log('get protons ', provider);

    const protonContract = new ethers.Contract(PROTON_ADDRESS, Proton.abi, provider);

    // totalSupply tokenByIndex tokenURI
    const totalSupply = await protonContract.totalSupply();
    const tokenURIs = [];
    console.log(`totalSupply: ${totalSupply}`)

    const tokenIds = [];
    for(let i = 0; i < totalSupply; i++) {
        const tokenId = await protonContract.tokenByIndex(i);
        tokenIds.push(tokenId)
        console.log(`tokenId: ${tokenId} index: ${i}`)
        tokenURIs.push(await protonContract.tokenURI(tokenId));
    }

    return [tokenURIs, tokenIds];
}