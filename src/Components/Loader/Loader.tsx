"use client";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

export function Loader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <HashLoader color="#0184ff" size={isMobile ? 50 : 60} />;
}
