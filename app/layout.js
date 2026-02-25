import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Navbar from "@/Component/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "BitTree - Your Favorite Link Sharing Site",
  description: "We brought a revolution in link sharing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {/* Navbar decides internally whether to show */}
        <Navbar />

        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}