import { useEffect, useRef, useState } from 'react'
import { LANG_SCRAMBLE_EVENT, runScramble } from '../lib/scramble'

type Props = {
  text: string
  className?: string
  hover?: boolean
  onLangChange?: boolean
  as?: 'span' | 'a'
  href?: string
}

const FAST_MS = 240

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

  const play = (duration = FAST_MS) => {
    cancelRef.current?.()
    cancelRef.current = runScramble(textRef.current, {
      duration,
      interval: 14,
      keepFirstLetter: true,
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
      const id = window.setTimeout(() => play(FAST_MS), 16)
      return () => window.clearTimeout(id)
    }
  }, [text, onLangChange])

  useEffect(() => {
    if (!onLangChange) return
    const onEvent = () => play(FAST_MS)
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
        onMouseEnter={hover ? () => play(FAST_MS) : undefined}
      />
    )
  }

  return (
    <span
      {...sharedProps}
      onMouseEnter={hover ? () => play(FAST_MS) : undefined}
    />
  )
}
