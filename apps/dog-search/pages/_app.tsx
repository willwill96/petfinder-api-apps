import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo-client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script'
import BrowserNetworkUrlRewriter from '../components/BrowserNetworkUrlRewriter'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <BrowserNetworkUrlRewriter />
      <Script src="/api/gtag-analytics" strategy="afterInteractive" />
      <Script id="google-analytics-id" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-NNGJPRJDLP');
      `}
      </Script>
      <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col">
        <Header />
        <div className="tw-flex-grow tw-overflow-y-auto tw-w-full tw-flex tw-flex-col">
          <div className="tw-flex-grow tw-px-8">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default MyApp
