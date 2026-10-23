import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import GitHubIcon from './GitHubIcon'
import { contactClusters } from '../config/shapes'
import { useT } from '../context/LanguageContext'

const GITHUB_URL = 'https://github.com/DavidTsymbalov'

export default function Contact() {
  const t = useT()

  return (
    <SectionWithShapes
      id="contact"
      clusters={contactClusters}
      className="section-pad border-t border-subtle !pb-[calc(5rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">04</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-5 sm:mb-6">{t.contact.title}</h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text mb-6 max-w-sm sm:mb-8 lg:max-w-md">
              {t.contact.lead}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mb-8 max-w-md border-l-2 border-neutral-300 pl-4 dark:border-neutral-700 sm:pl-5">
              <p className="mb-1 font-medium">{t.contact.teamTitle}</p>
              <p className="text-[0.95rem] leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                {t.contact.teamText}
              </p>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="https://t.me/DavidTsymbalov"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-main w-full sm:w-auto"
              >
                {t.contact.handle}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border border-neutral-300 bg-transparent px-7 py-3 text-[0.95rem] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white dark:border-neutral-700 dark:hover:border-white dark:hover:bg-white dark:hover:text-ink sm:min-h-[52px] sm:w-auto sm:px-8 sm:text-base"
              >
                <GitHubIcon className="h-[1.15rem] w-[1.15rem]" />
                {t.contact.github}
              </a>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
