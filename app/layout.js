import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/component/navbar"
import Footer from "./nopage/component/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rotectechnocast",
  description: "A metal casting company based in Rajkot, Gujarat, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
