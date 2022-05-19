import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Select, Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface Props {
}

const ENERGIZE_STRATEGIES = [
    {
        name: 'Aave'
    },
    {
        name :'BadgerDAO',
    },
    {
        name :'Aave V3',
    },
    {
        name :'ERC20',
    },
    {
        name :'ERC721/ERC1155',
    }
];

const Proton: NextPage = (props: Props) => {
    const [tokenData, setTokenData] = useState<any>({});
    const [strategy, setStrategy] = useState<any>({});
    const router = useRouter();

    useEffect(() => {
        if (!router.query.data) {
            return;
        }
        const data = JSON.parse(router?.query?.data as string)
        setTokenData(data)
    }, [])

    return (
        <Flex justify={"center"}>
            <Box my="4"  width="1100px" mx="12" p="4" borderRadius="12" borderColor="brand.300">
                <Flex>
                    <Flex width="400px" align="center" justify="center" direction="column" mr="12">
                        <Text fontSize="6xl" fontWeight="bold" my="6">{tokenData.name}</Text>
                        <Text fontSize="xl" my="6">{tokenData.description}</Text>
                        <Image my={6} src={tokenData.image} width="300px" borderRadius="14" />
                    </Flex>
                    <Box>
                        <Flex direction="column">
                            <Text mb="6" fontSize="4xl">Energize</Text>
                            <Text>Select Strategy or Token</Text>
                            <Flex flexDirection="row">
                                {ENERGIZE_STRATEGIES.map((strategy: any) => {
                                    return (
                                        <Button m="4" p="4" onClick={() => setStrategy(strategy)} cursor="pointer">
                                            <Text fontWeight="bold">{strategy.name}</Text>
                                        </Button>
                                    )
                                })}
                            </Flex>
                        </Flex>
                    </Box>

                </Flex>
            </Box>
        </Flex>
    )
}

export default Proton
