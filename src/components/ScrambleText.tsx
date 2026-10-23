import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

type Props = {
  text: string
  className?: string
  /** Hover scramble duration (ms) */
  hoverDuration?: number
  /** Language-change scramble duration (ms) */
  swapDuration?: number
}

export default function ScrambleText({
  text,
  className,
  hoverDuration = 420,
  swapDuration = 260,
}: Props) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef<number | null>(null)
  const runningRef = useRef(false)
  const targetRef = useRef(text)
  const prevTextRef = useRef(text)
  const mountedRef = useRef(false)

  const stop = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
    runningRef.current = false
  }

  const scrambleTo = (target: string, duration: number) => {
    stop()
    targetRef.current = target
    runningRef.current = true
    const start = performance.now()

    const tick = (now: number) => {
      if (!runningRef.current) return
      const progress = Math.min(1, (now - start) / duration)
      const reveal = Math.floor(progress * target.length)

      let next = ''
      for (let i = 0; i < target.length; i++) {
        if (i < reveal) {
          next += target[i]
        } else {
          next += target[i] === ' ' ? ' ' : randomChar()
        }
      }

      setDisplay(next)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(target)
        runningRef.current = false
        frameRef.current = null
      }
    }

    frameRef.current = requestAnimationFrame(tick)
  }

  // Fast scramble when language label changes
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      prevTextRef.current = text
      targetRef.current = text
      setDisplay(text)
      return
    }

    if (text === prevTextRef.current) return
    prevTextRef.current = text
    scrambleTo(text, swapDuration)

    return stop
  }, [text, swapDuration])

  useEffect(() => stop, [])

  return (
    <span
      className={className}
      onMouseEnter={() => scrambleTo(targetRef.current, hoverDuration)}
      aria-label={text}
    >
      {display}
    </span>
  )
}
