import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useT } from '../context/LanguageContext'

export default function ProjectCard() {
  const t = useT()
  const [open, setOpen] = useState(false)
  const p = t.projects.notevault

  return (
    <div className="project-card w-full overflow-hidden rounded-2xl border border-subtle">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 sm:gap-4 sm:px-5 sm:py-5"
      >
        <img
          src="/images/notevault-logo.png"
          alt=""
          width={44}
          height={44}
          className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11"
        />

        <div className="min-w-0 flex-1">
          <p className="font-notevault text-[1.15rem] leading-none tracking-tight text-ink dark:text-ink-dark sm:text-[1.25rem]">
            {p.name}
          </p>
          <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 sm:text-[0.95rem]">
            {p.role}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors dark:border-neutral-700 dark:text-neutral-300 sm:text-sm">
          {open ? p.collapse : p.expand}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-subtle"
          >
            <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[0.95rem] leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
                {p.description}
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {p.credit}
              </p>
              <a
                href="https://t.me/notevaultt"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex text-sm sm:text-[0.95rem]"
              >
                {p.channelLabel} @{p.channel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
