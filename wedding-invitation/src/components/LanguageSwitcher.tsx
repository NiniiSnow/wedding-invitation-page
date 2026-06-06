import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../context/LanguageContext';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ka', label: 'ქართული' },
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => setLanguage(lang.code)}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
