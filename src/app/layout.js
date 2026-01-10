import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// 1. IMPORT THE BUTTON HERE
import FloatingWhatsApp from "./components/FloatingWhatsApp"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Sudhhi Group | Modern Office Interior Design Bengaluru",
  description: "Transform your Bengaluru office with Sudhhi Group.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-off-white text-charcoal`}>
        <Navbar />
        <main>{children}</main>
        
        {/* 2. ADD THE COMPONENT HERE, BEFORE FOOTER */}
        <FloatingWhatsApp />
        
        <Footer />
      </body>
    </html>
  );
}