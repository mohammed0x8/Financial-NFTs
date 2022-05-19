import type { NextPage } from 'next'
import { useState } from 'react';
import { Select, Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react'
import Minter from '../../components/minter'

const Proton: NextPage = () => {

  return (
    <Box my="4" >
          <Flex align="center" justify="center">
            <Minter />
          </Flex>
      </Box>
  )
}

export default Proton
