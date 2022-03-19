// We can use this page to keep state when navigating between pages
// Also alters global styles
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';



function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <Component {...pageProps} />
   </ChakraProvider>
  );
};

export default MyApp
