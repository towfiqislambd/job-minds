"use client";
import { createContext, useContext, useEffect, ReactNode } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: any;
          },
          id: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

interface TranslationContextType {
  changeLanguage: (langCode: string) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const changeLanguage = (langCode: string): void => {
    if (window.google?.translate) {
      const selectField =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (selectField) {
        selectField.value = langCode;
        selectField.dispatchEvent(new Event("change"));
      }
    }
  };

  useEffect(() => {
    const loadGoogleTranslate = (): void => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = (): void => {
      new window.google!.translate!.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,ja,bn,hi",
          layout: (window.google!.translate!.TranslateElement as any)
            .InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };

    if (!window.google?.translate) {
      loadGoogleTranslate();
    }

    return () => {
      document.querySelector(".goog-te-menu-frame")?.remove();
    };
  }, []);

  return (
    <TranslationContext.Provider value={{ changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
