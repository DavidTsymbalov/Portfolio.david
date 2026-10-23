import { useEffect, useRef } from 'react'
import { scrambleChar, LANG_SCRAMBLE_EVENT } from '../lib/scramble'
import { useLanguage } from '../context/LanguageContext'

/**
 * On language change: briefly scramble visible text nodes under [data-scramble-root],
 * then restore real content (React will re-render translations).
 */
export function useLangScramble(rootSelector = '[data-scramble-root]') {
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

    const root = document.querySelector(rootSelector)
    if (!root) return

    const originals: { node: Text; value: string }[] = []
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent) return NodeFilter.FILTER_REJECT
        const tag = parent.tagName
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
          return NodeFilter.FILTER_REJECT
        }
        if (parent.closest('[data-no-scramble]')) return NodeFilter.FILTER_REJECT
        const text = node.textContent ?? ''
        if (!text.trim()) return NodeFilter.FILTER_REJECT
        if (text.trim().length < 2) return NodeFilter.FILTER_REJECT
        return NodeFilter.FILTER_ACCEPT
      },
    })

    let current = walker.nextNode()
    while (current) {
      const node = current as Text
      originals.push({ node, value: node.textContent ?? '' })
      current = walker.nextNode()
    }

    const started = performance.now()
    const duration = 420
    let raf = 0
    let alive = true

    const tick = () => {
      if (!alive) return
      const progress = Math.min(1, (performance.now() - started) / duration)

      for (const { node, value } of originals) {
        if (!node.isConnected) continue
        if (progress >= 1) {
          node.textContent = value
          continue
        }
        const chars = Array.from(value)
        const reveal = Math.floor(progress * chars.length)
        node.textContent = chars
          .map((ch, i) => {
            if (!ch.trim()) return ch
            if (i < reveal) return ch
            return scrambleChar(ch)
          })
          .join('')
      }

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)

    return () => {
      alive = false
      cancelAnimationFrame(raf)
    }
  }, [lang, rootSelector])
}
