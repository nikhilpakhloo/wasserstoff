import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import SideIcons from "@/components/SideIcons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nikhil's IDE",
  description: "This is Frontend task given by wasserstoff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-screen">
        <MenuBar />
        <div className="flex h-full">
          <SideIcons/>

        {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
