import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const whiteList = ["EN", "ES", "CA"];

  const setDefaultLanguage = () => {
    let storageLang = window.localStorage.getItem("lang");
    let result = "EN";
    if (storageLang && whiteList.includes(storageLang)) {
      result = storageLang;
    }
    return result;
  };
  const [language, setLanguage] = useState(setDefaultLanguage());

  const changeLanguage = (lang) => {
    console.log("hi");
    if (!whiteList.includes(lang)) return;
    setLanguage(lang);
    window.localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage, language, whiteList }}>
      {children}
    </LanguageContext.Provider>
  );
};
