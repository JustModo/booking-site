import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Provider } from "../utils/ThemeProvider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Booking Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="h-full bg-neutral">
        <Provider>
          <NavBar />
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
