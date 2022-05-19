import { Box, Text, Flex, Image} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Props {
    tokenURI: string;
}
const Proton = ({ tokenURI }: Props) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data: any = await fetch(tokenURI);
        console.log(`data: ${data}`)
        setName(data.name);
        setDescription(data.description);
        setImageURL(data.imageURL);
    }
    return (
        <Box>
            <Text fontSize="4xl" fontWeight="bold" mb={3}>{name}</Text>
            <Text fontSize="xl" mb={3}>{description}</Text>
            <Image my={6} src={imageURL}/>
        </Box>
    )
}

export default Proton;
