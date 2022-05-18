import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

interface Props {
    tokenURI: string;
}
const Proton = ({ tokenURI }: Props) => {
    return (
        <Box>
            Proton: {tokenURI}
        </Box>
    )
}

export default Proton;
