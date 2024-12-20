import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-satoshi">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

