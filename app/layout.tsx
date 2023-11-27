import '@/app/ui/global.css';
import { poppins } from './ui/fonts';
import Navbar from '@/app/components/navbar'
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`} >
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
