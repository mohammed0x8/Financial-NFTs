import { Web3Provider } from '@ethersproject/providers'
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { ethers } from 'ethers';

import ChargedParticles from '../deployments/hardhat/ChargedParticles.json';
import Proton from '../deployments/hardhat/Proton.json';

// @ts-ignore
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const CHARGED_PARTICLES_ADDRESS = process.env.NEXT_PUBLIC_CHARGED_PARTICLES_ADDRESS || "";
const PROTON_ADDRESS = process.env.NEXT_PUBLIC_PROTON_ADDRESS || "";

export async function uploadImageToIPFS(file: any): Promise<string> {

    const added = await client.add(file, {
        progress: (prog: any) => console.log(`received: ${prog}`),
    });
    return `https://ipfs.infura.io/ipfs/${added.path}`;
}

export async function createProton(address: string, provider: Web3Provider, name: string, description: string, fileUrl: string, price: string): Promise<string| undefined>  {

    if (!name || !description || !fileUrl || !price) {
        console.error('Error: missing data: ', name, description, fileUrl, price);
        return;
    }

    try {
        /* first, upload to IPFS */
        const data = JSON.stringify({
            name,
            description,
            image: fileUrl,
        });
        const added = await client.add(data);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        // todo: remove dev mode
        // const url = "https://ipfs.infura.io/ipfs/QmURfH4SppoP4ypXYgCnUJkuneaRNjRYcJxQG4eEKsrq3W";
        console.log('creating sale: ', url, price, address);
        /* after file is uploaded to nftStorage, pass the URL to save it on blockchain */
        createProtonForSale(url, price, address, provider);
    } catch (error) {
        console.log(`Error uploading file: ${error}`);
    }
}

async function createProtonForSale(url: string, price: string, address: string, provider: Web3Provider) {
    const signer = provider.getSigner();
    debugger;

    console.log('create post 1', url, price, address);
    /* next, create the item */
    const protonContract = new ethers.Contract(PROTON_ADDRESS, Proton.abi, signer);
    
   console.log("protonContract: ", protonContract);
    let transaction = await protonContract.createProtonForSale(
        address,
        address,
        url,
        0,
        0,
        price
    );
    const tx = await transaction.wait();
    console.log("tx:", tx);
    if (tx.events.length < 1) {
        console.error('tx has no events. tx: ', tx);
        return;
    }
    console.log('create post 2');
    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber();
    console.log('token id: ', tokenId);
}