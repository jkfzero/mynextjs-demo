import Link from "next/link";
import Head from "next/head";
import Script from 'next/script'
import Layout from "../components/layout";

export default function FirstPost() {
  return(
    <Layout>
    <Head>
      <title>Test My Post</title>
      <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.ga has been populated`)
        }
      />
    </Head>
    <h1>First Post</h1>
    <Link href="/">back to home</Link>
    </Layout>
  ) 
}