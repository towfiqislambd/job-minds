import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";
import { getSiteSettings } from "@/Hooks/api/server_side_api";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();

  return (
    <>
      <Navbar siteSettings={siteSettings?.data} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
