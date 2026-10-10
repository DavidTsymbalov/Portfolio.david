import { useT } from '../context/LanguageContext'

export default function Footer() {
  const t = useT()
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 border-t border-subtle py-8 sm:py-10"
      style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="page-wrap flex flex-col gap-3 text-sm text-neutral-500 dark:text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:text-[0.95rem]">
        <p>© {year} David Tsymbalov</p>
        <a
          href="https://t.me/DavidTsymbalov"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline w-fit decoration-neutral-500"
        >
          {t.footer.telegram}
        </a>
      </div>
    </footer>
  )
}
