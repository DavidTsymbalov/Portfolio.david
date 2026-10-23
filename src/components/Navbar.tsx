import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import type { Lang } from '../i18n/translations'
import ScrambleText from './ScrambleText'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const headerBg = scrolled
    ? theme === 'dark'
      ? 'border-b border-subtle bg-[#0c0c0c]/88 backdrop-blur-lg'
      : 'border-b border-subtle bg-[#f2f1ed]/88 backdrop-blur-lg'
    : 'bg-transparent'

  const switchLang = (next: Lang) => {
    if (next !== lang) setLang(next)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${headerBg}`}
    >
      <nav className="nav-inner">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight sm:text-xl lg:text-[1.35rem]"
        >
          David T.
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <ScrambleText
                as="a"
                href={link.href}
                text={link.label}
                hover
                onLangChange
                className="text-[0.95rem] font-medium text-neutral-500 transition-colors hover:text-ink dark:text-neutral-400 dark:hover:text-white lg:text-base"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={t.nav.themeToggle}
            className="flex h-8 w-8 items-center justify-center rounded-full text-base text-neutral-500 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <div
            role="group"
            aria-label={t.nav.langSwitch}
            data-no-scramble
            className="flex items-center gap-1 text-[0.7rem] font-semibold tracking-wide sm:text-[0.75rem]"
          >
            <button
              type="button"
              onClick={() => switchLang('en')}
              aria-pressed={lang === 'en'}
              className={`rounded px-1.5 py-1 transition-colors ${
                lang === 'en'
                  ? 'text-ink dark:text-white'
                  : 'text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300'
              }`}
            >
              {t.nav.langEn}
            </button>
            <span className="text-neutral-300 dark:text-neutral-600" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              onClick={() => switchLang('ru')}
              aria-pressed={lang === 'ru'}
              className={`rounded px-1.5 py-1 transition-colors ${
                lang === 'ru'
                  ? 'text-ink dark:text-white'
                  : 'text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300'
              }`}
            >
              {t.nav.langRu}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 md:hidden"
            aria-label={t.nav.menu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? '✕' : '≡'}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-subtle bg-surface dark:bg-surface-dark md:hidden"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <div className="page-wrap flex flex-col py-3" data-no-scramble>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center text-base font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <ScrambleText text={link.label} onLangChange />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
