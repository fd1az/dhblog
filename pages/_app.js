import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../components/Nav.js";

import customTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
