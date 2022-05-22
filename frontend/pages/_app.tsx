import '../styles/globals.css'
import "../styles/mains.scss";
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { getProvider } from "../utils/web3";
import Layout from "../components/layout";

const theme = extendTheme({
  colors: {
    brand: {
      //https://coolors.co/6f2dbd-a663cc-b298dc-b8d0eb-b9faf8
      100: "#6f2dbdff", //"var(--french-violet)",
      200: "#a663ccff",
      300: "#b298dcff",
      400: "#f72585",
      500: "#b8d0ebff",
      600: "#b9faf8ff",
      // --french-violet: #6f2dbdff;
      // --amethyst: #a663ccff;
      // --wisteria: #b298dcff;
      // --light-steel-blue: #b8d0ebff;
      // --celeste: #b9faf8ff;
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="root_container" >
        <Web3ReactProvider getLibrary={getProvider}>
          <ChakraProvider theme={theme}>
            <Layout>
            <Component {...pageProps} />
            </Layout>
            </ChakraProvider>
        </Web3ReactProvider>
    </div>
  );
}

export default MyApp
