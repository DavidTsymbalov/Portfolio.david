import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem } from './Reveal'
import { heroClusters } from '../config/shapes'
import { useT } from '../context/LanguageContext'

export default function Hero() {
  const t = useT()

  return (
    <SectionWithShapes
      id="home"
      clusters={heroClusters}
      className="nav-offset flex min-h-[88dvh] items-end pb-12 sm:min-h-[92vh] sm:items-center sm:pb-0"
    >
      <div className="page-wrap w-full">
        <RevealGroup>
          <RevealItem>
            <h1 className="font-display text-[clamp(2.5rem,10vw,5rem)] font-bold leading-[0.95] tracking-tight sm:text-[clamp(3rem,8vw,6.5rem)] lg:text-[clamp(3.5rem,6vw,7rem)]">
              David
              <br />
              <span className="text-neutral-500 dark:text-neutral-500">Tsymbalov</span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="body-text mt-6 max-w-md sm:mt-8 lg:max-w-lg">
              {t.hero.lead}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a href="#contact" className="btn-main w-full sm:w-auto">
                {t.hero.cta}
              </a>
              <a
                href="https://t.me/DavidTsymbalovWork"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline flex min-h-[48px] items-center justify-center text-base sm:min-h-0 sm:justify-start sm:text-[0.95rem] lg:text-base"
              >
                {t.hero.telegram}
              </a>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
