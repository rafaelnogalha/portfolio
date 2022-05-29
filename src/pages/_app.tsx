import { AppProps } from 'next/app';
import Script from 'next/script';

import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}
export default MyApp
