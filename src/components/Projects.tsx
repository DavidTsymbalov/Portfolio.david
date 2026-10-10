import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import { projectsClusters } from '../config/shapes'
import { useT } from '../context/LanguageContext'

export default function Projects() {
  const t = useT()

  return (
    <SectionWithShapes id="projects" clusters={projectsClusters} className="section-pad border-t border-subtle">
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">03</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-6 sm:mb-8">{t.projects.title}</h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text">
              {t.projects.bodyBefore}
              {' '}
              <a href="#contact" className="link-underline">
                {t.projects.link}
              </a>
              {' '}
              {t.projects.bodyAfter}
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
