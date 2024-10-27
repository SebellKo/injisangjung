import { Viewport } from 'next';
import '../styles/global.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { META } from '@/constant/meta';

export const metadata = META;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
