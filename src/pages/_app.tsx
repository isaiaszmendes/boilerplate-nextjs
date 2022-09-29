import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link ref={`shortcut icon`} href='="/img/icon.png' />
        <link ref={`apple-touch icon`} href='="/img/icon.png' />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Component"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
