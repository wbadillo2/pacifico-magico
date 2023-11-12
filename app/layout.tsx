import '@/app/ui/global.css';
import { poppins } from './ui/fonts';
import Navbar from '@/app/ui/navbar'

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
      </body>

    </html>
  );
}
