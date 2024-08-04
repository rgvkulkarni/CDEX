import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Appbar } from "./components/Appbar";
import { Provider } from "./Providers";
import { HeroComponent } from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DCEX",
  description: "Decetralized Crypto application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
          <Appbar/>
          {children}
          </Provider>
      </body>
    </html>
  );
}
