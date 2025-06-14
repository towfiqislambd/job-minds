"use client";

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { usePathname } from "next/navigation";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();

  return (
    <>
      {pathName.includes("/auth/") ? (
        <>
          {children}
        </>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
