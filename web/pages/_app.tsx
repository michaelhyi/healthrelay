import "../styles/globals.css";
import type { AppProps } from "next/app";
import Helmet from "../components/Helmet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
