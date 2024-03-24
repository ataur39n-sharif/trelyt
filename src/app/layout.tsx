import "./globals.css";
import { inter } from "@/ThemeSettings";
import Footer from "@/components/common/Layout/Footer";
import Header from "@/components/common/Layout/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
