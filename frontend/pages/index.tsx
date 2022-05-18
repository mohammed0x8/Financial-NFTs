import type { NextPage } from 'next'
import { useState } from 'react';
import { Select, Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react'
import Minter from '../components/minter'

const Home: NextPage = () => {

  return (
    <Box my="4" >
          <Center>
            {/* <Image width="200px" src="/images/logo.png"></Image> */}
          </Center>
          <Flex align="center" justify="center">
            <Minter />
          </Flex>
      </Box>
  )
}

export default Home
