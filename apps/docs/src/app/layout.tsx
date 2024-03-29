import './globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Doc App',
  description: 'Welcome to Doc App',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Doc App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
    </div>
  );
}
