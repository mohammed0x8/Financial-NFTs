import { Box, Container, Text, Input, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreateForm from './createForm';

interface Props {
}

const Minter = (props: Props) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    return (
        <Box>
            <Text>Mint Proton NFT</Text>
            <CreateForm />
        </Box>
    )
}

export default Minter;