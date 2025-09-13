import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import UseSiteSettings from "@/Hooks/UseSiteSettings";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AosProvider from "@/Provider/AosProvider/AosProvider";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";
import QueryProvider from "@/Provider/QueryProvider/QueryProvider";
import { TranslationProvider } from "@/Provider/TranslationProvider/TranslationContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job Minds",
  description: "Resume builder platform",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <TranslationProvider>
          <QueryProvider>
            <AuthProvider>
              <GoogleOAuthProvider
                clientId={`${process.env.NEXT_PUBLIC_GOOGLE_AUTH_ID}`}
              >
                <AosProvider>{children}</AosProvider>
                <Toaster />
                <UseSiteSettings />
                <div id="google_translate_element" />
              </GoogleOAuthProvider>
            </AuthProvider>
          </QueryProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
