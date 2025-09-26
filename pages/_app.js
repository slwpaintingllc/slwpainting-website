import '../styles/globals.css'
import Head from 'next/head'
export default function App({Component,pageProps}){return (<>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
    <link rel="icon" href="/logo.png" />
  </Head>
  <Component {...pageProps} />
</>)}