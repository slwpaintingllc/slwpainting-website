import '../styles/globals.css'
import Head from 'next/head'
export default function App({Component,pageProps}){
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <script dangerouslySetInnerHTML={{__html:`
        tailwind = window.tailwind || {};
        tailwind.config = { theme: { extend: { colors: { brand: '#60A5F8' } } } };
      `}} />
      <script src="https://cdn.tailwindcss.com"></script>
    </Head>
    <Component {...pageProps} />
  </>)
}