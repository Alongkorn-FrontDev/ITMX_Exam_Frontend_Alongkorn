// import './globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "./redux/StoreProvider";
import App from './components/App';
const inter = Inter({ subsets: ["latin"] });

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
        <StoreProvider> <App>{children}</App></StoreProvider>
      </body>
    </html>
  );
}
