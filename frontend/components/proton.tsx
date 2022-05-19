import { Box, Text, Flex, Image} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { getIFPSURL } from '../utils/ipfs'
import { useRouter } from 'next/router'

interface Props {
    tokenURI: string;
    tokenId: string;
}

const Proton = ({ tokenURI, tokenId }: Props) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const router = useRouter()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log('tokenURI: ', tokenURI);
        const dataURI = getIFPSURL(tokenURI);
        const res: any = await axios(dataURI);
        if (!res) return;
        const data = res.data;
        console.log('data: ', data);
        
        setName(data.name);
        setDescription(data.description);
        setImage(getIFPSURL(data.image));
    }
    const navigateToProton = () => {
        const tokenData = {
            name,
            description,
            image,
            tokenURI,
            tokenId,
        }
        router.push(
            {
                pathname: `/proton/${tokenId}`,
                query: { data: JSON.stringify(tokenData)}
            },
            undefined,
            { shallow: true }
        )
    }
    return (
        <Box onClick={navigateToProton} cursor="pointer">
            <Flex direction="column" align="center">
                <Text fontSize="4xl" fontWeight="bold" mb={3}>{name}</Text>
                <Text fontSize="xl" mb={3}>{description}</Text>
                <Image my={6} src={image} width="300px" borderRadius="14" />
            </Flex>
        </Box>
    )
}

export default Proton;
