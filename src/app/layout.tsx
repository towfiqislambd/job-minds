import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AosProvider from "@/Provider/AosProvider/AosProvider";
import QueryProvider from "@/Provider/QueryProvider/QueryProvider";
import ReduxProvider from "@/Provider/ReduxProvider/ReduxProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job Minds",
  description: "Resume builder platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <QueryProvider>
          <AuthProvider>
            <ReduxProvider>
              <GoogleOAuthProvider
                clientId={`${process.env.NEXT_PUBLIC_GOOGLE_AUTH_ID}`}
              >
                <AosProvider>{children}</AosProvider>
                <Toaster />
              </GoogleOAuthProvider>
            </ReduxProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
