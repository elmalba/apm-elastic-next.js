import Head from 'next/head'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
// own css files here

import "../styles/globals.css";

//import apm from '../rum'

export default function MyApp({ Component, pageProps }) {
    return (
        <>     
         <Head>
            <title>JS Conf Example</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>

    )
}