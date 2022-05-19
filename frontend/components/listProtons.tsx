import { Box, Text, Button, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Proton from './proton'
import { getProtonTokens } from '../services/protons'
import { useWeb3React } from '@web3-react/core';

const ListProtons = () => {
    const [tokenURIs, setTokenURIs] = useState<any>([]);
    const [tokenIds, setTokenIds] = useState<any>([]);

    const web3 = useWeb3React()

    useEffect(() => {
        asyncRequest()
    }, [web3.library]);

    const asyncRequest = async () => {
        if (web3.library) {
            const tokensData = await getProtonTokens(web3.library);
            setTokenURIs(tokensData[0]);
            setTokenIds(tokensData[1]);
        }
    }

    return (
        <Box>
            <Flex justify={"center"} align={"center"} direction={"column"}>
                {tokenURIs.map((tokenURI: any, i: number) => (
                    <Proton tokenId={tokenIds[i]} tokenURI={tokenURI} />
                ))}
            </Flex>
        </Box>
    )
}

export default ListProtons;