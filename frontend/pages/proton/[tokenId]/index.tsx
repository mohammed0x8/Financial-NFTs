import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Select, Flex, Box, Center, Text, Button, Image, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { approveUSDC, energizeParticle } from '../../../services/energize'
import { useWeb3React } from '@web3-react/core'
import { USDC_ADDRESS } from '../../../utils/globals'

interface Props {
}

const ENERGIZE_STRATEGIES = [
    {
        name: 'Aave',
        walletManagerId: 'aave.B'
    },
    {
        name :'BadgerDAO',
        walletManagerId: 'badgerDao'
    },
    {
        name :'Aave V3',
        walletManagerId: 'aaveV3'
    },
    {
        name :'ERC20',
        walletManagerId: 'generic'
    },
    {
        name :'ERC721/ERC1155',
    }
];

const Proton: NextPage = (props: Props) => {
    const [tokenData, setTokenData] = useState<any>({});
    const [strategy, setStrategy] = useState<any>({});
    const [asset, setAsset] = useState<string>("");
    const [assetAmount, setAssetAmount] = useState<number>(0);
    const router = useRouter();

    const web3 = useWeb3React()

    useEffect(() => {
        if (!router.query.data) {
            return;
        }
        const data = JSON.parse(router?.query?.data as string)
        setTokenData(data)
    }, [])

    const renderAssetLogo = () => {
        switch (asset) {
            case 'usdc':
                return (<Image src={'/images/logos/usdc.png'} width="40px" height="40px" mr="2" />)
            case 'weth':
                return (<Image src={'/images/logos/weth.png'} width="40px" height="40px" mr="2" />)
            case 'dai':
                return (<Image src={'/images/logos/dai.png'} width="40px" height="40px" mr="2" />)
            default: 
                return (<Box width="40px" height="40px" mr="2" >{' '}</Box>)
        }
    }
    const approve = () => {
        console.log('approve');
        if (!web3.library) {
            alert("sign in is requried")
            return;
        }
        approveUSDC(web3.library, assetAmount)
    }
    const getAssetToken = (asset: string) => {
        switch(asset) {
            case 'usdc':
                return USDC_ADDRESS;
            default:
                return USDC_ADDRESS;
        }
    }
    const energize = () => {
        console.log('energize');
        if (!web3.library) {
            alert("sign in is requried")
            return;
        }
        energizeParticle(
            web3.library,
            tokenData.tokenId,
            strategy.walletManagerId,
            getAssetToken(asset),
            ''+assetAmount
        )
    }

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
                                {ENERGIZE_STRATEGIES.map((elem: any) => {
                                    return (
                                        <Button bg={elem.name === strategy.name ? 'brand.400' : 'pink.100'} m="4" p="4" onClick={() => setStrategy(elem)} cursor="pointer">
                                            <Text fontWeight="bold">{elem.name}</Text>
                                        </Button>
                                    )
                                })}
                            </Flex>
                            <Text>Select Asset to Deposit</Text>
                            <Select placeholder='Select option' my={4} width="200px" value={asset} onChange={(e: any) => setAsset(e.target.value)}>
                                <option value='usdc'>USDC</option>
                                <option value='weth'>wETH</option>
                                <option value='dai'>DAI</option>
                            </Select>
                            <Text>Amount to Deposit</Text>
                            <Flex direction="row" align="center">
                                {renderAssetLogo()}
                                <Input width="200px" my={4} value={assetAmount} onChange={(e: any) => setAssetAmount(e.target.value)} />
                            </Flex>
                            <Flex direction="row" align="center">
                                <Button mr={4} onClick={approve}>Approve</Button>
                                <Button onClick={energize}>Energize</Button>
                            </Flex>
                        </Flex>
                    </Box>

                </Flex>
            </Box>
        </Flex>
    )
}

export default Proton
