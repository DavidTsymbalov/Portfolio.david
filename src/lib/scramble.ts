/** Similar-looking letters only (lowercase Latin / Cyrillic) — no symbols or digits. */
const LOOKALIKES: Record<string, string> = {
  a: 'aадeo',
  b: 'bьвъд',
  c: 'cсeo',
  d: 'dдрб',
  e: 'eеас',
  f: 'fрт',
  g: 'gqyp',
  h: 'hнпb',
  i: 'iіlj',
  j: 'jiуl',
  k: 'kкxи',
  l: 'liіj',
  m: 'mмнw',
  n: 'nпмh',
  o: 'oоace',
  p: 'pрgq',
  q: 'qgpb',
  r: 'rгkx',
  s: 'sсzе',
  t: 'tтfr',
  u: 'uиуй',
  v: 'vуwи',
  w: 'wшмv',
  x: 'xхkж',
  y: 'yугv',
  z: 'zsеc',
  а: 'аaедo',
  б: 'бbьд',
  в: 'вbьъ',
  г: 'гrт',
  д: 'дdаб',
  е: 'еeaс',
  ж: 'жxк',
  з: 'зsе',
  и: 'иuйн',
  й: 'йиuу',
  к: 'кkxи',
  л: 'лnп',
  м: 'ммнw',
  н: 'нhпи',
  о: 'оoaе',
  п: 'пnнh',
  р: 'рpо',
  с: 'сcеs',
  т: 'ттгr',
  у: 'уyйи',
  ф: 'фop',
  х: 'хxк',
  ц: 'цуи',
  ч: 'чуy',
  ш: 'шwмщ',
  щ: 'щшw',
  ъ: 'ъьb',
  ы: 'ыьи',
  ь: 'ьъb',
  э: 'эеe',
  ю: 'юuи',
  я: 'яrа',
}

const FALLBACK = 'abcdefghijklmnopqrstuvwxyzабвгдежзийклмнопрстуфхцчшщыэюя'

export function scrambleChar(char: string): string {
  if (!char.trim()) return char
  // Keep digits/punctuation as-is; only scramble letters
  if (!/\p{L}/u.test(char)) return char

  const key = char.toLowerCase()
  const pool = LOOKALIKES[key] ?? FALLBACK
  return pool[Math.floor(Math.random() * pool.length)]
}

export function scrambleText(text: string): string {
  return Array.from(text, (ch) => scrambleChar(ch)).join('')
}

export type ScrambleOptions = {
  duration?: number
  interval?: number
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
