import type { AppProps } from "next/app";
// import { Inter } from '@next/font/google'
import "@/styles/globals.css";
// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   display: 'swap',
// })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
