import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import { aboutClusters } from '../config/shapes'
import { useT } from '../context/LanguageContext'

export default function About() {
  const t = useT()

  return (
    <SectionWithShapes id="about" clusters={aboutClusters} className="section-pad">
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">01</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-6 sm:mb-8">{t.about.title}</h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text">{t.about.p1}</p>
          </RevealItem>
          <RevealItem>
            <p className="body-text mt-4 sm:mt-5">{t.about.p2}</p>
          </RevealItem>
          <RevealItem>
            <p className="body-text mt-4 sm:mt-5">{t.about.p3}</p>
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
