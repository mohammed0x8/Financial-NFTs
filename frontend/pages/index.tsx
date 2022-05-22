import type { NextPage } from 'next'
import { Select, Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react'
import ListProtons from '../components/listProtons';

import data from "../utils/yourData";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {

  return (
    <Box my="4" >
          <Flex justify="center" align="center" direction="column" mb={6}>
          <div className="section" id="home">
                <div className="container">
                  <div className="header-wrapper">
                    <Fade bottom cascade>
                      <div className="heading-wrapper">
                        {data.headerTagline.map((hl, i) =>
                          i !== 1 ? (
                            <h1 key={i}>{hl}</h1>
                          ) : (
                            <h1 style={{ color: "#3866f5" }} key={i}>
                              <Typewriter
                                options={{
                                  strings: [...hl],
                                  autoStart: true,
                                  delay: 20,
                                  deleteSpeed: 20,
                                  loop: true,
                                }}
                              />
                            </h1>
                          )
                        )}
                      </div>
                    </Fade>
                    <Fade bottom>
                      <p className="description">{data.headerParagraph}</p>
                    </Fade>
                  </div>
                </div>
              </div>
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

          <div className="btn-container">
                      <Fade bottom>
                        <a
                          href={data.discordLink}
                          target="blank"
                          rel="noopener"
                          className="secondary-btn"
                        >
                          Join the Discord
                        </a>
                        <button className="tertiary-btn" onClick={() => {}}>
                          Whitepaper
                        </button>
                      </Fade>
                    </div>
      </Box>
  )
}

export default Home
