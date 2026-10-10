import { motion } from 'framer-motion'
import SectionWithShapes from './SectionWithShapes'
import { RevealGroup, RevealItem, RevealNumber, itemVariant } from './Reveal'
import { skillsClusters } from '../config/shapes'
import { useT } from '../context/LanguageContext'

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Figma',
  'Git',
  'Docker',
]

export default function Skills() {
  const t = useT()

  return (
    <SectionWithShapes id="skills" clusters={skillsClusters} className="section-pad border-t border-subtle">
      <div className="section-grid">
        <RevealNumber>
          <span className="section-num">02</span>
        </RevealNumber>

        <RevealGroup>
          <RevealItem>
            <h2 className="section-title mb-8 sm:mb-10">{t.skills.title}</h2>
          </RevealItem>
          <motion.ul
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            }}
          >
            {skills.map((skill) => (
              <motion.li
                key={skill}
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span className="skill-tag font-medium">{skill}</span>
              </motion.li>
            ))}
          </motion.ul>
        </RevealGroup>
      </div>
    </SectionWithShapes>
  )
}
