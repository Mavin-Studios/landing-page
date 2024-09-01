import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Mavin Studios",
  description:
    "Mavin Studios is a cutting-edge digital agency that crafts innovative solutions to elevate your brand's online presence. Our team of creative visionaries and technical experts collaborate to design and develop bespoke websites, applications, and digital products that captivate audiences and drive business results.",
  authors: {
    name: "Mavin Studios",
    url: "https://github.com/Mavin-Studios",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}
