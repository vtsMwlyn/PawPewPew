// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

// EN translations
import alcoveEn from '../json/en/alcove.json';
import buttonEn from '../json/en/button.json';
import characterEn from '../json/en/character.json';
import ctaEn from '../json/en/cta.json';
import featuresEn from '../json/en/features.json';
import footerEn from '../json/en/footer.json';
import heroEn from '../json/en/hero.json';
import highlightEn from '../json/en/highlight.json';
import mapEn from '../json/en/map.json';
import navbarEn from '../json/en/navbar.json';
import relicsEn from '../json/en/relics.json';

// CN translations
import alcoveCn from '../json/cn/alcove.json';
import buttonCn from '../json/cn/button.json';
import characterCn from '../json/cn/character.json';
import ctaCn from '../json/cn/cta.json';
import featuresCn from '../json/cn/features.json';
import footerCn from '../json/cn/footer.json';
import heroCn from '../json/cn/hero.json';
import highlightCn from '../json/cn/highlight.json';
import mapCn from '../json/cn/map.json';
import navbarCn from '../json/cn/navbar.json';
import relicsCn from '../json/cn/relics.json';

const translations = {
  en: {
    alcove: alcoveEn,
    button: buttonEn,
    character: characterEn,
    cta: ctaEn,
    features: featuresEn,
    footer: footerEn,
    hero: heroEn,
    highlight: highlightEn,
    map: mapEn,
    navbar: navbarEn,
    relics: relicsEn,
  },
  cn: {
    alcove: alcoveCn,
    button: buttonCn,
    character: characterCn,
    cta: ctaCn,
    features: featuresCn,
    footer: footerCn,
    hero: heroCn,
    highlight: highlightCn,
    map: mapCn,
    navbar: navbarCn,
    relics: relicsCn,
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('preferred_lang') || 'en';
  });

  const toggleLanguage = (selectedLang) => {
    setLang((prev) => {
      const next =
        typeof selectedLang === 'string'
          ? selectedLang
          : prev === 'en'
          ? 'cn'
          : 'en';
      try {
        localStorage.setItem('preferred_lang', next);
      } catch (e) {
        console.error('Failed to save language preference', e);
      }
      return next;
    });
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);