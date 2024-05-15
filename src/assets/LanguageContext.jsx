import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ml"); // 'ml' for Malayalam, 'en' for English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ml" ? "en" : "ml"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
