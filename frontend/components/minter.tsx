import Header from './header';
import { Box, Container, Text, Input, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
    children: React.ReactNode
}

const Minter = (props: Props) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    return (
        <Box>
            <Text>Mint Proton NFT</Text>
            <Input placeholder="name" value={name} onChange={(e: any) => setName(e.target.value)} size="sm"></Input>
            <Input placeholder="description" value={description} onChange={(e: any) => setDescription(e.target.value)} size="sm"></Input>
        </Box>
    )
}

export default Minter;