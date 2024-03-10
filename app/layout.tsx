import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const eb_garamond = EB_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb_garamond',
});

export const metadata: Metadata = {
  title: "Lexify",
  description: "Legislation at your fingertips",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={eb_garamond.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}