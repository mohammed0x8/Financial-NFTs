import {
    Text,
    Image,
    Button,
    Flex,
    LinkBox,
    Spacer,
    Box,
    useMediaQuery,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  import Wallet from "./wallet";

  const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
  
    return (
      <Flex as="header" p={4} alignItems="center" className="header-container">
        <LinkBox cursor="pointer">
          <NextLink href="/" passHref={true}>
            <Flex align="center">
              <Image
                borderRadius="12px"
                mr="4"
                src="/images/logos/logo.png"
                height="40px"
              />
              {isMobile ? (
                ""
              ) : (
                <Text fontWeight="bold" fontSize="2xl" color="brand.900">
                  Defi Molecules
                </Text>
              )}
            </Flex>
          </NextLink>
        </LinkBox>
        <Spacer />
        <Spacer />
        <Box mr={4}>
          <LinkBox>
            <NextLink href="/proton" passHref={true}>
              <Button bg="white" color="brand.400">
                Mint
              </Button>
            </NextLink>
          </LinkBox>
        </Box>
        <Box mr={4}>
          <LinkBox>
            <NextLink href="/analytics" passHref={true}>
              <Button bg="white" color="brand.400">
                Analytics
              </Button>
            </NextLink>
          </LinkBox>
        </Box>
        <Box>
          <Wallet />
        </Box>
      </Flex>
    );
  };
  
  export default Header;
  