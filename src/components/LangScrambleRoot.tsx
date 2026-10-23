import type { ReactNode } from 'react'
import { useLangScramble } from '../hooks/useLangScramble'

export default function LangScrambleRoot({ children }: { children: ReactNode }) {
  useLangScramble()
  return <div data-scramble-root>{children}</div>
}
