import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Justin Shim',
  description: "Justin Shim's Full Stack Developer Portfolio",
  verification: {
    google: '6lzRY32cwn7KuAht56h00b1bSC4m2bFS0dLs6Rjed0Y',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
