import Head from 'next/head'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import { init as RumAgent } from '@elastic/apm-rum';

// own css files here

import "../styles/globals.css";

import conf from '../elastic-apm-node';

const rum = RumAgent(conf);
rum.setInitialPageLoadName('Landing Page');

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