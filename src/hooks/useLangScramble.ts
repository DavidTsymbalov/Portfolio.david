import { useEffect, useRef } from 'react'
import { LANG_SCRAMBLE_EVENT } from '../lib/scramble'
import { useLanguage } from '../context/LanguageContext'

/**
 * Notify listeners (e.g. ScrambleText) on language change.
 * Avoids mutating React-owned DOM text nodes — that caused missing sections.
 */
export function useLangScramble(_rootSelector = '[data-scramble-root]') {
  const { lang } = useLanguage()
  const prevLang = useRef(lang)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      prevLang.current = lang
      return
    }
    if (prevLang.current === lang) return
    prevLang.current = lang
    window.dispatchEvent(new Event(LANG_SCRAMBLE_EVENT))
  }, [lang])
}
