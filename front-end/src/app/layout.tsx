import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: "PawsSafety",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  } 
};

const mainFontFamily = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={mainFontFamily.className}>
        {children}
      </body>
    </html>
  );
}