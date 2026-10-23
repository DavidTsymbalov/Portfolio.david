import { useEffect, useRef, useState } from 'react'
import { runScramble } from '../lib/scramble'

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
    cancelRef.current = runScramble(textRef.current, {
      duration,
      interval: 24,
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
