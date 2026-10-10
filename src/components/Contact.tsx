import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import { contactClusters } from '../config/shapes'
import { useT } from '../context/LanguageContext'

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
            <p className="body-text mb-8 max-w-sm sm:mb-10 lg:max-w-md">
              {t.contact.lead}
            </p>
          </RevealItem>
          <RevealItem>
            <a
              href="https://t.me/DavidTsymbalovWork"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-main w-full sm:w-auto"
            >
              {t.contact.handle}
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
