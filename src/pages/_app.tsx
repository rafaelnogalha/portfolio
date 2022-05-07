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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${N38SLT5}');
          `}
        </Script>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}
export default MyApp
