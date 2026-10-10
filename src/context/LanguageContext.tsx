import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang, type TranslationKeys } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function isLang(value: string | null): value is Lang {
  return value === 'en' || value === 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    if (isLang(saved)) return saved
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)

    const meta = translations[lang].meta
    document.title = 'David Tsymbalov'

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', meta.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.ogTitle)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', meta.ogDescription)

    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', lang === 'ru' ? 'ru_RU' : 'en_US')
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export function useT() {
  return useLanguage().t
}
