import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <div className={`${inter.variable} font-inter`}>
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}

export default MyApp;
