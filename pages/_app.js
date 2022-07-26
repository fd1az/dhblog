import { ChakraProvider } from "@chakra-ui/react";
import { useRef } from "react";
import Nav from "../components/Nav.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import customTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const reactQueryClientRef = useRef();

  if (!reactQueryClientRef.current) {
    reactQueryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={reactQueryClientRef.current}>
      <ChakraProvider theme={customTheme}>
        <Nav />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
