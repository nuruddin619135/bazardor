import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Bazardor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
