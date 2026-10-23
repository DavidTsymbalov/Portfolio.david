import { useEffect, useRef, useState } from 'react'
import { LANG_SCRAMBLE_EVENT, runScramble } from '../lib/scramble'

type Props = {
  text: string
  className?: string
  /** Scramble on pointer hover (nav links) */
  hover?: boolean
  /** Scramble when the text itself changes (language switch) */
  onLangChange?: boolean
  as?: 'span' | 'a'
  href?: string
}

export default function ScrambleText({
  text,
  className,
  hover = false,
  onLangChange = false,
  as = 'span',
  href,
}: Props) {
  const [display, setDisplay] = useState(text)
  const cancelRef = useRef<(() => void) | null>(null)
  const textRef = useRef(text)
  const readyRef = useRef(false)
  textRef.current = text

  const play = (duration: number) => {
    cancelRef.current?.()
    const len = Array.from(textRef.current).filter((c) => /\p{L}/u.test(c)).length
    // Scramble only the last 2–4 letters (never the whole word)
    const tailLength = Math.min(4, Math.max(2, Math.ceil(len * 0.35)))
    cancelRef.current = runScramble(textRef.current, {
      duration,
      interval: 24,
      tailLength,
      onFrame: setDisplay,
    })
  }

  useEffect(() => {
    cancelRef.current?.()
    setDisplay(text)
    if (!readyRef.current) {
      readyRef.current = true
      return
    }
    if (onLangChange) {
      const id = window.setTimeout(() => play(400), 20)
      return () => window.clearTimeout(id)
    }
  }, [text, onLangChange])

  useEffect(() => {
    if (!onLangChange) return
    const onEvent = () => play(400)
    window.addEventListener(LANG_SCRAMBLE_EVENT, onEvent)
    return () => window.removeEventListener(LANG_SCRAMBLE_EVENT, onEvent)
  }, [onLangChange])

  useEffect(() => () => cancelRef.current?.(), [])

  const sharedProps = {
    className,
    'data-no-scramble': true,
    children: display,
    style: {
      display: 'inline-block' as const,
      minWidth: `${Math.max(text.length, 1)}ch`,
      whiteSpace: 'nowrap' as const,
    },
  }

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        {...sharedProps}
        onMouseEnter={hover ? () => play(500) : undefined}
      />
    )
  }

  return (
    <span
      {...sharedProps}
      onMouseEnter={hover ? () => play(500) : undefined}
    />
  )
}
