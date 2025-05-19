import Footer from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import Provider from '@/providers/session-providers';
import { ThemeProvider } from '@/providers/theme-providers';
import { ToastProvider } from '@/providers/toast-providers';
import { Quicksand } from 'next/font/google';
import './globals.css';

// Initialize font outside component
const quicksand = Quicksand({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <Provider>{children}</Provider>
          <Footer />
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
