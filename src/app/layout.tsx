import { inter } from "@/ThemeSettings";
import Footer from "@/components/common/Layout/Footer";
import Header from "@/components/common/Layout/Header";
import Script from "next/script";
import "./globals.css";



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
        <Script
          id="microsoft-clarity-analytics"
          strategy="afterInteractive" // or "lazyOnLoad"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rb0aarejdj");
          `,
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
