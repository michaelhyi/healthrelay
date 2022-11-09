import "../styles/globals.css";
import type { AppProps } from "next/app";
import Helmet from "../components/Helmet";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Helmet />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
