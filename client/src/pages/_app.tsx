import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/components/fontawsome/fontawsome';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
