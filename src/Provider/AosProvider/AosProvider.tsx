"use client";
import "aos/dist/aos.css";
import "./aos-custom.css";
import React, { useEffect } from "react";
import AOS from "aos";

function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-in-out",
      offset: 50,
    });

    AOS.refresh();
  }, []);

  return <>{children}</>;
}

export default AosProvider;
