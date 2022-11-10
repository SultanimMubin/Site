import Favicon from '../components/Favicon'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <Favicon />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
