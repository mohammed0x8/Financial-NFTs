import { useState } from 'react';
import {
    Input,
    Flex,
    Textarea,
    Center,
    Box,
    Image,
    Button,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { uploadImageToIPFS, createProton } from '../services/createProton';

type Props = {
};

const CreateForm = (props: Props) => {
    const [fileUrl, setFileUrl] = useState<any>(null);
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [name, setName] = useState<string>("");

    const web3 = useWeb3React()

    const handleSubmit = () => {

        if (web3.account && web3.library && description && fileUrl && price) {
            createProton(web3.account, web3.library, name, description, fileUrl, price);

        } else {
            console.error('Error: could not make post', web3.account, web3.library, description, fileUrl, price)
        }
    };

    async function handleImageUpload(e: any) {
        if (
            !e ||
            !e.target ||
            !e.target.files ||
            !e.target.files[0]
        ) {
            setFileUrl(null);
            return;
        }
        const file = e.target.files[0];
        try {
            // const url = await uploadImageToIPFS(file);
            // setFileUrl(url);
            setFileUrl(
                'https://ipfs.infura.io/ipfs/QmSKCYdovA7z7RGi7XGNwLouLEnMkBmQzb7GEUgYs8fPc1',
            );
        } catch (error) {
            console.log(`Error uploading file: ${error}`);
        }
    }
    const renderImage = () => {
        if (fileUrl) {
            return (
                <Image
                    src={fileUrl}
                    boxSize="350px"
                    objectFit="cover"
                />
            );
        }
        return '';
    };
    return (
        <>
            <Center>
                <Box
                    borderColor="brand.gradienta"
                    bg={'brand.gradienta'}
                    maxW="lg"
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                >
                    <Flex direction="column">
                        <Box
                            borderColor="brand.darkslategray"
                            mb={4}
                            h="300px"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                        >
                            {renderImage()}
                        </Box>
                        <Input placeholder="name" value={name} onChange={(e: any) => setName(e.target.value)} size="sm"></Input>
                        <Textarea
                            mb={4}
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            placeholder="NFT description"
                            size="sm"
                            borderColor="brand.darkslategray"
                            bg="brand.darkslategray"
                        />
                        <Box mb={4}>
                            <Input
                                borderColor="brand.darkslategray"
                                w="100px"
                                placeholder="ETH price"
                                onChange={(e) =>
                                    setPrice(e.target.value)
                                }
                                bg="brand.darkslategray"
                            />
                        </Box>
                        <Box mb={4}>
                            <input
                                type="file"
                                name="image"
                                className="CreateForm__img"
                                onChange={handleImageUpload}
                                style={{
                                    backgroundColor: "brand.darkslategray"
                                }}
                            />
                        </Box>
                        <Button
                            mb={4}
                            colorScheme={'purple'}
                            onClick={handleSubmit}
                        >
                            MINT
                        </Button>
                    </Flex>
                </Box>
            </Center>
        </>
    );
};

export default CreateForm;
