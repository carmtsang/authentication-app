import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth App",
  description: "Created as a devChallenge.io challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <main className="h-screen flex flex-col items-center justify-center">
            <div className="w-screen max-w-sm md:max-w-md overflow-hidden flex-none rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              {children}
            </div>
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
