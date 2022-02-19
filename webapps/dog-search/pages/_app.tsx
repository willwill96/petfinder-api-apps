import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo-client'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <div className="@w-full @h-full @flex @items-center @justify-center @flex-col">
        <Header />
        <div className="@h-full @flex-grow @overflow-y-auto @w-full @px-8">
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default MyApp
