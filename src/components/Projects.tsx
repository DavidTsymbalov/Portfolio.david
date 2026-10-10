import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber } from './Reveal'
import ProjectCard from './ProjectCard'
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
            <p className="body-text mb-8 sm:mb-10">{t.projects.intro}</p>
          </RevealItem>
          <RevealItem>
            <ProjectCard />
          </RevealItem>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
