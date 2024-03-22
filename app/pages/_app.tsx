import { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';

const noto = Noto_Sans();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={noto.className}>
      <Component {...pageProps} />
    </main>
  );
};
