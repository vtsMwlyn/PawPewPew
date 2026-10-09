// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Import semua data JSON kamu
import buttonsEn from '../json/en/button.json';
import buttonsEn from '../json/en/character.json';
import buttonsEn from '../json/en/features.json';
import buttonsEn from '../json/en/highlight.json';
import buttonsEn from '../json/en/map.json';
import buttonsEn from '../json/en/relics.json';
import buttonsEn from '../json/en/button.json';

const translations = {
  en: { buttons: buttonsEn },
  id: { buttons: buttonsId },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // default 'en'

  // Fungsi buat ganti bahasa
  const toggleLanguage = (selectedLang) => {
    setLang(selectedLang);
  };

  // Kirim data JSON sesuai bahasa yang aktif
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);