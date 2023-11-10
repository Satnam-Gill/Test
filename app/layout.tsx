
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "./(TEST)/Components/Header";
import NavBar from "./(TEST)/Components/Navbar";
import { Navbar1 } from "./(TEST)/Components/Navabar1";
import Navbar2 from "./(TEST)/Components/Navbar2";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar2/>
        <Navbar1/>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
