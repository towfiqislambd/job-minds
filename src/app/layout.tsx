import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AosProvider from "@/Provider/AosProvider/AosProvider";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";
import QueryProvider from "@/Provider/QueryProvider/QueryProvider";
import { TranslationProvider } from "@/Provider/TranslationProvider/TranslationContext";
import { getSiteSettings } from "@/Hooks/api/cms_api";

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
  let faviconUrl = "/favicon.svg";
  const siteSettings = await getSiteSettings();
  if (siteSettings?.data?.favicon) {
    faviconUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${siteSettings.data.favicon}`;
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <TranslationProvider>
          <QueryProvider>
            <AuthProvider>
              <GoogleOAuthProvider
                clientId={`${process.env.NEXT_PUBLIC_GOOGLE_AUTH_ID}`}
              >
                <AosProvider>{children}</AosProvider>
                <Toaster />
                <div id="google_translate_element" />
              </GoogleOAuthProvider>
            </AuthProvider>
          </QueryProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
