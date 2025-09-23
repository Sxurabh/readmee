import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import Header from "../components/ui/Header";
import Script from "next/script"; // Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Powered README Generator",
  description: "Create professional README files in minutes with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="dark">
        <body className={`${inter.className} bg-background text-foreground`}>
          <Header />
          <main>{children}</main>
          {/* Add the Puter.js script here */}
          <Script src="https://js.puter.com/v2/" strategy="afterInteractive" />
        </body>
      </html>
    </ClerkProvider>
  );
}