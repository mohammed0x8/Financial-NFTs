import type { NextPage } from 'next'
import { useState } from 'react';
import { Select, Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react'
import ListProtons from '../components/listProtons';

const Home: NextPage = () => {

  return (
    <Box my="4" >
          <Flex justify="center" align="center" direction="column" mb={6}>
            <Center>
              <Image width="200px" src="/images/logos/mainlogo.png" borderRadius="12" mb="12"></Image>
            </Center>
            <Text mb={2} fontSize="xl">mint any Defi strategy as an NFT</Text>
            <Text mb={2} fontSize="xl">create and deploy your own</Text>
            <Text mb={2} fontSize="xl">easily sell complex defi instruments</Text>
          </Flex>
          <Flex align="center" justify="center">
            <ListProtons />
          </Flex>
      </Box>
  )
}

export default Home
