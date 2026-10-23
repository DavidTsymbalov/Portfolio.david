/** Pools of similar-looking glyphs (prefer lowercase / symbols, not CAPS). */
const LOOKALIKES: Record<string, string> = {
  a: 'a@αд4',
  b: 'b6ß',
  c: 'cсç¢',
  d: 'dđ',
  e: 'eе3€',
  f: 'fƒ',
  g: 'g9q',
  h: 'hн#',
  i: 'iі1!|',
  j: 'jј',
  k: 'kк*',
  l: 'l1|ł',
  m: 'mм',
  n: 'nпñ',
  o: 'oо0ø',
  p: 'pр',
  q: 'q9g',
  r: 'rг',
  s: 'sѕ5$',
  t: 'tт+',
  u: 'uиµ',
  v: 'vν',
  w: 'wшω',
  x: 'x×х',
  y: 'yу¥',
  z: 'z2',
  а: 'a@αд4',
  б: 'b6',
  в: 'bв',
  г: 'rг',
  д: 'dд',
  е: 'eе3',
  ж: 'xж',
  з: '3з',
  и: 'uи',
  й: 'uй',
  к: 'kк*',
  л: 'nл',
  м: 'mм',
  н: 'hн#',
  о: 'oо0',
  п: 'nп',
  р: 'pр',
  с: 'cсç',
  т: 'tт+',
  у: 'yу',
  ф: 'fф',
  х: 'xх',
  ц: 'uц',
  ч: 'yч',
  ш: 'wш',
  щ: 'wщ',
  ъ: 'bъ',
  ы: 'bы',
  ь: 'bь',
  э: 'eэ',
  ю: 'uю',
  я: 'rя',
}

const FALLBACK = 'abcdefghijklmnopqrstuvwxyz0123456789*#@&%+=~'

export function scrambleChar(char: string): string {
  if (!char.trim()) return char
  if (/[0-9]/.test(char)) {
    return '0123456789*#+'[Math.floor(Math.random() * 12)]
  }
  const key = char.toLowerCase()
  const pool = LOOKALIKES[key] ?? FALLBACK
  return pool[Math.floor(Math.random() * pool.length)]
}

export function scrambleText(text: string): string {
  return Array.from(text, (ch) => scrambleChar(ch)).join('')
}

export type ScrambleOptions = {
  /** Total animation duration in ms */
  duration?: number
  /** How often to refresh glyphs */
  interval?: number
  /** Chance a character is already revealed toward the end */
  onFrame?: (value: string) => void
}

/** Animates text from scramble → final. Returns cancel fn. */
export function runScramble(
  text: string,
  { duration = 420, interval = 28, onFrame }: ScrambleOptions = {},
): () => void {
  const chars = Array.from(text)
  const started = performance.now()
  let timer: number | undefined
  let raf = 0
  let cancelled = false

  const tick = () => {
    if (cancelled) return
    const elapsed = performance.now() - started
    const progress = Math.min(1, elapsed / duration)
    // Reveal left→right as we progress
    const revealCount = Math.floor(progress * chars.length)

    const next = chars
      .map((ch, i) => {
        if (!ch.trim()) return ch
        if (i < revealCount) return ch
        return scrambleChar(ch)
      })
      .join('')

    onFrame?.(next)

    if (progress >= 1) {
      onFrame?.(text)
      return
    }
    timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, interval)
  }

  raf = requestAnimationFrame(tick)

  return () => {
    cancelled = true
    if (timer) window.clearTimeout(timer)
    cancelAnimationFrame(raf)
    onFrame?.(text)
  }
}

export const LANG_SCRAMBLE_EVENT = 'portfolio:lang-scramble'
