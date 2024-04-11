import type { Metadata } from 'next';
import { Fira_Code, Inter, JetBrains_Mono, Rubik } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({
  subsets: ['latin'],
});

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
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
