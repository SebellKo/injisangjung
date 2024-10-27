import { Viewport } from 'next';
import '../styles/global.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { META } from '@/constant/meta';
import Head from 'next/head';

export const metadata = META;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="naver-site-verification"
          content="5165db2bef3a83d8fe37df94188c2fcc3ddcb763"
        />
        <meta
          name="google-site-verification"
          content="AJzFmVX4rILI2-0uyzAXFW8lNgPAAgqDOYfdcU4SSVk"
        />
      </Head>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
