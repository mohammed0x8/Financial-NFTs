import { Box, Text, Button, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Proton from './proton'
import { getProtonTokenURIs } from '../services/protons'
import { useWeb3React } from '@web3-react/core';

const ListProtons = () => {
    const [tokenURIs, setTokenURIs] = useState<any>([]);

    const web3 = useWeb3React()

    useEffect(() => {
        asyncRequest()
    }, [web3.library]);

    const asyncRequest = async () => {
        web3.library && setTokenURIs(await getProtonTokenURIs(web3.library));
    }

    return (
        <Box>
            <Flex justify={"center"} align={"center"} direction={"column"}>
                {tokenURIs.map((tokenURI: any) => (
                    <Proton tokenURI={tokenURI} />
                ))}
            </Flex>
        </Box>
    )
}

export default ListProtons;