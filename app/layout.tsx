import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Image from 'next/image';
import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Miie Money",
  description: "Get Paid Instantly, Invoice Customers Securely, and Manage Your Business Finances Online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <header className="headerStyle">
      <div className="logoContainerStyle">
        <Image src="/icon.png" alt="Miie Money logo which is a pink and blue smile formed in the shape of an M" width={140} height={50} />
      </div>
    </header>
        {children}
        </body>
    </html>
  );
}
