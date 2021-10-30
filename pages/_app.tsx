import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Controller from "../components/Controller";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
        <Controller />
      </>
  );
}

export default MyApp
