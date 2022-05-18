import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { Select, Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react'
import Minter from '../components/minter';

const Home: NextPage = () => {

  const onApprove = () => {
    console.log("on approve");
  }
  const onSwap = () => {
    console.log("on swap");
  }
  return (
    <Box my="4" >
          {/* <Text color={"white"} fontSize="xl" align="center" >UFO COW Swap</Text> */}
          <Center>
            <Image width="200px" src="/images/logo.png"></Image>
          </Center>
          <Flex align="center" justify="center">
            <Minter />
          </Flex>
      </Box>
  )
}

export default Home
