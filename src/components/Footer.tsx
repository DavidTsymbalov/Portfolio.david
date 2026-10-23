import GitHubIcon from './GitHubIcon'
import { useT } from '../context/LanguageContext'

const GITHUB_URL = 'https://github.com/DavidTsymbalov'

export default function Footer() {
  const t = useT()
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 border-t border-subtle py-8 sm:py-10"
      style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="page-wrap flex flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:text-[0.95rem]">
        <p>© {year} David Tsymbalov</p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://t.me/DavidTsymbalov"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline w-fit decoration-neutral-500"
          >
            {t.footer.telegram}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="link-underline decoration-neutral-500">{t.footer.github}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
